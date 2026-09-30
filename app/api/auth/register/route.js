import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';

// El sistema de correos está pausado hasta que configuremos la API KEY
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, email, password } = body;

    // 1. Validaciones básicas de seguridad
    if (!username || !email || !password) {
      return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 });
    }
    
    if (!/^[a-zA-Z0-9_]{4,10}$/.test(username)) {
      return NextResponse.json({ error: 'El usuario debe tener entre 4 y 10 letras o números.' }, { status: 400 });
    }

    // 2. Conectar a la base de datos
    const pool = await connectToDatabase();

    // 3. Revisar si la cuenta o el correo ya existen
    const checkUser = await pool.request()
      .input('username', username)
      .input('email', email)
      .query(`
        SELECT memb___id, mail_addr FROM MEMB_INFO 
        WHERE memb___id = @username OR mail_addr = @email
      `);

    if (checkUser.recordset.length > 0) {
      const existing = checkUser.recordset[0];
      if (existing.memb___id === username) {
        return NextResponse.json({ error: 'El nombre de usuario ya está en uso.' }, { status: 409 });
      }
      return NextResponse.json({ error: 'El correo electrónico ya está registrado.' }, { status: 409 });
    }

    // 4. Crear la cuenta
    await pool.request()
      .input('username', username)
      .input('password', password)
      .input('email', email)
      .query(`
        INSERT INTO MEMB_INFO (
          memb___id, memb__pwd, memb_name, sno__numb, post_code, 
          addr_info, addr_deta, tel__numb, phon_numb, mail_addr, 
          fpas_ques, fpas_answ, job__code, appl_days, modi_days, 
          out__days, true_days, mail_chek, bloc_code, ctl1_code
        ) VALUES (
          @username, @password, @username, '1111111111111', '1234', 
          '11111', '11111', '1234567890', '1234567890', @email, 
          '1', '1', '1', GETDATE(), GETDATE(), 
          '2000-01-01', '2000-01-01', '1', '0', '1'
        )
      `);

    return NextResponse.json({ success: true, message: 'Cuenta creada con éxito.' }, { status: 201 });

  } catch (error) {
    console.error('Error en el registro:', error);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}
