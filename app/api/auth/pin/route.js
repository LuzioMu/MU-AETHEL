import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';
import { jwtVerify } from 'jose';

export async function POST(request) {
  try {
    const cookie = request.cookies.get('mu_session');
    if (!cookie) return NextResponse.json({ error: 'Sesión inválida.' }, { status: 401 });

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(cookie.value, secret);
    const username = payload.username;

    const { newPin } = await request.json();
    if (!newPin || newPin.length !== 7 || isNaN(newPin)) {
      return NextResponse.json({ error: 'El PIN debe ser un número exacto de 7 dígitos.' }, { status: 400 });
    }

    const pool = await connectToDatabase();
    await pool.request()
      .input('username', username)
      .input('newPin', newPin)
      .query(`UPDATE MEMB_INFO SET sno__numb = @newPin WHERE memb___id = @username`);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error del servidor.' }, { status: 500 });
  }
}
