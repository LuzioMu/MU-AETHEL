'use client';

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { I18nProvider } from '../../../lib/i18n';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

function ResetContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');

  const [passwords, setPasswords] = useState({ new: '', confirm: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  // Si alguien entra acá sin un token en la URL, le avisamos
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050a12] text-red-400 font-bold uppercase tracking-widest">
        Enlace mágico inválido o ausente.
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (passwords.new !== passwords.confirm) {
      return setStatus({ type: 'error', message: 'Las contraseñas no coinciden.' });
    }
    if (passwords.new.length < 4) {
      return setStatus({ type: 'error', message: 'La contraseña debe tener al menos 4 caracteres.' });
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword: passwords.new })
      });
      const data = await res.json();

      if (res.ok) {
        // Mensaje más claro y pausa de 3 segundos (3000 milisegundos)
        setStatus({ type: 'success', message: '¡Contraseña forjada con éxito! Redirigiendo al inicio de sesión...' });
        setTimeout(() => router.push('/login'), 3000);
      } else {
        setStatus({ type: 'error', message: data.error });
        setLoading(false); // Solo volvemos a habilitar el botón si hubo error
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Error de conexión con el servidor.' });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[url('/background.jpg')] bg-cover bg-fixed">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 px-4 bg-[#050a12]/80 backdrop-blur-sm">
        <div className="mu-frame bg-[#0a111c]/95 border border-[#102542] p-8 rounded-lg shadow-2xl max-w-md w-full">
          <h2 className="text-2xl text-[#51e2f5] mb-2 text-center uppercase tracking-widest font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
            Forjar Nueva Clave
          </h2>
          <p className="text-sm text-slate-400 text-center mb-6">
            El pergamino es válido. Ingresa tu nueva contraseña para recuperar el acceso a tu cuenta.
          </p>

          {status.message && (
            <div className={`mb-6 p-4 rounded text-sm font-bold text-center border ${status.type === 'error' ? 'bg-red-950/50 border-red-500/50 text-red-400' : 'bg-green-950/50 border-green-500/50 text-green-400'}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Nueva Contraseña</label>
              <input 
                type="password" required maxLength="10"
                value={passwords.new} onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                className="w-full bg-[#050a12] border border-slate-700 rounded px-4 py-2.5 text-white focus:outline-none focus:border-[#51e2f5]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Repetir Contraseña</label>
              <input 
                type="password" required maxLength="10"
                value={passwords.confirm} onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                className="w-full bg-[#050a12] border border-slate-700 rounded px-4 py-2.5 text-white focus:outline-none focus:border-[#51e2f5]"
              />
            </div>
            <button 
              type="submit" disabled={loading || status.type === 'success'}
              className="w-full py-3 rounded mt-4 font-black uppercase tracking-widest text-[#050a12] bg-gradient-to-r from-[#51e2f5] to-[#167d9e] hover:scale-[1.02] transition-transform disabled:opacity-50"
            >
              {loading ? 'Sellando...' : 'Restablecer Contraseña'}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ResetPage() {
  return (
    <I18nProvider initialLang="es">
      <Suspense fallback={<div className="min-h-screen bg-[#050a12]"></div>}>
        <ResetContent />
      </Suspense>
    </I18nProvider>
  );
}