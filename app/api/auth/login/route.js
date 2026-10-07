import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';
import { SignJWT, jwtVerify } from 'jose'; // Agregamos jwtVerify
import { send2FAEmail } from '../../../../lib/mailer';

export async function POST(request) {
  try {
    const { username, password, twoFaCode } = await request.json();

    if (!username || !password) return NextResponse.json({ error: 'Faltan datos.' }, { status: 400 });

    const pool = await connectToDatabase();
    const checkUser = await pool.request()
      .input('username', username)
      .input('password', password)
      .query(`
        SELECT memb___id, mail_addr, mail_chek, fpas_ques, fpas_answ 
        FROM MEMB_INFO 
        WHERE memb___id = @username AND memb__pwd = @password
      `);

    if (checkUser.recordset.length === 0) return NextResponse.json({ error: 'Usuario o contraseña incorrectos.' }, { status: 401 });

    const user = checkUser.recordset[0];

    // EL ESCUDO ANTI-FANTASMAS
    if (user.mail_chek === '0' || user.mail_chek === 0) {
      return NextResponse.json({ error: 'Falta confirmar el correo. Revisa tu bandeja de entrada o SPAM.' }, { status: 403 });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    let skip2FA = false;

    // EL ESCUDO DE CORREO 2FA
    if (user.fpas_ques === '2FA_EMAIL') {
      
      // 1. Revisamos si tiene el "Pase de Confianza" activo de las últimas 6 horas
      const trustedCookie = request.cookies.get('mu_2fa_trusted');
      if (trustedCookie) {
        try {
          const { payload } = await jwtVerify(trustedCookie.value, secret);
          if (payload.username === username) {
            skip2FA = true; // El dispositivo es de confianza, saltamos el envío de correo
          }
        } catch (e) {
          // El pase expiró o es inválido, seguimos el flujo normal de pedir código
        }
      }

      // 2. Si no tiene el pase de confianza, le pedimos el código
      if (!skip2FA) {
        if (!twoFaCode) {
          // Generamos un código de 6 dígitos aleatorio
          const newCode = Math.floor(100000 + Math.random() * 900000).toString();
          
          await pool.request()
            .input('username', username)
            .input('code', newCode)
            .query(`UPDATE MEMB_INFO SET fpas_answ = @code WHERE memb___id = @username`);

          await send2FAEmail(user.mail_addr, username, newCode);

          return NextResponse.json({ error: 'require_2fa' }, { status: 403 });
        }

        if (twoFaCode !== user.fpas_answ) {
          return NextResponse.json({ error: 'El código de seguridad es incorrecto.' }, { status: 401 });
        }

        // Código correcto, lo borramos de la BD
        await pool.request()
          .input('username', username)
          .query(`UPDATE MEMB_INFO SET fpas_answ = NULL WHERE memb___id = @username`);
      }
    }

	// SI PASÓ TODAS LAS BARRERAS, CREAMOS LA SESIÓN (Dura 15 minutos)
    const token = await new SignJWT({ username: username })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('15m') 
      .sign(secret);

    const response = NextResponse.json({ success: true, message: 'Login exitoso.' });
    response.cookies.set('mu_session', token, {
      httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', maxAge: 15 * 60, path: '/',
    });

    // Si tiene el 2FA activado (y puso el código bien, o ya lo habíamos saltado), le damos/renovamos el "Pase de Confianza" por 6 horas
    if (user.fpas_ques === '2FA_EMAIL') {
      const trustedToken = await new SignJWT({ username: username, type: 'trusted_device' })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('6h') 
        .sign(secret);

      response.cookies.set('mu_2fa_trusted', trustedToken, {
        httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', maxAge: 60 * 60 * 6, path: '/',
      });
    }

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Error del servidor.' }, { status: 500 });
  }
}