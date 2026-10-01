'use client';

// ============================================================================
//  MU AETHEL - Panel de Usuario (/cuenta)
// ============================================================================

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { I18nProvider } from '../../lib/i18n';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Función para traducir las clases (códigos numéricos del Mu)
const getClassName = (classCode) => {
  if (classCode >= 0 && classCode <= 3) return 'Dark Wizard';
  if (classCode >= 16 && classCode <= 19) return 'Dark Knight';
  if (classCode >= 32 && classCode <= 35) return 'Elf';
  if (classCode >= 48 && classCode <= 50) return 'Magic Gladiator';
  if (classCode >= 64 && classCode <= 66) return 'Dark Lord';
  if (classCode >= 80 && classCode <= 83) return 'Summoner';
  if (classCode >= 96 && classCode <= 98) return 'Rage Fighter';
  return 'Desconocido';
};

function CuentaContent() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Al cargar la página, buscamos los datos
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/user/profile');
        if (!res.ok) {
          // Si no está logueado o expiró, lo pateamos al login
          router.push('/login');
          return;
        }
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError('Error al cargar la cuenta.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfile();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
  };

  if (loading) {
    return <main className="min-h-screen flex items-center justify-center bg-[#050a12] text-white">Cargando el Reino...</main>;
  }

  if (error) {
    return <main className="min-h-screen flex items-center justify-center bg-[#050a12] text-red-500">{error}</main>;
  }

  return (
    <main className="relative z-10 py-16 bg-[#050a12]/90 backdrop-blur-md min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Cabecera del Panel */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#0a111c] border border-[#102542] p-6 rounded-lg shadow-xl mb-8">
          <div>
            <h1 className="text-3xl text-[#fce893] mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
              Bienvenido, <span className="text-white">{profile?.username}</span>
            </h1>
            <p className="text-sm text-slate-400">Gestiona tus personajes y economía Play-to-Earn.</p>
          </div>
          <button 
            onClick={handleLogout}
            className="mt-4 md:mt-0 px-6 py-2 rounded border border-red-900/50 text-red-400 hover:bg-red-900/20 transition-all text-sm font-bold tracking-widest uppercase"
          >
            Cerrar Sesión
          </button>
        </div>

        {/* Billetera P2E */}
        <h2 className="text-xl text-[#51e2f5] mb-4 border-b border-[#102542] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          Tus Monedas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#050a12] border border-[#cba135]/40 p-5 rounded-lg flex items-center gap-4 shadow-[0_0_15px_rgba(203,161,53,0.1)]">
            <div className="w-12 h-12 bg-gradient-to-br from-[#fce893] to-[#cba135] rounded-full flex items-center justify-center text-[#050a12] text-2xl font-black">H</div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Honor Tokens</p>
              <p className="text-2xl text-white font-mono">{profile?.tokens?.honor}</p>
            </div>
          </div>
          <div className="bg-[#050a12] border border-[#51e2f5]/40 p-5 rounded-lg flex items-center gap-4 shadow-[0_0_15px_rgba(81,226,245,0.1)]">
            <div className="w-12 h-12 bg-gradient-to-br from-[#51e2f5] to-[#102542] rounded-full flex items-center justify-center text-white text-2xl font-black">C</div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Helper Tokens</p>
              <p className="text-2xl text-white font-mono">{profile?.tokens?.helper}</p>
            </div>
          </div>
        </div>

        {/* Lista de Personajes */}
        <h2 className="text-xl text-[#51e2f5] mb-4 border-b border-[#102542] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          Tus Personajes
        </h2>
        
        {profile?.characters && profile.characters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.characters.map((char, index) => (
              <div key={index} className="bg-[#0a111c] border border-[#102542] p-5 rounded shadow-lg hover:border-[#51e2f5]/50 transition-colors">
                <h3 className="text-xl text-white font-bold mb-2">{char.Name}</h3>
                <p className="text-xs text-cyan-400 uppercase tracking-widest font-semibold mb-3">{getClassName(char.Class)}</p>
                <div className="flex justify-between border-t border-slate-800 pt-3">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase">Nivel</p>
                    <p className="text-white font-mono">{char.cLevel}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 uppercase">Resets</p>
                    <p className="text-[#fce893] font-mono">{char.ResetCount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#0a111c] border border-dashed border-[#102542] p-10 text-center rounded">
            <p className="text-slate-500">Aún no has creado ningún personaje en el juego.</p>
          </div>
        )}

      </div>
    </main>
  );
}

export default function CuentaPage() {
  return (
    <I18nProvider initialLang="es">
      <div className="min-h-screen font-body text-slate-300 antialiased bg-[url('/background.jpg')] bg-cover bg-center bg-fixed bg-no-repeat bg-[#050a12]">
        <Header />
        <CuentaContent />
        <Footer />
      </div>
    </I18nProvider>
  );
}
