import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';
import { jwtVerify } from 'jose';

export async function POST(request) {
  try {
    // 1. Verificamos quién es el usuario leyendo su Cookie VIP (Pase VIP)
    const cookie = request.cookies.get('mu_session');
    if (!cookie) {
      return NextResponse.json({ error: 'No estás logueado.' }, { status: 401 });
    }

    // Desencriptamos la cookie para sacar el nombre de usuario
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(cookie.value, secret);
    const username = payload.username;

    // 2. Agarramos lo que el usuario escribió en el formulario
    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: 'Faltan datos.' }, { status: 400 });
    }

    const pool = await connectToDatabase();

    // 3. Verificamos que la contraseña actual que ingresó sea la correcta
    const checkUser = await pool.request()
      .input('username', username)
      .input('currentPassword', currentPassword)
      .query(`
        SELECT memb___id FROM MEMB_INFO 
        WHERE memb___id = @username AND memb__pwd = @currentPassword
      `);

    if (checkUser.recordset.length === 0) {
      return NextResponse.json({ error: 'La contraseña actual es incorrecta.' }, { status: 403 });
    }

    // 4. Si todo está bien, actualizamos la base de datos con la nueva clave
    await pool.request()
      .input('username', username)
      .input('newPassword', newPassword)
      .query(`
        UPDATE MEMB_INFO 
        SET memb__pwd = @newPassword 
        WHERE memb___id = @username
      `);

    return NextResponse.json({ success: true, message: 'Contraseña actualizada con éxito.' });

  } catch (error) {
    console.error('Error cambiando contraseña:', error);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}