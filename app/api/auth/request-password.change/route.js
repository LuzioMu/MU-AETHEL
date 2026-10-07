import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';
import { jwtVerify, SignJWT } from 'jose';
import { sendPasswordResetEmail } from '../../../../lib/mailer';

export async function POST(request) {
  try {
    const cookie = request.cookies.get('mu_session');
    if (!cookie) return NextResponse.json({ error: 'Sesión inválida.' }, { status: 401 });

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(cookie.value, secret);
    const username = payload.username;

    const pool = await connectToDatabase();
    const result = await pool.request()
      .input('username', username)
      .query(`SELECT mail_addr FROM MEMB_INFO WHERE memb___id = @username`);

    if (result.recordset.length === 0) return NextResponse.json({ error: 'Usuario no encontrado.' }, { status: 404 });
    const email = result.recordset[0].mail_addr;

    // Generamos Token temporal de 15 minutos
    const token = await new SignJWT({ username: username, intent: 'reset_password' })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('15m')
      .sign(secret);

    await sendPasswordResetEmail(email, username, token);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error del servidor.' }, { status: 500 });
  }
}
