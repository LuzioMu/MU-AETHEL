import { NextResponse } from 'next/server';
import { SERVER } from '../../../lib/serverConfig';

export async function GET() {
  try {
    return NextResponse.json({
      online: true,
      players: SERVER.rates.players,
      exp: SERVER.rates.exp,
      drop: SERVER.rates.drop,
      reset: SERVER.rates.reset,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener estadísticas del servidor' },
      { status: 500 }
    );
  }
}
