'use client';

import { useState } from 'react';
import { I18nProvider, useI18n } from '../../lib/i18n';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function NoticiasContent() {
  const { t } = useI18n();

  // El array de noticias se recalcula automáticamente cuando cambiás de idioma
  const noticiasData = [
    {
      id: 1,
      categoria: 'EVENTOS',
      fecha: '04 Oct 2026',
      titulo: t('newsPage.eventsTitle'),
      resumen: t('newsPage.eventsDesc'),
      contenido: (
        <>
          <p className="mb-4">{t('newsPage.eventsBody1')}</p>
          <p className="mb-4">{t('newsPage.eventsBody2')}</p>
          <p>{t('newsPage.eventsBody3')}</p>
        </>
      )
    },
    {
      id: 2,
      categoria: 'COMUNIDAD',
      fecha: '04 Oct 2026',
      titulo: t('newsPage.commTitle'),
      resumen: t('newsPage.commDesc'),
      contenido: (
        <>
          <p className="mb-4">{t('newsPage.commBody1')}</p>
          <p className="mb-6">{t('newsPage.commBody2')}</p>
          
          <div className="text-center mt-8 p-6 bg-[#102542]/50 border border-[#163359] rounded-lg">
            <h4 className="text-[#51e2f5] font-bold uppercase tracking-widest mb-4">{t('newsPage.commDonation')}</h4>
            <a 
              href="https://paypal.me/TuEnlaceAqui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-[#00457C] hover:bg-[#0079C1] text-white font-bold rounded shadow-[0_0_15px_rgba(0,121,193,0.4)] transition-all uppercase tracking-widest text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a2.008 2.008 0 0 0-1.967 1.69L6.16 22.56l4.114.042c.733 0 1.354-.534 1.469-1.258l.784-4.975c.09-.571.583-.996 1.161-.996h.712c4.227 0 7.249-1.787 8.121-6.103.18-.891.242-1.636.142-2.353z"/></svg>
              {t('newsPage.commBtn')}
            </a>
            <p className="text-[10px] text-slate-400 mt-4">{t('newsPage.commNote')}</p>
          </div>
        </>
      )
    }
  ];

  // Magia pura: en vez de guardar todo el objeto, solo guardamos el número (1 o 2)
  const [noticiaActivaId, setNoticiaActivaId] = useState(1);
  const noticiaActiva = noticiasData.find(n => n.id === noticiaActivaId);

  return (
    <main className="relative z-10 py-17 min-h-screen bg-[#050a12]/90 backdrop-blur-md scroll-smooth">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl text-[#fce893] mb-2 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(252,232,147,0.3)]" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('newsPage.title')}
          </h1>
          <p className="text-sm text-slate-400">{t('newsPage.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="flex flex-col gap-4">
            {noticiasData.map((noticia) => (
              <button
                key={noticia.id}
                onClick={() => setNoticiaActivaId(noticia.id)}
                className={`text-left p-5 rounded-lg border transition-all ${
                  noticiaActiva.id === noticia.id 
                    ? 'bg-[#102542] border-[#51e2f5] shadow-[0_0_15px_rgba(81,226,245,0.2)]' 
                    : 'bg-[#0a111c] border-[#163359] hover:border-[#fce893]/50 hover:bg-[#102542]/50'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${noticiaActiva.id === noticia.id ? 'text-[#51e2f5]' : 'text-slate-500'}`}>
                    {noticia.categoria}
                  </span>
                  <span className="text-[10px] text-slate-500">{noticia.fecha}</span>
                </div>
                <h3 className="text-md text-[#fce893] font-bold uppercase tracking-wider mb-2">
                  {noticia.titulo}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {noticia.resumen}
                </p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 mu-frame bg-[#0a111c]/95 border border-[#102542] rounded-lg p-8 shadow-2xl h-fit">
            <div className="flex justify-between items-center mb-4 border-b border-[#163359] pb-4">
              <span className="text-xs font-bold text-[#51e2f5] uppercase tracking-widest">
                {noticiaActiva.categoria}
              </span>
              <span className="text-xs text-slate-400">{noticiaActiva.fecha}</span>
            </div>
            <h2 className="text-2xl text-[#fce893] font-black uppercase tracking-widest mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
              {noticiaActiva.titulo}
            </h2>
            <div className="text-sm text-slate-300 leading-loose">
              {noticiaActiva.contenido}
            </div>
          </div>

        </div>

        <div className="mt-[45vh] border-t border-[#102542] pt-24 pb-12">
          
          <div className="max-w-5xl mx-auto">
            
            <div id="reglas" style={{ scrollMarginTop: '145px' }}>
              <h2 className="text-4xl text-[#51e2f5] font-black uppercase tracking-widest mb-8 drop-shadow-[0_0_8px_rgba(81,226,245,0.4)]" style={{ fontFamily: "'Cinzel', serif" }}>
                {t('legal.rulesTitle')}
              </h2>
              <div className="bg-[#0a111c]/90 border border-[#163359] p-8 md:p-12 rounded-xl shadow-2xl">
                <ul className="space-y-8 text-sm text-slate-300">
                  <li className="flex gap-5">
                    <span className="text-3xl mt-1">🚫</span>
                    <div>
                      <strong className="block text-red-400 text-lg uppercase tracking-widest mb-2">{t('legal.rulesHacks')}</strong>
                      <p className="leading-relaxed">{t('legal.rulesHacksDesc')}</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <span className="text-3xl mt-1">💻</span>
                    <div>
                      <strong className="block text-[#fce893] text-lg uppercase tracking-widest mb-2">{t('legal.rulesIP')}</strong>
                      <p className="leading-relaxed">{t('legal.rulesIPDesc')}</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <span className="text-3xl mt-1">🗣️</span>
                    <div>
                      <strong className="block text-[#51e2f5] text-lg uppercase tracking-widest mb-2">{t('legal.rulesConduct')}</strong>
                      <p className="leading-relaxed">{t('legal.rulesConductDesc')}</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <span className="text-3xl mt-1">🛑</span>
                    <div>
                      <strong className="block text-slate-400 text-lg uppercase tracking-widest mb-2">{t('legal.rulesFraud')}</strong>
                      <p className="leading-relaxed">{t('legal.rulesFraudDesc')}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="py-[150px] flex items-center justify-center relative">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#163359] to-transparent"></div>
              <div className="absolute w-2 h-2 rotate-45 bg-[#0a111c] border border-[#fce893]/50 shadow-[0_0_8px_rgba(252,232,147,0.3)]"></div>
            </div>

            <div id="terminos" style={{ scrollMarginTop: '305px' }}>
              <h2 className="text-4xl text-[#fce893] font-black uppercase tracking-widest mb-8 drop-shadow-[0_0_8px_rgba(252,232,147,0.4)]" style={{ fontFamily: "'Cinzel', serif" }}>
                {t('legal.termsTitle')}
              </h2>
              <div className="bg-[#0a111c]/90 border border-[#163359] p-8 md:p-12 rounded-xl shadow-2xl">
                <div className="space-y-6 text-sm text-slate-400 leading-relaxed">
                  <p>{t('legal.termsDesc1')}</p>
                  <p>{t('legal.termsDesc2')}</p>
                  <p>{t('legal.termsDesc3')}</p>
                </div>
              </div>
            </div>

            <div className="py-[140px] flex items-center justify-center relative">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#163359] to-transparent"></div>
              <div className="absolute w-2 h-2 rotate-45 bg-[#0a111c] border border-green-500/50 shadow-[0_0_8px_rgba(34,197,94,0.3)]"></div>
            </div>

            <div id="privacidad" style={{ scrollMarginTop: '160px' }}>
              <h2 className="text-4xl text-green-400 font-black uppercase tracking-widest mb-8 drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]" style={{ fontFamily: "'Cinzel', serif" }}>
                {t('legal.privacyTitle')}
              </h2>
              <div className="bg-[#0a111c]/90 border border-[#163359] p-8 md:p-12 rounded-xl shadow-2xl">
                <div className="space-y-6 text-sm text-slate-400 leading-relaxed">
                  <p>{t('legal.privacyDesc1')}</p>
                  <p>{t('legal.privacyDesc2')}</p>
                  <p>{t('legal.privacyDesc3')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}

export default function NoticiasPage() {
  return (
    <I18nProvider initialLang="es">
      <div className="min-h-screen font-body text-slate-300 antialiased bg-[url('/background.jpg')] bg-cover bg-center bg-fixed bg-no-repeat bg-[#050a12]">
        <Header />
        <NoticiasContent />
        <Footer />
      </div>
    </I18nProvider>
  );
}