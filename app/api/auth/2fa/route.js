import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';
import { jwtVerify } from 'jose';

export async function GET(request) {
  try {
    const cookie = request.cookies.get('mu_session');
    if (!cookie) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });

    const secretJwt = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(cookie.value, secretJwt);
    const username = payload.username;

    const pool = await connectToDatabase();
    const checkUser = await pool.request()
      .input('username', username)
      .query(`SELECT fpas_ques FROM MEMB_INFO WHERE memb___id = @username`);

    // Usaremos '2FA_EMAIL' para saber si el usuario activó la seguridad por correo
    const is2FaEnabled = checkUser.recordset[0]?.fpas_ques === '2FA_EMAIL';

    return NextResponse.json({ enabled: is2FaEnabled });
  } catch (error) {
    return NextResponse.json({ error: 'Error del servidor.' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const cookie = request.cookies.get('mu_session');
    if (!cookie) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });

    const secretJwt = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(cookie.value, secretJwt);
    const username = payload.username;

    const { action } = await request.json(); // 'enable' o 'disable'

    const pool = await connectToDatabase();
    const newState = action === 'enable' ? '2FA_EMAIL' : '2FA_OFF';

    // Actualizamos el estado en la base de datos
    await pool.request()
      .input('username', username)
      .input('state', newState)
      .query(`UPDATE MEMB_INFO SET fpas_ques = @state WHERE memb___id = @username`);

    return NextResponse.json({ success: true, enabled: action === 'enable' });
  } catch (error) {
    return NextResponse.json({ error: 'Error del servidor.' }, { status: 500 });
  }
}