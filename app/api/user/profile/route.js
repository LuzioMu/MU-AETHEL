import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';
import { jwtVerify } from 'jose';

export async function GET(request) {
  try {
    // 1. Leemos el "Pase VIP" directamente de la petición (request)
    const token = request.cookies.get('mu_session')?.value;
    
    if (!token) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    // 2. Desencriptar el token para saber qué usuario es
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    const username = payload.username;

    // 3. Conectar a la DB y traer sus personajes
    const pool = await connectToDatabase();
    
    const charsResult = await pool.request()
      .input('username', username)
      .query(`
        SELECT Name, cLevel, Class, ResetCount 
        FROM Character 
        WHERE AccountID = @username
      `);

    const tokens = { honor: 0, helper: 0 };

    return NextResponse.json({ 
      username: username,
      characters: charsResult.recordset,
      tokens: tokens
    });

  } catch (error) {
    console.error('Error en perfil:', error);
    return NextResponse.json({ error: 'Sesión inválida o expirada.' }, { status: 401 });
  }
}
