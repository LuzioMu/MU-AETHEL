import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';
import { sendVerificationEmail } from '../../../../lib/mailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, email, password } = body;

    if (!username || !email || !password) return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 });
    if (!/^[a-zA-Z0-9_]{4,10}$/.test(username)) return NextResponse.json({ error: 'El usuario debe tener entre 4 y 10 letras.' }, { status: 400 });

    const pool = await connectToDatabase();
    const checkUser = await pool.request()
      .input('username', username)
      .input('email', email)
      .query(`SELECT memb___id, mail_addr FROM MEMB_INFO WHERE memb___id = @username OR mail_addr = @email`);

    if (checkUser.recordset.length > 0) {
      if (checkUser.recordset[0].memb___id === username) return NextResponse.json({ error: 'El nombre de usuario ya está en uso.' }, { status: 409 });
      return NextResponse.json({ error: 'El correo electrónico ya está registrado.' }, { status: 409 });
    }

    // Insertamos la cuenta pero con mail_chek en '0' (anteúltima fila de valores)
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
          '2000-01-01', '2000-01-01', '0', '0', '1'
        )
      `);

    // Encriptamos el nombre de usuario para usarlo como token seguro en el correo
    const tokenSecreto = Buffer.from(username).toString('base64');
    await sendVerificationEmail(email, username, tokenSecreto);

    return NextResponse.json({ success: true, message: 'Cuenta creada.' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}