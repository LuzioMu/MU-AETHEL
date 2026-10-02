import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';
import { jwtVerify } from 'jose';

export async function GET(request) {
  try {
    const token = request.cookies.get('mu_session')?.value;
    if (!token) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    const username = payload.username;

    const pool = await connectToDatabase();
    
    // Personajes con Zen (Money) y Experiencia
    const charsResult = await pool.request()
      .input('username', username)
      .query(`
        SELECT Name, cLevel, Class, ResetCount, Money, Experience 
        FROM Character 
        WHERE AccountID = @username
        ORDER BY cLevel DESC
      `);

    // Gremio
    const guildResult = await pool.request()
      .input('username', username)
      .query(`
        SELECT TOP 1 G.G_Name, GM.G_Status 
        FROM GuildMember GM
        JOIN Guild G ON GM.G_Name = G.G_Name
        JOIN Character C ON C.Name = GM.Name
        WHERE C.AccountID = @username
      `);

    const guildInfo = guildResult.recordset.length > 0 ? guildResult.recordset[0] : null;

    // Estructura de Tokens lista para el Ranking Real
    const tokens = { 
      honor: { balance: 0, rank: "Top 1%" }, 
      helper: { balance: 0, rank: "Top 5%" } 
    };

    return NextResponse.json({ 
      username: username,
      characters: charsResult.recordset,
      guild: guildInfo,
      tokens: tokens
    });

  } catch (error) {
    return NextResponse.json({ error: 'Sesión inválida.' }, { status: 401 });
  }
}
