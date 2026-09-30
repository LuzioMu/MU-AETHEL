'use client';

// ============================================================================
//  MU AETHEL - Página de Registro (/registro) - Conectada a la DB
// ============================================================================

import { useState } from 'react';
import { I18nProvider, useI18n } from '../../lib/i18n';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function RegisterContent() {
  const { t } = useI18n();
  
  // Estados para guardar lo que escribe el usuario
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    rules: false
  });
  
  // Estados para manejar la carga y los mensajes
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Función que actualiza el estado cuando el usuario escribe
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Función que se ejecuta al apretar "Registrarse"
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página recargue
    setStatus({ type: '', message: '' });

    // Validaciones básicas en el cliente
    if (formData.password !== formData.passwordConfirm) {
      return setStatus({ type: 'error', message: 'Las contraseñas no coinciden.' });
    }
    if (!formData.rules) {
      return setStatus({ type: 'error', message: 'Debes aceptar las reglas del servidor.' });
    }

    setIsLoading(true);

    try {
      // Llamamos a la API que creaste en route.js
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        // Si el servidor (route.js) tiró un error (ej: usuario ya existe)
        setStatus({ type: 'error', message: data.error || 'Error al crear la cuenta.' });
      } else {
        // Éxito total
        setStatus({ type: 'success', message: '¡Cuenta creada con éxito! Ya puedes ingresar al juego.' });
        setFormData({ username: '', email: '', password: '', passwordConfirm: '', rules: false });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Error de conexión. Revisa que la base de datos esté encendida.' });
    }
    
    setIsLoading(false);
  };

  return (
    <main className="relative z-10 py-20 min-h-[85vh] flex items-center justify-center bg-[#050a12]/80 backdrop-blur-md">
      
      <div className="mu-frame w-full max-w-md bg-[#0a111c]/95 border border-[#102542] rounded-lg p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#fce893] to-transparent opacity-50"></div>

        <div className="text-center mb-6">
          <img src="/logo.png" alt="Mu Aethel" className="w-16 h-16 mx-auto mb-3 object-contain drop-shadow-[0_0_10px_rgba(252,232,147,0.3)]" />
          <h1 className="text-3xl text-[#fce893]" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('auth.registerTitle')}
          </h1>
          <p className="text-xs text-slate-400 mt-2 tracking-widest uppercase">
            Únete a la batalla
          </p>
        </div>

        {/* CARTEL DE MENSAJES (ÉXITO O ERROR) */}
        {status.message && (
          <div className={`mb-4 p-3 rounded text-sm font-bold text-center border ${status.type === 'error' ? 'bg-red-950/50 border-red-500/50 text-red-400' : 'bg-green-950/50 border-green-500/50 text-green-400'}`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              {t('auth.user')} <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              maxLength="10"
              required
              className="w-full bg-[#050a12] border border-slate-700 rounded px-4 py-2.5 text-white focus:outline-none focus:border-[#51e2f5] focus:ring-1 focus:ring-[#51e2f5] transition-all placeholder:text-slate-600"
              placeholder="Ej: AethelKing"
            />
            <p className="text-[10px] text-slate-500 mt-1.5">ℹ️ {t('auth.userHelp')}</p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              {t('auth.email')} <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#050a12] border border-slate-700 rounded px-4 py-2.5 text-white focus:outline-none focus:border-[#51e2f5] focus:ring-1 focus:ring-[#51e2f5] transition-all placeholder:text-slate-600"
              placeholder="tu@correo.com"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                {t('auth.pass')} <span className="text-red-500">*</span>
              </label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
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
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleChange}
                required
                className="w-full bg-[#050a12] border border-slate-700 rounded px-4 py-2.5 text-white focus:outline-none focus:border-[#51e2f5] transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="bg-[#050a12] border border-slate-800 p-3 rounded flex items-center justify-between opacity-50 cursor-not-allowed" title="Captcha se activará pronto">
            <div className="flex items-center gap-2">
              <input type="checkbox" disabled className="w-5 h-5" />
              <span className="text-sm text-slate-400">No soy un robot</span>
            </div>
            <span className="text-xs text-slate-600 font-bold">reCAPTCHA</span>
          </div>

          <div className="flex items-start gap-2 mt-1">
            <input 
              type="checkbox" 
              name="rules"
              id="rules"
              checked={formData.rules}
              onChange={handleChange}
              className="mt-1 w-4 h-4 accent-[#fce893]" 
            />
            <label htmlFor="rules" className="text-xs text-slate-400 leading-tight cursor-pointer hover:text-slate-200">
              {t('auth.rulesConfirm')}
            </label>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className={`mu-button mu-button-gold w-full py-3.5 rounded mt-2 text-lg tracking-widest uppercase font-black shadow-[0_0_15px_rgba(203,161,53,0.3)] transition-all ${isLoading ? 'opacity-70 cursor-wait' : 'hover:scale-[1.02]'}`}
          >
            {isLoading ? 'Conectando...' : t('auth.btnRegister')}
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
