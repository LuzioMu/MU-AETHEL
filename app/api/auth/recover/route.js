import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';
import { SignJWT } from 'jose';
import { sendPasswordResetEmail } from '../../../../lib/mailer'; 

export async function POST(request) {
  try {
    const { username, email } = await request.json();

    if (!username || !email) {
      return NextResponse.json({ error: 'Faltan datos.' }, { status: 400 });
    }

    const pool = await connectToDatabase();
    
    // Verificamos si la cuenta existe y si el correo es el correcto
    const checkUser = await pool.request()
      .input('username', username)
      .input('email', email)
      .query(`SELECT memb___id FROM MEMB_INFO WHERE memb___id = @username AND mail_addr = @email`);

    if (checkUser.recordset.length === 0) {
      // Truco de seguridad: No le decimos al hacker "el correo no existe", damos un mensaje genérico.
      return NextResponse.json({ success: true, message: 'Si los datos son correctos, recibirás un correo en breve.' });
    }

    // Generamos un Pase Temporal (Token) que expira en 15 minutos
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ username: username, intent: 'reset_password' })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('15m') 
      .sign(secret);

    // Enviamos el correo (función que armaremos en el siguiente paso)
    await sendPasswordResetEmail(email, username, token);

    return NextResponse.json({ success: true, message: 'Si los datos son correctos, recibirás un correo en breve.' });

  } catch (error) {
    console.error('Error en recover:', error);
    return NextResponse.json({ error: 'Error del servidor.' }, { status: 500 });
  }
}