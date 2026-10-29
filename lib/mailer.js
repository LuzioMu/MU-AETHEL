import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Diccionario de idiomas
const dic = {
  es: {
    verifTitle: 'Bienvenido a Mu Aethel',
    verifGreet: 'Saludos guerrero',
    verifBody: 'Tu aventura está a punto de comenzar. Haz clic en el siguiente enlace mágico para validar tu correo electrónico y forjar tu cuenta en el continente.',
    verifBtn: 'Confirmar mi cuenta',
    verifFail: 'Si el botón no responde, copia y pega este hechizo en tu navegador:',
    footerText: 'Este mensaje ha sido forjado automáticamente por el servidor. No respondas a este pergamino.',
    links: 'Reglas | Términos de Uso | Privacidad',
    resetTitle: 'Recuperación de Legado',
    resetBody: 'Hemos recibido una solicitud para restablecer la contraseña de tu cuenta. Este hechizo será válido únicamente por 15 minutos.',
    resetBtn: 'Forjar Nueva Contraseña',
    resetIgnore: 'Si no solicitaste esto, puedes ignorar este pergamino de forma segura.',
    twoFaTitle: 'Autorización Requerida',
    twoFaBody: 'Detectamos un intento de acceso a tu inventario. Si eres tú, utiliza el siguiente código de seguridad para completar tu inicio de sesión:',
    twoFaWarn: 'Nunca compartas este código con nadie, ni siquiera con los Game Masters.',
  },
  en: {
    verifTitle: 'Welcome to Mu Aethel',
    verifGreet: 'Greetings warrior',
    verifBody: 'Your adventure is about to begin. Click the magical link below to validate your email and forge your account on the continent.',
    verifBtn: 'Confirm my account',
    verifFail: 'If the button does not respond, copy and paste this spell into your browser:',
    footerText: 'This message was automatically forged by the server. Do not reply to this scroll.',
    links: 'Rules | Terms of Use | Privacy Policy',
    resetTitle: 'Legacy Recovery',
    resetBody: 'We have received a request to reset your account password. This spell will only be valid for 15 minutes.',
    resetBtn: 'Forge New Password',
    resetIgnore: 'If you did not request this, you can safely ignore this scroll.',
    twoFaTitle: 'Authorization Required',
    twoFaBody: 'We detected an attempt to access your inventory. If this is you, use the following security code to complete your login:',
    twoFaWarn: 'Never share this code with anyone, not even with Game Masters.',
  },
  pt: {
    verifTitle: 'Bem-vindo ao Mu Aethel',
    verifGreet: 'Saudações guerreiro',
    verifBody: 'Sua aventura está prestes a começar. Clique no link mágico abaixo para validar seu e-mail e forjar sua conta no continente.',
    verifBtn: 'Confirmar minha conta',
    verifFail: 'Se o botão não responder, copie e cole este feitiço no seu navegador:',
    footerText: 'Esta mensagem foi forjada automaticamente pelo servidor. Não responda a este pergaminho.',
    links: 'Regras | Termos de Uso | Privacidade',
    resetTitle: 'Recuperação de Legado',
    resetBody: 'Recebemos uma solicitação para redefinir a senha da sua conta. Este feitiço será válido apenas por 15 minutos.',
    resetBtn: 'Forjar Nova Senha',
    resetIgnore: 'Se você não solicitou isso, pode ignorar este pergaminho com segurança.',
    twoFaTitle: 'Autorização Necessária',
    twoFaBody: 'Detectamos uma tentativa de acessar seu inventário. Se for você, use o seguinte código de segurança para concluir seu login:',
    twoFaWarn: 'Nunca compartilhe este código com ninguém, nem mesmo com Game Masters.',
  }
};

// Plantilla maestra con Fondo y Redes
const emailTemplate = (title, content, lang = 'es') => {
  const t = dic[lang] || dic['es'];
  const bgImage = 'https://mu-aethel.vercel.app/background.jpg';
  
  return `
<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background-color: #050a12; background-image: url('${bgImage}'); background-size: cover; background-position: center; font-family: 'Inter', Arial, sans-serif;">
  <div style="background-color: rgba(5, 10, 18, 0.85); padding: 40px 20px;">
    <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(180deg, #182538 0%, #0d1522 50%, #080d17 100%); background-color: #0d1522; border: 1px solid #485c78; border-top: 3px solid #d4af37; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.9); border-radius: 2px;">
      
      <div style="text-align: center; padding: 40px 20px 20px 20px; border-bottom: 1px solid #1a2638;">
        <h1 style="font-family: 'Cinzel', Georgia, serif; font-weight: 700; color: #fce893; font-size: 26px; text-transform: uppercase; letter-spacing: 2px; margin: 0; text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.9);">${title}</h1>
      </div>

      <div style="padding: 30px 40px 40px 40px; color: #d1d5db; line-height: 1.6; font-size: 15px;">
        ${content}
      </div>

      <div style="background-color: #050a12; border-top: 1px solid #485c78; padding: 30px 20px; text-align: center;">
        <div style="margin-bottom: 25px;">
          <a href="https://discord.gg" style="color: #51e2f5; text-decoration: none; margin: 0 10px; font-weight: bold; font-size: 14px;">Discord</a> |
          <a href="https://instagram.com/nachoo_mota" style="color: #51e2f5; text-decoration: none; margin: 0 10px; font-weight: bold; font-size: 14px;">Instagram</a> |
          <a href="https://www.paypal.com/donate/?hosted_button_id=QNAZRJQALRTXS" style="color: #51e2f5; text-decoration: none; margin: 0 10px; font-weight: bold; font-size: 14px;">PayPal</a>
        </div>
        <div style="margin-bottom: 20px; font-size: 12px;">
          <a href="https://mu-aethel.vercel.app/reglas" style="color: #9ba8ba; text-decoration: none; margin: 0 5px;">${t.links.split(' | ')[0]}</a> |
          <a href="https://mu-aethel.vercel.app/terminos" style="color: #9ba8ba; text-decoration: none; margin: 0 5px;">${t.links.split(' | ')[1]}</a> |
          <a href="https://mu-aethel.vercel.app/privacidad" style="color: #9ba8ba; text-decoration: none; margin: 0 5px;">${t.links.split(' | ')[2]}</a>
        </div>
        <p style="font-size: 12px; color: #5a7499; margin: 0;">&copy; ${new Date().getFullYear()} Mu Aethel.</p>
        <p style="font-size: 11px; color: #485c78; margin: 8px 0 0 0;">${t.footerText}</p>
      </div>
      
    </div>
  </div>
</body>
</html>
`;
};

// 1. FUNCIÓN DE REGISTRO
export const sendVerificationEmail = async (userEmail, username, token, lang = 'es') => {
  const baseUrl = 'https://mu-aethel.vercel.app';
  const verifyUrl = `${baseUrl}/api/auth/verify?token=${token}`;
  const t = dic[lang] || dic['es'];

  const content = `
    <p style="margin-bottom: 20px; color: #9ba8ba;">${t.verifGreet}, <strong style="color: #ffffff;">${username}</strong>.</p>
    <p style="margin-bottom: 40px;">${t.verifBody}</p>
    <div style="text-align: center; margin: 45px 0;">
      <a href="${verifyUrl}" style="background: linear-gradient(180deg, #8a6a21 0%, #5e4611 50%, #3b2b07 100%); background-color: #5e4611; border: 1px solid #fce893; color: #fff8dc; padding: 14px 32px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; display: inline-block;">${t.verifBtn}</a>
    </div>
    <p style="font-size: 13px; color: #5a7499; text-align: center; margin-top: 40px;">
      ${t.verifFail}<br>
      <a href="${verifyUrl}" style="color: #51e2f5; text-decoration: none; word-break: break-all; margin-top: 10px; display: inline-block;">${verifyUrl}</a>
    </p>
  `;

  const randomId = Math.floor(1000 + Math.random() * 9000);
  const mailOptions = {
    from: `"Mu Aethel" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: `🛡️ Mu Aethel - ${t.verifTitle} (#${randomId})`,
    html: emailTemplate(t.verifTitle, content, lang),
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error enviando correo: ", error);
    return false;
  }
};

// 2. FUNCIÓN DE RECUPERACIÓN DE CONTRASEÑA
export const sendPasswordResetEmail = async (userEmail, username, token, lang = 'es') => {
  const baseUrl = 'https://mu-aethel.vercel.app';
  const resetUrl = `${baseUrl}/recuperar/reset?token=${token}`;
  const t = dic[lang] || dic['es'];

  const content = `
    <p style="margin-bottom: 20px; color: #9ba8ba;">${t.verifGreet}, <strong style="color: #ffffff;">${username}</strong>.</p>
    <p style="margin-bottom: 40px;">${t.resetBody}</p>
    <div style="text-align: center; margin: 45px 0;">
      <a href="${resetUrl}" style="background: linear-gradient(180deg, #2b3e59 0%, #172436 50%, #0d1624 100%); background-color: #172436; border: 1px solid #5a7499; color: #e2e8f0; padding: 14px 32px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; display: inline-block;">${t.resetBtn}</a>
    </div>
    <p style="font-size: 13px; color: #5a7499; text-align: center; margin-top: 40px;">${t.resetIgnore}</p>
  `;

  const randomId = Math.floor(1000 + Math.random() * 9000);
  const mailOptions = {
    from: `"Mu Aethel" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: `🛡️ Mu Aethel - ${t.resetTitle} (#${randomId})`,
    html: emailTemplate(t.resetTitle, content, lang),
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error enviando correo de recuperación: ", error);
    return false;
  }
};

// 3. FUNCIÓN DE 2FA (CÓDIGO DE SEGURIDAD)
export const send2FAEmail = async (userEmail, username, code, lang = 'es') => {
  const t = dic[lang] || dic['es'];

  const content = `
    <p style="margin-bottom: 20px; color: #9ba8ba;">${t.verifGreet}, <strong style="color: #ffffff;">${username}</strong>.</p>
    <p style="margin-bottom: 30px;">${t.twoFaBody}</p>
    <div style="text-align: center; margin: 45px 0;">
      <span style="background-color: #050a12; color: #51e2f5; padding: 15px 35px; font-size: 28px; font-family: 'Cinzel', Georgia, serif; font-weight: 700; border-radius: 2px; letter-spacing: 12px; border: 1px solid #485c78; display: inline-block; box-shadow: inset 0 0 10px rgba(0,0,0,0.8);">${code}</span>
    </div>
    <p style="font-size: 13px; color: #cba135; text-align: center; margin-top: 30px; font-weight: bold;">${t.twoFaWarn}</p>
  `;

  const randomId = Math.floor(1000 + Math.random() * 9000);
  const mailOptions = {
    from: `"Mu Aethel" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: `🛡️ Mu Aethel - ${t.twoFaTitle} (#${randomId})`,
    html: emailTemplate(t.twoFaTitle, content, lang),
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error enviando correo 2FA: ", error);
    return false;
  }
};
