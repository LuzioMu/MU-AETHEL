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

    const pool = await connectToDatabase();
    
    // bloc_code = 1 significa cuenta bloqueada en la base de datos de Mu Online.
    await pool.request()
      .input('username', username)
      .query(`UPDATE MEMB_INFO SET bloc_code = '1' WHERE memb___id = @username`);

    // Destruimos la sesión web actual forzando el logout
    const response = NextResponse.json({ success: true });
    response.cookies.delete('mu_session');
    return response;

  } catch (error) {
    return NextResponse.json({ error: 'Error del servidor al congelar la cuenta.' }, { status: 500 });
  }
}
