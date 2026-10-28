import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Diseño base para mantener consistencia en todos los correos
const emailTemplate = (title, content, colorAccent) => `
<div style="background-color: #02040a; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #cbd5e1;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #050a12; border: 1px solid #102542; border-top: 4px solid ${colorAccent}; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
    
    <!-- Header / Logo -->
    <div style="text-align: center; padding: 30px 20px 10px 20px;">
      <!-- Reemplaza el src con la URL real de tu logo alojado en Imgur o tu web -->
      <img src="https://via.placeholder.com/150x50/050a12/fce893?text=MU+AETHEL" alt="Mu Aethel Logo" style="max-width: 200px; height: auto;" />
    </div>

    <!-- Contenido Principal -->
    <div style="padding: 20px 40px 40px 40px;">
      <h1 style="color: ${colorAccent}; text-align: center; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 30px;">${title}</h1>
      ${content}
    </div>

    <!-- Footer -->
    <div style="background-color: #03060d; border-top: 1px solid #102542; padding: 20px; text-align: center;">
      <p style="font-size: 12px; color: #475569; margin: 0;">&copy; ${new Date().getFullYear()} Mu Aethel. Todos los derechos reservados.</p>
      <p style="font-size: 12px; color: #475569; margin: 5px 0 0 0;">Este es un mensaje automático, por favor no respondas a este correo.</p>
    </div>

  </div>
</div>
`;

export const sendVerificationEmail = async (userEmail, username, token) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mu-aethel.vercel.app';
  const verifyUrl = `${baseUrl}/api/auth/verify?token=${token}`;

  const content = `
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Saludos, <strong style="color: #ffffff;">${username}</strong>.</p>
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 40px;">Tu aventura está a punto de comenzar. Haz clic en el botón de abajo para validar tu correo electrónico y forjar tu cuenta en nuestro servidor.</p>
    <div style="text-align: center; margin: 40px 0;">
      <a href="${verifyUrl}" style="background: linear-gradient(135deg, #fce893 0%, #cba135 100%); color: #02040a; padding: 16px 36px; text-decoration: none; font-weight: 700; font-size: 15px; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px; display: inline-block;">Confirmar mi cuenta</a>
    </div>
    <p style="font-size: 14px; color: #64748b; text-align: center; margin-top: 30px;">Si el botón no funciona, copia y pega el siguiente enlace en tu navegador:<br><br><span style="color: #3b82f6; font-size: 12px; word-break: break-all;">${verifyUrl}</span></p>
  `;

  const mailOptions = {
    from: `"Mu Aethel" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: '🛡️ Mu Aethel - Confirma tu cuenta de guerrero',
    html: emailTemplate('Bienvenido a Mu Aethel', content, '#fce893'),
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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mu-aethel.vercel.app';
  const resetUrl = `${baseUrl}/recuperar/reset?token=${token}`;

  const content = `
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Saludos, <strong style="color: #ffffff;">${username}</strong>.</p>
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 40px;">Hemos recibido una solicitud para restablecer la contraseña de tu cuenta. Este hechizo de recuperación será válido únicamente por 15 minutos.</p>
    <div style="text-align: center; margin: 40px 0;">
      <a href="${resetUrl}" style="background: linear-gradient(135deg, #51e2f5 0%, #167d9e 100%); color: #02040a; padding: 16px 36px; text-decoration: none; font-weight: 700; font-size: 15px; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px; display: inline-block;">Forjar Nueva Contraseña</a>
    </div>
    <p style="font-size: 13px; color: #64748b; text-align: center; margin-top: 30px;">Si no solicitaste esto, puedes ignorar este correo de forma segura.</p>
  `;

  const mailOptions = {
    from: `"Mu Aethel" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: '🛡️ Mu Aethel - Recuperación de Contraseña',
    html: emailTemplate('Recuperación de Legado', content, '#51e2f5'),
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error enviando correo de recuperación: ", error);
    return false;
  }
};

export const send2FAEmail = async (userEmail, username, code) => {
  const content = `
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Saludos, <strong style="color: #ffffff;">${username}</strong>.</p>
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 30px;">Detectamos un intento de acceso a tu cuenta. Si eres tú, utiliza el siguiente código mágico de un solo uso para completar tu inicio de sesión:</p>
    <div style="text-align: center; margin: 45px 0;">
      <span style="background-color: #03060d; color: #51e2f5; padding: 20px 40px; font-size: 32px; font-weight: 800; border-radius: 6px; letter-spacing: 10px; border: 1px solid #167d9e; display: inline-block;">${code}</span>
    </div>
    <p style="font-size: 13px; color: #ef4444; text-align: center; margin-top: 30px; font-weight: bold;">Nunca compartas este código con nadie, ni siquiera con los administradores.</p>
  `;

  const mailOptions = {
    from: `"Mu Aethel" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: '🛡️ Mu Aethel - Código de Seguridad (2FA)',
    html: emailTemplate('Autorización Requerida', content, '#51e2f5'),
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error enviando correo 2FA: ", error);
    return false;
  }
};
