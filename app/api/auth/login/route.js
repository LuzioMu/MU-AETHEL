import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';
import { SignJWT } from 'jose';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Faltan datos.' }, { status: 400 });
    }

    const pool = await connectToDatabase();

    // Buscamos al usuario en la base de datos
    const checkUser = await pool.request()
      .input('username', username)
      .input('password', password)
      .query(`
        SELECT memb___id FROM MEMB_INFO 
        WHERE memb___id = @username AND memb__pwd = @password
      `);

    if (checkUser.recordset.length === 0) {
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos.' }, { status: 401 });
    }

    // Creamos el "Pase VIP" (Token)
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ username: username })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h') 
      .sign(secret);

    // ARMAMOS LA RESPUESTA Y LE PEGAMOS LA COOKIE ACÁ
    const response = NextResponse.json({ success: true, message: 'Login exitoso.' });
    
    response.cookies.set('mu_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 día en segundos
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Error en login:', error);
    return NextResponse.json({ error: 'Error del servidor.' }, { status: 500 });
  }
}
