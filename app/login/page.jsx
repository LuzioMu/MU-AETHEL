'use client';

// ============================================================================
//  MU AETHEL - Página de Login (/login)
// ============================================================================

import { I18nProvider, useI18n } from '../../lib/i18n';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function LoginContent() {
  const { t } = useI18n();

  return (
    <main className="relative z-10 py-20 min-h-[85vh] flex items-center justify-center bg-[#050a12]/80 backdrop-blur-md">
      
      {/* Tarjeta de Login */}
      <div className="mu-frame w-full max-w-sm bg-[#0a111c]/95 border border-[#102542] rounded-lg p-8 shadow-2xl relative overflow-hidden">
        
        {/* Decoración de luz celeste superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#51e2f5] to-transparent opacity-60"></div>

        <div className="text-center mb-8">
          <img src="/logo.png" alt="Mu Aethel" className="w-16 h-16 mx-auto mb-3 object-contain drop-shadow-[0_0_10px_rgba(81,226,245,0.3)]" />
          <h1 className="text-3xl text-white" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('auth.loginTitle')}
          </h1>
        </div>

        <form className="flex flex-col gap-5">
          
          {/* Usuario */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              {t('auth.user')}
            </label>
            <input 
              type="text" 
              maxLength="10"
              className="w-full bg-[#050a12] border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#51e2f5] focus:ring-1 focus:ring-[#51e2f5] transition-all"
              placeholder="Usuario"
            />
          </div>

          {/* Contraseña */}
          <div>
            <div className="flex justify-between items-end mb-1.5">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                {t('auth.pass')}
              </label>
              <a href="/recuperar" className="text-[10px] text-[#51e2f5] hover:text-white underline underline-offset-2">
                {t('auth.forgot')}
              </a>
            </div>
            <input 
              type="password" 
              className="w-full bg-[#050a12] border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#51e2f5] focus:ring-1 focus:ring-[#51e2f5] transition-all"
              placeholder="••••••••"
            />
          </div>

          {/* Botón Principal */}
          <button 
            type="button"
            className="mu-button w-full py-3.5 rounded mt-2 text-lg tracking-widest uppercase font-black hover:scale-[1.02] border-[#51e2f5]/50 hover:border-[#51e2f5] shadow-[0_0_15px_rgba(81,226,245,0.2)]"
          >
            {t('auth.btnLogin')}
          </button>
        </form>

        <div className="mt-8 pt-5 border-t border-[#102542] text-center">
          <span className="text-xs text-slate-400">{t('auth.noAccount')} </span>
          <a href="/registro" className="text-xs font-bold text-[#fce893] hover:text-white underline underline-offset-2 transition-colors">
            {t('auth.btnRegister')}
          </a>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <I18nProvider initialLang="es">
      <div className="min-h-screen font-body text-slate-300 antialiased bg-[url('/background.jpg')] bg-cover bg-center bg-fixed bg-no-repeat bg-[#050a12]">
        <Header />
        <LoginContent />
        <Footer />
      </div>
    </I18nProvider>
  );
}
