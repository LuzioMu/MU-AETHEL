import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';
import { jwtVerify, SignJWT } from 'jose';
import { sendPasswordResetEmail } from '../../../../lib/mailer';

export async function POST(request) {
  try {
    // 1. Verificamos la identidad
    const cookie = request.cookies.get('mu_session');
    if (!cookie) return NextResponse.json({ error: 'No autorizado.' }, { status: 401 });

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(cookie.value, secret);
    const username = payload.username;

    return NextResponse.json({ error: 'Ruta equivocada.' }, { status: 400 });

  } catch (error) {
    return NextResponse.json({ error: 'Error del servidor.' }, { status: 500 });
  }
}
