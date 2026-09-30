'use client';

// ============================================================================
//  MU AETHEL - Página de Registro (/registro)
// ============================================================================

import { I18nProvider, useI18n } from '../../lib/i18n';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function RegisterContent() {
  const { t } = useI18n();

  return (
    <main className="relative z-10 py-20 min-h-[85vh] flex items-center justify-center bg-[#050a12]/80 backdrop-blur-md">
      
      {/* Tarjeta de Registro */}
      <div className="mu-frame w-full max-w-md bg-[#0a111c]/95 border border-[#102542] rounded-lg p-8 shadow-2xl relative overflow-hidden">
        
        {/* Decoración de luz dorada superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#fce893] to-transparent opacity-50"></div>

        <div className="text-center mb-8">
          <img src="/logo.png" alt="Mu Aethel" className="w-16 h-16 mx-auto mb-3 object-contain drop-shadow-[0_0_10px_rgba(252,232,147,0.3)]" />
          <h1 className="text-3xl text-[#fce893]" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('auth.registerTitle')}
          </h1>
          <p className="text-xs text-slate-400 mt-2 tracking-widest uppercase">
            Únete a la batalla
          </p>
        </div>

        <form className="flex flex-col gap-5">
          
          {/* Nombre de Usuario */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              {t('auth.user')} <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              maxLength="10"
              className="w-full bg-[#050a12] border border-slate-700 rounded px-4 py-2.5 text-white focus:outline-none focus:border-[#51e2f5] focus:ring-1 focus:ring-[#51e2f5] transition-all placeholder:text-slate-600"
              placeholder="Ej: AethelKing"
            />
            <p className="text-[10px] text-slate-500 mt-1.5">ℹ️ {t('auth.userHelp')}</p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              {t('auth.email')} <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              className="w-full bg-[#050a12] border border-slate-700 rounded px-4 py-2.5 text-white focus:outline-none focus:border-[#51e2f5] focus:ring-1 focus:ring-[#51e2f5] transition-all placeholder:text-slate-600"
              placeholder="tu@correo.com"
            />
          </div>

          {/* Contraseñas (Grid 2 columnas) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                {t('auth.pass')} <span className="text-red-500">*</span>
              </label>
              <input 
                type="password" 
                className="w-full bg-[#050a12] border border-slate-700 rounded px-4 py-2.5 text-white focus:outline-none focus:border-[#51e2f5] transition-all"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                {t('auth.passConfirm')} <span className="text-red-500">*</span>
              </label>
              <input 
                type="password" 
                className="w-full bg-[#050a12] border border-slate-700 rounded px-4 py-2.5 text-white focus:outline-none focus:border-[#51e2f5] transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Captcha (Falso visualmente por ahora) */}
          <div className="bg-[#050a12] border border-slate-800 p-3 rounded flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5 accent-[#51e2f5]" />
              <span className="text-sm text-slate-300">No soy un robot</span>
            </div>
            <span className="text-xs text-slate-500 font-bold">reCAPTCHA</span>
          </div>

          {/* Aceptar Reglas */}
          <div className="flex items-start gap-2 mt-1">
            <input type="checkbox" className="mt-1 w-4 h-4 accent-[#fce893]" id="rules" />
            <label htmlFor="rules" className="text-xs text-slate-400 leading-tight cursor-pointer hover:text-slate-200">
              {t('auth.rulesConfirm')}
            </label>
          </div>

          {/* Botón Principal */}
          <button 
            type="button"
            className="mu-button mu-button-gold w-full py-3.5 rounded mt-2 text-lg tracking-widest uppercase font-black shadow-[0_0_15px_rgba(203,161,53,0.3)] hover:scale-[1.02]"
          >
            {t('auth.btnRegister')}
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-[#102542] text-center">
          <span className="text-xs text-slate-400">{t('auth.haveAccount')} </span>
          <a href="/login" className="text-xs font-bold text-[#51e2f5] hover:text-white underline underline-offset-2 transition-colors">
            {t('auth.btnLogin')}
          </a>
        </div>
      </div>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <I18nProvider initialLang="es">
      <div className="min-h-screen font-body text-slate-300 antialiased bg-[url('/background.jpg')] bg-cover bg-center bg-fixed bg-no-repeat bg-[#050a12]">
        <Header />
        <RegisterContent />
        <Footer />
      </div>
    </I18nProvider>
  );
}
