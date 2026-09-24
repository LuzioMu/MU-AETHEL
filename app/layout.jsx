// ============================================================================
//  MU AETHEL - Layout raíz (App Router)
// ============================================================================

import './globals.css';

export const metadata = {
  title: 'Mu Aethel - Season 6',
  description:
    'MU Aethel - Season 6 Server. No VIP y No paid advantages. NO PAY-TO-WIN.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Tipografías. Si preferís next/font, quitá estos enlaces y usá
            localFont / Google fonts desde 'next/font/google'. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
