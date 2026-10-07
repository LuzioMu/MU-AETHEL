import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../../lib/db';
import { jwtVerify, SignJWT } from 'jose';
import { sendPasswordResetEmail } from '../../../../../lib/mailer';

export async function POST(request) {
  try {
    // 1. Verificamos la identidad
    const cookie = request.cookies.get('mu_session');
    if (!cookie) return NextResponse.json({ error: 'No autorizado.' }, { status: 401 });

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(cookie.value, secret);
    const username = payload.username;

    // 2. Extraemos la acción solicitada desde la URL (ej: /api/auth/profile-actions?action=freeze)
    // Pero como los botones de la página hacen un fetch directo a rutas limpias, 
    // lo manejamos leyendo a qué URL llamaron en el frontend, y aquí en el backend lo unificamos.
    
    // *Nota: Para mantenerlo simple con los llamados que pusimos en page.jsx, 
    // vamos a separar esto en 3 archivos físicos. Deshacé este paso 2 y mirá el Paso 3 abajo.*

    return NextResponse.json({ error: 'Ruta equivocada.' }, { status: 400 });

  } catch (error) {
    return NextResponse.json({ error: 'Error del servidor.' }, { status: 500 });
  }
}