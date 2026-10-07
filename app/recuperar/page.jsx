'use client';

import { useState } from 'react';
import { I18nProvider } from '../../lib/i18n';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function RecuperarContent() {
  const [data, setData] = useState({ username: '', email: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/auth/recover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: result.message });
      } else {
        setStatus({ type: 'error', message: result.error });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Error de conexión con el servidor.' });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[url('/background.jpg')] bg-cover bg-fixed">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 px-4 bg-[#050a12]/80 backdrop-blur-sm">
        <div className="mu-frame bg-[#0a111c]/95 border border-[#102542] p-8 rounded-lg shadow-2xl max-w-md w-full">
          <h2 className="text-2xl text-[#fce893] mb-2 text-center uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
            Recuperar Legado
          </h2>
          <p className="text-sm text-slate-400 text-center mb-6">
            Ingresa tu usuario y correo. Te enviaremos un pergamino mágico para forjar una nueva contraseña.
          </p>

          {status.message && (
            <div className={`mb-6 p-4 rounded text-sm font-bold text-center border ${status.type === 'error' ? 'bg-red-950/50 border-red-500/50 text-red-400' : 'bg-green-950/50 border-green-500/50 text-green-400'}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Nombre de Usuario</label>
              <input 
                type="text" required maxLength="10"
                value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })}
                className="w-full bg-[#050a12] border border-slate-700 rounded px-4 py-2.5 text-white focus:outline-none focus:border-[#51e2f5]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Correo Electrónico</label>
              <input 
                type="email" required
                value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                className="w-full bg-[#050a12] border border-slate-700 rounded px-4 py-2.5 text-white focus:outline-none focus:border-[#51e2f5]"
              />
            </div>
            <button 
              type="submit" disabled={loading}
              className="w-full py-3 rounded mt-4 font-black uppercase tracking-widest text-[#050a12] bg-gradient-to-r from-[#fce893] to-[#cba135] hover:scale-[1.02] transition-transform disabled:opacity-50"
            >
              {loading ? 'Invocando...' : 'Enviar Enlace de Recuperación'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <a href="/login" className="text-xs text-[#51e2f5] hover:text-white underline underline-offset-4 transition-colors">
              Volver al inicio de sesión
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function RecuperarPage() {
  return (
    <I18nProvider initialLang="es">
      <RecuperarContent />
    </I18nProvider>
  );
}