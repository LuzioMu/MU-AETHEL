'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { I18nProvider } from '../../lib/i18n';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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

const getGuildRank = (statusCode) => {
  if (statusCode === 128) return 'Guild Master';
  if (statusCode === 64) return 'Asistente';
  if (statusCode === 32) return 'Battle Master';
  return 'Miembro';
};

function CuentaContent() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/user/profile')
      .then(res => {
        if (!res.ok) throw new Error('No autorizado');
        return res.json();
      })
      .then(data => {
        setProfile(data);
        setLoading(false);
      })
      .catch(() => router.push('/login'));
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/'; // Forzamos recarga para limpiar el Header
  };

  if (loading) return <main className="min-h-screen flex items-center justify-center bg-[#050a12] text-[#51e2f5]">Cargando Reino...</main>;

  return (
    <main className="relative z-10 py-16 bg-[#050a12]/90 backdrop-blur-md min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Cabecera del Panel */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#0a111c] border border-[#102542] p-6 rounded-lg shadow-xl mb-8">
          <div>
            <h1 className="text-3xl text-[#fce893] mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
              Armería de <span className="text-white">{profile.username}</span>
            </h1>
            <p className="text-sm text-slate-400">Gestiona tu imperio, guild y recursos.</p>
          </div>
          <button onClick={handleLogout} className="mt-4 md:mt-0 px-6 py-2 rounded border border-red-900/50 text-red-400 hover:bg-red-900/20 transition-all text-xs font-bold tracking-widest uppercase">
            Cerrar Sesión
          </button>
        </div>

        {/* Sección Superior: Guild y Tokens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Ventana de Guild */}
          <div className="lg:col-span-2 bg-[#10567e]/20 border border-[#167d9e] p-6 rounded flex items-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#167d9e] opacity-10 blur-[80px]"></div>
            
            <div className="w-24 h-24 bg-[#e67e22] border-2 border-[#d35400] shadow-[0_0_15px_rgba(230,126,34,0.4)] rounded flex items-center justify-center">
               <span className="text-white/50 text-xs text-center font-bold">Logo<br/>Guild</span>
            </div>
            
            <div className="flex-1">
              <h2 className="text-[#51e2f5] text-xs font-bold tracking-widest uppercase mb-1">Ventana Guild</h2>
              {profile.guild ? (
                <>
                  <h3 className="text-2xl text-white font-black uppercase mb-1">{profile.guild.G_Name}</h3>
                  <p className="text-sm text-[#fce893] font-bold uppercase mb-1">{getGuildRank(profile.guild.G_Status)}</p>
                  <p className="text-xs text-slate-400 uppercase mb-4">Estado de Loren: <span className="text-white">Sin Castillo</span></p>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <span>Miembros: 50/50</span> | <span>Online: 20/50</span> <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></span>
                  </div>
                </>
              ) : (
                <div className="mt-4 text-slate-400">
                  <p className="text-lg font-bold text-white mb-1">Sin Gremio</p>
                  <p className="text-xs">Tus personajes no pertenecen a ningún Guild activo.</p>
                </div>
              )}
            </div>
          </div>

{/* Tokens P2E con Ranking */}
          <div className="flex flex-col gap-4">
            
            {/* Honor Token */}
            <div className="bg-[#10567e]/20 border border-[#167d9e] p-4 rounded flex items-center justify-between gap-4 group hover:border-[#51e2f5]/50 transition-colors">
              <div className="flex items-center gap-4">
                <img src="/moneda-honor.png" alt="Honor Token" className="w-14 h-14 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-[10px] text-white uppercase tracking-widest font-bold">Honor Tokens</p>
                  <p className="text-2xl text-white font-mono leading-none">{profile.tokens.honor.balance}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-slate-400 uppercase tracking-widest block mb-1.5">Posición Global</span>
                <span className="inline-block bg-[#050a12] border border-slate-700 text-slate-300 px-3 py-1 rounded text-xs font-bold shadow-inner">
                  {profile.tokens.honor.rank}
                </span>
              </div>
            </div>

            {/* Helper Token */}
            <div className="bg-[#10567e]/20 border border-[#167d9e] p-4 rounded flex items-center justify-between gap-4 group hover:border-[#fce893]/50 transition-colors">
              <div className="flex items-center gap-4">
                <img src="/moneda-helper.png" alt="Helper Token" className="w-14 h-14 drop-shadow-[0_0_8px_rgba(252,232,147,0.3)] group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-[10px] text-white uppercase tracking-widest font-bold">Helper Tokens</p>
                  <p className="text-2xl text-white font-mono leading-none">{profile.tokens.helper.balance}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-slate-400 uppercase tracking-widest block mb-1.5">Posición Global</span>
                <span className="inline-block bg-[#050a12] border border-slate-700 text-slate-300 px-3 py-1 rounded text-xs font-bold shadow-inner">
                  {profile.tokens.helper.rank}
                </span>
              </div>
            </div>

          </div>

        {/* Lista de Personajes (Formato Fila) */}
        <h2 className="text-xl text-[#51e2f5] mb-4 border-b border-[#102542] pb-2 uppercase tracking-widest font-bold">
          Tus Personajes
        </h2>
        
        {profile.characters && profile.characters.length > 0 ? (
          <div className="flex flex-col gap-3">
            {profile.characters.map((char, index) => (
              <div key={index} className="bg-[#0a111c] border border-[#102542] p-4 rounded flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#51e2f5]/30 transition-colors">
                
                {/* Info Básica */}
                <div className="w-full md:w-1/4">
                  <h3 className="text-xl text-white font-bold">{char.Name}</h3>
                  <p className="text-xs text-[#51e2f5] uppercase tracking-widest font-semibold">{getClassName(char.Class)}</p>
                </div>

                {/* Stats y Zen */}
                <div className="w-full md:w-1/4 flex justify-between md:justify-around text-center">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase">Nivel</p>
                    <p className="text-white font-mono font-bold">{char.cLevel}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase">Resets</p>
                    <p className="text-[#fce893] font-mono font-bold">{char.ResetCount}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase">Zen</p>
                    <p className="text-green-400 font-mono font-bold">{(char.Money || 0).toLocaleString()}</p>
                  </div>
                </div>

                {/* Barra de Experiencia */}
                <div className="w-full md:w-1/3">
                  <div className="flex justify-between text-[10px] text-slate-400 uppercase mb-1">
                    <span>Experiencia</span>
                    <span className="font-mono">{char.Experience ? char.Experience.toLocaleString() : 0} XP</span>
                  </div>
                  <div className="w-full bg-[#050a12] h-2 rounded-full border border-slate-800 overflow-hidden">
                    {/* Placeholder visual de barra al 65% porque el max exp de Mu varía por nivel */}
                    <div className="bg-gradient-to-r from-[#fce893] to-[#cba135] h-full rounded-full w-[65%]"></div>
                  </div>
                </div>

                {/* Inventario Placeholder */}
                <div className="w-full md:w-auto text-right md:text-center opacity-40">
                  <div className="grid grid-cols-3 gap-1 w-16 h-16 mx-auto bg-[#050a12] border border-dashed border-slate-700 p-1">
                    <div className="border border-slate-800"></div><div className="border border-slate-800 bg-slate-900"></div><div className="border border-slate-800"></div>
                    <div className="border border-slate-800 bg-slate-900"></div><div className="border border-slate-800 bg-slate-900"></div><div className="border border-slate-800 bg-slate-900"></div>
                  </div>
                  <p className="text-[8px] text-slate-500 uppercase mt-1">Equipo próximamente</p>
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
