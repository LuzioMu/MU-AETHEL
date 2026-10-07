import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';
import { jwtVerify } from 'jose';

export async function POST(request) {
  try {
    const { token, newPassword } = await request.json();

    if (!token || !newPassword) {
      return NextResponse.json({ error: 'Faltan datos.' }, { status: 400 });
    }

    // 1. Verificamos que el pase temporal sea válido y no esté vencido
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    let payload;
    try {
      const verified = await jwtVerify(token, secret);
      payload = verified.payload;
    } catch (err) {
      return NextResponse.json({ error: 'El enlace mágico ha expirado o es inválido.' }, { status: 401 });
    }

    // 2. Verificamos que el pase sea específicamente para resetear contraseña
    if (payload.intent !== 'reset_password') {
      return NextResponse.json({ error: 'Token inválido para esta acción.' }, { status: 403 });
    }

    const username = payload.username;
    const pool = await connectToDatabase();

    // 3. Sobreescribimos la vieja contraseña con la nueva
    await pool.request()
      .input('username', username)
      .input('newPassword', newPassword)
      .query(`
        UPDATE MEMB_INFO 
        SET memb__pwd = @newPassword 
        WHERE memb___id = @username
      `);

    return NextResponse.json({ success: true, message: 'Contraseña restablecida con éxito.' });

  } catch (error) {
    console.error('Error en reset:', error);
    return NextResponse.json({ error: 'Error del servidor.' }, { status: 500 });
  }
}