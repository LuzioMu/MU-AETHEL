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
  },
  en: {
    verifTitle: 'Welcome to Mu Aethel',
    verifGreet: 'Greetings warrior',
    verifBody: 'Your adventure is about to begin. Click the magical link below to validate your email and forge your account on the continent.',
    verifBtn: 'Confirm my account',
    verifFail: 'If the button does not respond, copy and paste this spell into your browser:',
    footerText: 'This message was automatically forged by the server. Do not reply to this scroll.',
    links: 'Rules | Terms of Use | Privacy Policy',
  },
  pt: {
    verifTitle: 'Bem-vindo ao Mu Aethel',
    verifGreet: 'Saudações guerreiro',
    verifBody: 'Sua aventura está prestes a começar. Clique no link mágico abaixo para validar seu e-mail e forjar sua conta no continente.',
    verifBtn: 'Confirmar minha conta',
    verifFail: 'Se o botão não responder, copie e cole este feitiço no seu navegador:',
    footerText: 'Esta mensagem foi forjada automaticamente pelo servidor. Não responda a este pergaminho.',
    links: 'Regras | Termos de Uso | Privacidade',
  }
};

// Plantilla maestra con Redes y Legales
const emailTemplate = (title, content, lang = 'es') => {
  const t = dic[lang] || dic['es'];
  
  return `
<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background-color: #050a12; font-family: 'Inter', Arial, sans-serif;">
  <div style="background-color: #050a12; padding: 40px 20px;">
    
    <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(180deg, #182538 0%, #0d1522 50%, #080d17 100%); background-color: #0d1522; border: 1px solid #485c78; border-top: 3px solid #d4af37; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7); border-radius: 2px;">
      
      <div style="text-align: center; padding: 40px 20px 20px 20px; border-bottom: 1px solid #1a2638;">
        <h1 style="font-family: 'Cinzel', Georgia, serif; font-weight: 700; color: #fce893; font-size: 26px; text-transform: uppercase; letter-spacing: 2px; margin: 0; text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.9);">${title}</h1>
      </div>

      <div style="padding: 30px 40px 40px 40px; color: #d1d5db; line-height: 1.6; font-size: 15px;">
        ${content}
      </div>

      <!-- Footer con Redes y Legales -->
      <div style="background-color: #050a12; border-top: 1px solid #485c78; padding: 30px 20px; text-align: center;">
        
        <div style="margin-bottom: 20px;">
          <a href="https://discord.gg" style="color: #51e2f5; text-decoration: none; margin: 0 10px; font-weight: bold;">Discord</a> |
          <a href="https://instagram.com/nachoo_mota" style="color: #51e2f5; text-decoration: none; margin: 0 10px; font-weight: bold;">Instagram</a> |
          <a href="https://www.paypal.com/donate/?hosted_button_id=QNAZRJQALRTXS" style="color: #51e2f5; text-decoration: none; margin: 0 10px; font-weight: bold;">PayPal</a>
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

export const sendVerificationEmail = async (userEmail, username, token, lang = 'es') => {
  // Este reemplazo extra es un salvavidas por si en Vercel vuelve a quedar mal guardado
  let rawUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mu-aethel.vercel.app';
  const baseUrl = rawUrl.replace(/\[|\]|\(|\)/g, '').replace(/https:\/\/mu-aethel\.vercel\.apphttps:\/\/mu-aethel\.vercel\.app/g, 'https://mu-aethel.vercel.app'); 

  const verifyUrl = `${baseUrl}/api/auth/verify?token=${token}`;
  const t = dic[lang] || dic['es'];

  const content = `
    <p style="margin-bottom: 20px; color: #9ba8ba;">${t.verifGreet}, <strong style="color: #ffffff;">${username}</strong>.</p>
    <p style="margin-bottom: 40px;">${t.verifBody}</p>
    
    <div style="text-align: center; margin: 45px 0;">
      <a href="${verifyUrl}" style="background: linear-gradient(180deg, #8a6a21 0%, #5e4611 50%, #3b2b07 100%); background-color: #5e4611; border: 1px solid #fce893; color: #fff8dc; padding: 14px 32px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; display: inline-block; text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);">${t.verifBtn}</a>
    </div>
    
    <p style="font-size: 13px; color: #5a7499; text-align: center; margin-top: 40px; border-top: 1px dashed #1a2638; padding-top: 20px;">
      ${t.verifFail}<br>
      <a href="${verifyUrl}" style="color: #51e2f5; text-decoration: none; word-break: break-all; margin-top: 10px; display: inline-block;">${verifyUrl}</a>
    </p>
  `;

  const mailOptions = {
    from: `"Mu Aethel" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: `🛡️ Mu Aethel - ${t.verifTitle}`,
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
