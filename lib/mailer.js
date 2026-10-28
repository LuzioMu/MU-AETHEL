import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Plantilla maestra con la estética exacta de globals.css (Panel mu-frame)
const emailTemplate = (title, content) => `
<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background-color: #050a12; font-family: 'Inter', Arial, sans-serif;">
  <div style="background-color: #050a12; padding: 40px 20px;">
    
    <!-- Panel Principal (Simulando .mu-frame) -->
    <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(180deg, #182538 0%, #0d1522 50%, #080d17 100%); background-color: #0d1522; border: 1px solid #485c78; border-top: 3px solid #d4af37; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7); border-radius: 2px;">
      
      <!-- Título del Correo (Simulando h1 con Cinzel) -->
      <div style="text-align: center; padding: 40px 20px 20px 20px; border-bottom: 1px solid #1a2638;">
        <h1 style="font-family: 'Cinzel', Georgia, serif; font-weight: 700; color: #fce893; font-size: 26px; text-transform: uppercase; letter-spacing: 2px; margin: 0; text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.9);">${title}</h1>
      </div>

      <!-- Cuerpo del Mensaje -->
      <div style="padding: 30px 40px 40px 40px; color: #d1d5db; line-height: 1.6; font-size: 15px;">
        ${content}
      </div>

      <!-- Footer -->
      <div style="background-color: #050a12; border-top: 1px solid #485c78; padding: 20px; text-align: center;">
        <p style="font-size: 12px; color: #9ba8ba; margin: 0;">&copy; ${new Date().getFullYear()} Mu Aethel.</p>
        <p style="font-size: 11px; color: #5a7499; margin: 8px 0 0 0;">Este mensaje ha sido forjado automáticamente por el servidor. No respondas a este pergamino.</p>
      </div>
      
    </div>
  </div>
</body>
</html>
`;

export const sendVerificationEmail = async (userEmail, username, token) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mu-aethel.vercel.app';
  const verifyUrl = `${baseUrl}/api/auth/verify?token=${token}`;

  // Botón simulando .mu-button-gold
  const content = `
    <p style="margin-bottom: 20px; color: #9ba8ba;">Saludos guerrero, <strong style="color: #ffffff;">${username}</strong>.</p>
    <p style="margin-bottom: 40px;">Tu aventura está a punto de comenzar. Haz clic en el siguiente enlace mágico para validar tu correo electrónico y forjar tu cuenta en el continente.</p>
    
    <div style="text-align: center; margin: 45px 0;">
      <a href="${verifyUrl}" style="background: linear-gradient(180deg, #8a6a21 0%, #5e4611 50%, #3b2b07 100%); background-color: #5e4611; border: 1px solid #fce893; color: #fff8dc; padding: 14px 32px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; display: inline-block; text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);">Confirmar mi cuenta</a>
    </div>
    
    <p style="font-size: 13px; color: #5a7499; text-align: center; margin-top: 40px; border-top: 1px dashed #1a2638; padding-top: 20px;">
      Si el botón no responde, copia y pega este hechizo en tu navegador:<br>
      <a href="${verifyUrl}" style="color: #51e2f5; text-decoration: none; word-break: break-all; margin-top: 10px; display: inline-block;">${verifyUrl}</a>
    </p>
  `;

  const mailOptions = {
    from: `"Mu Aethel" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: '🛡️ Mu Aethel - Confirma tu cuenta',
    html: emailTemplate('Bienvenido a Mu Aethel', content),
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

  // Botón simulando .mu-button estándar (azul/gris acero)
  const content = `
    <p style="margin-bottom: 20px; color: #9ba8ba;">Saludos, <strong style="color: #ffffff;">${username}</strong>.</p>
    <p style="margin-bottom: 40px;">Hemos recibido una solicitud para restablecer la contraseña de tu cuenta. Este enlace será válido únicamente por 15 minutos antes de desvanecerse.</p>
    
    <div style="text-align: center; margin: 45px 0;">
      <a href="${resetUrl}" style="background: linear-gradient(180deg, #2b3e59 0%, #172436 50%, #0d1624 100%); background-color: #172436; border: 1px solid #5a7499; color: #e2e8f0; padding: 14px 32px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; display: inline-block; text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);">Forjar Nueva Contraseña</a>
    </div>
    
    <p style="font-size: 13px; color: #5a7499; text-align: center; margin-top: 40px;">Si no solicitaste esto, puedes ignorar este pergamino de forma segura.</p>
  `;

  const mailOptions = {
    from: `"Mu Aethel" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: '🛡️ Mu Aethel - Recuperación de Contraseña',
    html: emailTemplate('Recuperación de Legado', content),
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
    <p style="margin-bottom: 20px; color: #9ba8ba;">Saludos, <strong style="color: #ffffff;">${username}</strong>.</p>
    <p style="margin-bottom: 30px;">Detectamos un intento de acceso a tu inventario. Si eres tú, utiliza el siguiente código de seguridad para completar tu inicio de sesión:</p>
    
    <div style="text-align: center; margin: 45px 0;">
      <span style="background-color: #050a12; color: #51e2f5; padding: 15px 35px; font-size: 28px; font-family: 'Cinzel', Georgia, serif; font-weight: 700; border-radius: 2px; letter-spacing: 12px; border: 1px solid #485c78; display: inline-block; box-shadow: inset 0 0 10px rgba(0,0,0,0.8);">${code}</span>
    </div>
    
    <p style="font-size: 13px; color: #cba135; text-align: center; margin-top: 30px; font-weight: bold;">Nunca compartas este código con nadie, ni siquiera con los Game Masters.</p>
  `;

  const mailOptions = {
    from: `"Mu Aethel" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: '🛡️ Mu Aethel - Código de Seguridad (2FA)',
    html: emailTemplate('Autorización Requerida', content),
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error enviando correo 2FA: ", error);
    return false;
  }
};
