import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (userEmail, username, token) => {
  const verifyUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/verify?token=${token}`;

  const mailOptions = {
    from: `"Mu Aethel" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: '🛡️ Mu Aethel - Confirma tu cuenta de guerrero',
    html: `
      <div style="background-color: #050a12; color: #cbd5e1; padding: 40px 20px; font-family: sans-serif; border: 1px solid #102542; border-top: 4px solid #fce893; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #fce893; text-align: center; text-transform: uppercase;">Bienvenido a Mu Aethel</h1>
        <p>Saludos, <strong>${username}</strong>.</p>
        <p>Haz clic en el siguiente botón para validar tu correo electrónico y activar tu cuenta:</p>
        <div style="text-align: center; margin: 40px 0;">
          <a href="${verifyUrl}" style="background: linear-gradient(to bottom, #fce893, #cba135); color: #050a12; padding: 14px 32px; text-decoration: none; font-weight: bold; border-radius: 4px; text-transform: uppercase;">Confirmar mi cuenta</a>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error enviando correo: ", error);
    return false;
  }
};

export const sendPasswordResetEmail = async (userEmail, username, token) => {
  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/recuperar/reset?token=${token}`;

  const mailOptions = {
    from: `"Mu Aethel" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: '🛡️ Mu Aethel - Recuperación de Contraseña',
    html: `
      <div style="background-color: #050a12; color: #cbd5e1; padding: 40px 20px; font-family: sans-serif; border: 1px solid #102542; border-top: 4px solid #fce893; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #fce893; text-align: center; text-transform: uppercase;">Recuperación de Legado</h1>
        <p>Saludos, <strong>${username}</strong>.</p>
        <p>Hemos recibido una solicitud para restablecer la contraseña de tu cuenta. Este enlace será válido por 15 minutos.</p>
        <div style="text-align: center; margin: 40px 0;">
          <a href="${resetUrl}" style="background: linear-gradient(to bottom, #51e2f5, #167d9e); color: #050a12; padding: 14px 32px; text-decoration: none; font-weight: bold; border-radius: 4px; text-transform: uppercase;">Forjar Nueva Contraseña</a>
        </div>
        <p style="font-size: 12px; color: #64748b; text-align: center;">Si no solicitaste esto, puedes ignorar este correo y tu cuenta seguirá segura.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error enviando correo de recuperación: ", error);
    return false;
  }
};

// NUEVA FUNCIÓN PARA EL 2FA POR CORREO
export const send2FAEmail = async (userEmail, username, code) => {
  const mailOptions = {
    from: `"Mu Aethel" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: '🛡️ Mu Aethel - Código de Seguridad (2FA)',
    html: `
      <div style="background-color: #050a12; color: #cbd5e1; padding: 40px 20px; font-family: sans-serif; border: 1px solid #102542; border-top: 4px solid #fce893; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #fce893; text-align: center; text-transform: uppercase;">Autorización Requerida</h1>
        <p>Saludos, <strong>${username}</strong>.</p>
        <p>Alguien está intentando ingresar a tu cuenta. Si eres tú, utiliza el siguiente código de seguridad para completar el inicio de sesión:</p>
        <div style="text-align: center; margin: 40px 0;">
          <span style="background: #102542; color: #51e2f5; padding: 14px 32px; font-size: 28px; font-weight: bold; border-radius: 4px; letter-spacing: 8px; border: 1px solid #51e2f5;">${code}</span>
        </div>
        <p style="font-size: 12px; color: #64748b; text-align: center;">Este código es de un solo uso. Nunca lo compartas con nadie.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error enviando correo 2FA: ", error);
    return false;
  }
};