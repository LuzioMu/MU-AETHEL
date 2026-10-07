'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { I18nProvider, useI18n } from '../../lib/i18n';
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
  const { t } = useI18n(); 
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Estados de Contraseña y PIN
  const [passStatus, setPassStatus] = useState({ type: '', message: '' });
  const [passLoading, setPassLoading] = useState(false);
  const [pinData, setPinData] = useState({ newPin: '' });
  const [pinStatus, setPinStatus] = useState({ type: '', message: '' });
  const [pinLoading, setPinLoading] = useState(false);
  const [freezeLoading, setFreezeLoading] = useState(false);

  // Estados del 2FA
  const [twoFaData, setTwoFaData] = useState(null);
  const [twoFaCode, setTwoFaCode] = useState('');
  const [twoFaStatus, setTwoFaStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    // 1. Cargar Perfil
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

    // 2. Cargar Estado del 2FA
    fetch('/api/auth/2fa')
      .then(res => res.json())
      .then(data => {
        if (data.error) return;
        setTwoFaData(data);
      });
  }, [router]);

  const handlePasswordRequest = async () => {
    setPassLoading(true);
    setPassStatus({ type: '', message: '' });
    try {
      const res = await fetch('/api/auth/request-password-change', { method: 'POST' });
      const data = await res.json();
      if (res.ok) setPassStatus({ type: 'success', message: t('dash.passSuccess') || '¡Enlace enviado! Revisa tu correo.' });
      else setPassStatus({ type: 'error', message: data.error });
    } catch (error) {
      setPassStatus({ type: 'error', message: t('dash.connError') || 'Error de conexión.' });
    }
    setPassLoading(false);
  };

  const handlePinChange = (e) => setPinData({ ...pinData, [e.target.name]: e.target.value });

  const handlePinSubmit = async (e) => {
    e.preventDefault();
    setPinLoading(true);
    setPinStatus({ type: '', message: '' });
    try {
      const res = await fetch('/api/auth/pin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPin: pinData.newPin })
      });
      const data = await res.json();
      if (res.ok) {
        setPinStatus({ type: 'success', message: t('dash.pinSuccess') || 'PIN actualizado con éxito.' });
        setPinData({ newPin: '' });
      } else {
        setPinStatus({ type: 'error', message: data.error });
      }
    } catch (error) {
      setPinStatus({ type: 'error', message: t('dash.connError') || 'Error de conexión.' });
    }
    setPinLoading(false);
  };

  const handleRecoverPin = async () => {
    setPinStatus({ type: 'info', message: t('dash.pinEmailSent') || 'El código PIN fue enviado a tu correo.' });
  };

  const handleFreezeAccount = async () => {
    if (!window.confirm(t('dash.panicConfirm') || "¿ESTÁS SEGURO? Tu cuenta será desconectada y bloqueada.")) return;
    setFreezeLoading(true);
    try {
      const res = await fetch('/api/auth/freeze', { method: 'POST' });
      if (res.ok) window.location.href = '/login';
      else {
        const data = await res.json();
        alert(data.error);
        setFreezeLoading(false);
      }
    } catch (error) {
      alert("Error de conexión.");
      setFreezeLoading(false);
    }
  };

  // Función para activar el 2FA
  const handleEnable2FA = async (e) => {
    e.preventDefault();
    setTwoFaStatus({ type: '', message: '' });
    
    if (twoFaCode.length !== 6) return setTwoFaStatus({ type: 'error', message: 'El código debe tener 6 dígitos.' });

    try {
      const res = await fetch('/api/auth/2fa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: twoFaCode })
      });
      
      if (res.ok) {
        setTwoFaData({ ...twoFaData, enabled: true });
        setTwoFaStatus({ type: 'success', message: '¡2FA Activado Correctamente!' });
      } else {
        const data = await res.json();
        setTwoFaStatus({ type: 'error', message: data.error });
      }
    } catch (error) {
      setTwoFaStatus({ type: 'error', message: 'Error de conexión.' });
    }
  };

  if (loading) return <main className="min-h-screen flex items-center justify-center bg-[#050a12] text-[#51e2f5]">{t('dash.loading') || 'Cargando pergaminos...'}</main>;

  return (
    <main className="relative z-10 py-16 bg-[#050a12]/90 backdrop-blur-md min-h-screen scroll-smooth">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        <div className="bg-[#0a111c] border border-[#102542] rounded-lg shadow-xl mb-8 p-6">
          <h1 className="text-3xl text-[#fce893] mb-1 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('dash.armory')} <span className="text-white">{profile.username}</span>
          </h1>
          <p className="text-sm text-slate-400">{t('dash.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          <div className="lg:col-span-2 bg-[#10567e]/20 border border-[#167d9e] p-6 rounded flex items-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#167d9e] opacity-10 blur-[80px]"></div>
            <div className="w-24 h-24 bg-[#e67e22] border-2 border-[#d35400] shadow-[0_0_15px_rgba(230,126,34,0.4)] rounded flex items-center justify-center shrink-0">
               <span className="text-white/50 text-xs text-center font-bold">Logo<br/>Guild</span>
            </div>
            <div className="flex-1">
              <h2 className="text-[#51e2f5] text-xs font-bold tracking-widest uppercase mb-1">{t('dash.guildWindow')}</h2>
              {profile.guild ? (
                <>
                  <h3 className="text-2xl text-white font-black uppercase mb-1">{profile.guild.G_Name}</h3>
                  <p className="text-sm text-[#fce893] font-bold uppercase mb-1">{getGuildRank(profile.guild.G_Status)}</p>
                  <p className="text-xs text-slate-400 uppercase mb-4">{t('dash.state')}: <span className="text-white">{t('dash.nocastle')}</span></p>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <span>{t('dash.members')}: 50/50</span> | <span>{t('dash.online')}: 20/50</span> <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></span>
                  </div>
                </>
              ) : (
                <div className="mt-4 text-slate-400">
                  <p className="text-lg font-bold text-white mb-1">{t('dash.noGuild')}</p>
                  <p className="text-xs">{t('dash.noGuildDesc')}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#10567e]/20 border border-[#167d9e] p-4 rounded flex items-center justify-between gap-4 group hover:border-[#51e2f5]/50 transition-colors">
              <div className="flex items-center gap-4">
                <img src="/moneda-honor.png" alt="Honor Token" className="w-14 h-14 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-[10px] text-white uppercase tracking-widest font-bold">Honor Tokens</p>
                  <p className="text-2xl text-white font-mono leading-none">{profile.tokens?.honor?.balance || 0}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-slate-400 uppercase tracking-widest block mb-1.5">{t('dash.rank')}</span>
                <span className="inline-block bg-[#050a12] border border-slate-700 text-slate-300 px-3 py-1 rounded text-xs font-bold shadow-inner">
                  {profile.tokens?.honor?.rank || t('dash.unranked')}
                </span>
              </div>
            </div>

            <div className="bg-[#10567e]/20 border border-[#167d9e] p-4 rounded flex items-center justify-between gap-4 group hover:border-[#fce893]/50 transition-colors">
              <div className="flex items-center gap-4">
                <img src="/moneda-helper.png" alt="Helper Token" className="w-14 h-14 drop-shadow-[0_0_8px_rgba(252,232,147,0.3)] group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-[10px] text-white uppercase tracking-widest font-bold">Helper Tokens</p>
                  <p className="text-2xl text-white font-mono leading-none">{profile.tokens?.helper?.balance || 0}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-slate-400 uppercase tracking-widest block mb-1.5">{t('dash.rank')}</span>
                <span className="inline-block bg-[#050a12] border border-slate-700 text-slate-300 px-3 py-1 rounded text-xs font-bold shadow-inner">
                  {profile.tokens?.helper?.rank || t('dash.unranked')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl text-[#51e2f5] mb-4 border-b border-[#102542] pb-2 uppercase tracking-widest font-bold">
          {t('dash.chars')}
        </h2>
        
        {profile.characters && profile.characters.length > 0 ? (
          <div className="flex flex-col gap-3 mb-12">
            {profile.characters.map((char, index) => (
              <div key={index} className="bg-[#0a111c] border border-[#102542] p-4 rounded flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#51e2f5]/30 transition-colors">
                <div className="w-full md:w-1/4">
                  <h3 className="text-xl text-white font-bold">{char.Name}</h3>
                  <p className="text-xs text-[#51e2f5] uppercase tracking-widest font-semibold">{getClassName(char.Class)}</p>
                </div>
                <div className="w-full md:w-1/4 flex justify-between md:justify-around text-center">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase">{t('dash.lvl')}</p>
                    <p className="text-white font-mono font-bold">{char.cLevel}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase">{t('dash.resets')}</p>
                    <p className="text-[#fce893] font-mono font-bold">{char.ResetCount}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase">{t('dash.zen')}</p>
                    <p className="text-green-400 font-mono font-bold">{(char.Money || 0).toLocaleString()}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="flex justify-between text-[10px] text-slate-400 uppercase mb-1">
                    <span>{t('dash.exp')}</span>
                    <span className="font-mono">{char.Experience ? char.Experience.toLocaleString() : 0} XP</span>
                  </div>
                  <div className="w-full bg-[#050a12] h-2 rounded-full border border-slate-800 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#fce893] to-[#cba135] h-full rounded-full w-[65%]"></div>
                  </div>
                </div>
                <div className="w-full md:w-auto text-right md:text-center opacity-40">
                  <div className="grid grid-cols-3 gap-1 w-16 h-16 mx-auto bg-[#050a12] border border-dashed border-slate-700 p-1">
                    <div className="border border-slate-800"></div><div className="border border-slate-800 bg-slate-900"></div><div className="border border-slate-800"></div>
                    <div className="border border-slate-800 bg-slate-900"></div><div className="border border-slate-800 bg-slate-900"></div><div className="border border-slate-800 bg-slate-900"></div>
                  </div>
                  <p className="text-[8px] text-slate-500 uppercase mt-1">{t('dash.soon')}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#0a111c] border border-dashed border-[#102542] p-10 text-center rounded mb-12">
            <p className="text-slate-500">{t('dash.noChars')}</p>
          </div>
        )}

        <div id="opciones" className="scroll-mt-24">
          <h2 className="text-xl text-[#fce893] mb-4 border-b border-[#102542] pb-2 uppercase tracking-widest font-bold mt-8" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('dash.securityTitle')}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <div className="mu-frame bg-[#0a111c]/95 border border-[#102542] rounded-lg p-6 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-md text-[#fce893] mb-1 uppercase tracking-widest font-bold">{t('dash.passTitle')}</h3>
                <p className="text-[11px] text-slate-400 mb-5 leading-relaxed">
                  {t('dash.passDesc')}
                </p>

                {passStatus.message && (
                  <div className={`mb-4 p-2 rounded text-[11px] font-bold text-center border ${passStatus.type === 'error' ? 'bg-red-950/50 border-red-500/50 text-red-400' : 'bg-green-950/50 border-green-500/50 text-green-400'}`}>
                    {passStatus.message}
                  </div>
                )}
              </div>
              <button onClick={handlePasswordRequest} disabled={passLoading} className="mu-button py-3 w-full rounded mt-2 font-black text-xs uppercase tracking-widest text-[#050a12] bg-gradient-to-r from-[#fce893] to-[#cba135] hover:scale-[1.02] transition-transform disabled:opacity-50">
                {passLoading ? t('dash.invoking') : t('dash.passBtn')}
              </button>
            </div>

            <div className="mu-frame bg-[#0a111c]/95 border border-[#102542] rounded-lg p-6 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-md text-[#51e2f5] mb-1 uppercase tracking-widest font-bold">{t('dash.pinTitle')}</h3>
                <p className="text-[11px] text-slate-400 mb-5">
                  {t('dash.pinDesc')}
                </p>

                {pinStatus.message && (
                  <div className={`mb-4 p-2 rounded text-[11px] font-bold text-center border ${pinStatus.type === 'error' ? 'bg-red-950/50 border-red-500/50 text-red-400' : pinStatus.type === 'success' ? 'bg-green-950/50 border-green-500/50 text-green-400' : 'bg-blue-950/50 border-blue-500/50 text-blue-400'}`}>
                    {pinStatus.message}
                  </div>
                )}

                <form onSubmit={handlePinSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[9px] font-bold text-slate-300 uppercase tracking-wider mb-1">{t('dash.pinNew')}</label>
                    <input type="text" name="newPin" required maxLength="7" value={pinData.newPin} onChange={handlePinChange} className="w-full bg-[#050a12] border border-slate-700 rounded px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-[#51e2f5] tracking-widest" placeholder="Ej: 1234567" />
                  </div>
                  <button type="submit" disabled={pinLoading} className="py-3 w-full border border-[#51e2f5] text-[#51e2f5] hover:bg-[#51e2f5] hover:text-[#050a12] rounded mt-2 font-black text-xs uppercase tracking-widest transition-colors disabled:opacity-50">
                    {t('dash.pinBtn')}
                  </button>
                </form>
              </div>
              
              <div className="mt-4 pt-4 border-t border-[#102542] text-center">
                <span className="text-[10px] text-slate-400 mr-2">{t('dash.pinForgot')}</span>
                <button onClick={handleRecoverPin} className="text-[10px] font-bold text-[#fce893] hover:text-white underline underline-offset-2 transition-colors">
                  {t('dash.pinEmail')}
                </button>
              </div>
            </div>

			{/* PANEL DE AUTENTICACIÓN 2FA (POR CORREO) */}
            <div className={`mu-frame bg-[#0a111c]/95 border ${twoFaData?.enabled ? 'border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.1)]' : 'border-[#102542]'} rounded-lg p-6 shadow-xl flex flex-col justify-between`}>
              {twoFaData?.enabled ? (
                <div className="text-center py-2 flex flex-col h-full justify-between">
                  <div>
                      <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/50 text-3xl">🛡️</div>
                      <h3 className="text-md text-green-400 mb-2 font-bold uppercase tracking-widest">2FA Activado</h3>
                      <p className="text-xs text-slate-400">Tu cuenta está blindada. Se enviará un código a tu correo cada vez que inicies sesión.</p>
                  </div>
                  <button 
                    onClick={async () => {
                      setTwoFaStatus({ type: '', message: '' });
                      const res = await fetch('/api/auth/2fa', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'disable' }) });
                      if (res.ok) setTwoFaData({ enabled: false });
                    }} 
                    className="py-2 px-4 border border-red-500/50 text-red-400 hover:bg-red-500 hover:text-[#050a12] rounded mt-4 font-black text-[10px] uppercase tracking-widest transition-colors"
                  >
                    Desactivar 2FA
                  </button>
                </div>
              ) : (
                <div className="flex flex-col h-full justify-between">
                  <div>
                      <h3 className="text-md text-[#51e2f5] mb-1 font-bold uppercase tracking-widest">{t('dash.2faTitle') || 'Protección Avanzada'}</h3>
                      <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
                        Protege tu cuenta. Al activar esto, te enviaremos un código de 6 dígitos a tu correo electrónico cada vez que intentes iniciar sesión.
                      </p>

                      {twoFaStatus.message && (
                        <div className={`mb-4 p-2 rounded text-[11px] font-bold text-center border ${twoFaStatus.type === 'error' ? 'bg-red-950/50 border-red-500/50 text-red-400' : 'bg-green-950/50 border-green-500/50 text-green-400'}`}>
                          {twoFaStatus.message}
                        </div>
                      )}
                  </div>

                  <button 
                    onClick={async () => {
                      setTwoFaStatus({ type: '', message: '' });
                      const res = await fetch('/api/auth/2fa', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'enable' }) });
                      if (res.ok) setTwoFaData({ enabled: true });
                    }} 
                    className="w-full py-3 bg-[#10567e] hover:bg-[#167d9e] border border-[#51e2f5] text-white rounded font-bold text-xs uppercase tracking-wider transition-colors mt-auto shadow-[0_0_15px_rgba(81,226,245,0.2)]"
                  >
                    Activar 2FA por Correo
                  </button>
                </div>
              )}
            </div>
            <div className="bg-[#1a0b11] border border-red-900/50 rounded-lg p-6 shadow-[0_0_20px_rgba(153,27,27,0.1)] flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-red-950 rounded-full flex items-center justify-center mb-3 border border-red-800 text-2xl shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                ⚠️
              </div>
              <h3 className="text-md text-red-400 mb-2 uppercase tracking-widest font-bold">{t('dash.panicTitle')}</h3>
              <p className="text-xs text-slate-400 mb-6 px-2">
                {t('dash.panicDesc')}
              </p>
              <button 
                onClick={handleFreezeAccount} 
                disabled={freezeLoading}
                className="px-6 py-3 w-full mt-auto bg-red-900/80 hover:bg-red-700 text-white border border-red-500 rounded font-black text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-colors disabled:opacity-50"
              >
                {freezeLoading ? t('dash.panicLoading') : t('dash.panicBtn')}
              </button>
            </div>

          </div>
        </div>

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