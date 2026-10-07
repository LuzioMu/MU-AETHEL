import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';

export async function GET(request) {
  try {
    // Agarramos el token que viene en el link del correo
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Desencriptamos el nombre de usuario que ocultamos en el Paso 2
    const username = Buffer.from(token, 'base64').toString('ascii');

    // Cambiamos el mail_chek a '1' en la base de datos
    const pool = await connectToDatabase();
    await pool.request()
      .input('username', username)
      .query(`UPDATE MEMB_INFO SET mail_chek = '1' WHERE memb___id = @username`);

    // Lo mandamos al login para que entre
    return NextResponse.redirect(new URL('/login', request.url));
    
  } catch (error) {
    console.error('Error verificando:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}