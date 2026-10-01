import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function GET(request) {
  try {
    const token = request.cookies.get('mu_session')?.value;
    if (!token) return NextResponse.json({ loggedIn: false }, { status: 401 });

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    
    return NextResponse.json({ loggedIn: true, username: payload.username });
  } catch (error) {
    return NextResponse.json({ loggedIn: false }, { status: 401 });
  }
}
