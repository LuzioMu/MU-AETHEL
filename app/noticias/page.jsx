'use client';

import { useState } from 'react';
import { I18nProvider, useI18n } from '../../lib/i18n';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// MOCK DE NOTICIAS (Acá agregarás tus noticias reales después en el idioma que quieras)
const newsData = [
  {
    id: 1,
    date: '01 Oct 2026',
    category: 'Transparencia',
    title: 'Reporte Financiero: Donaciones Mensuales',
    excerpt: 'Detalle de los ingresos y egresos del servidor para mantener Mu Aethel libre de P2W.',
    content: `Como prometimos desde el día uno, Mu Aethel se mantiene gracias a la comunidad. Este mes hemos recaudado un total de $350 mediante donaciones voluntarias de nuestros jugadores. 
    \n\n**¿En qué se usó el dinero?**\n- $120: Alquiler del Servidor VPS (Hostinger).\n- $50: Protección Anti-DDoS Avanzada.\n- $80: Renovación de dominios y licencias web.\n- $100: Guardado para el fondo de premios del próximo Torneo de Clases.\n\nGracias a todos los que creen en este proyecto NO-P2W. Ustedes hacen que el reino siga vivo.`
  },
  {
    id: 2,
    date: '28 Sep 2026',
    category: 'Eventos',
    title: 'Ganadores del Castle Siege',
    excerpt: 'La alianza BloodOath se corona como dueña del Valle de Loren tras una batalla épica.',
    content: `El Castillo de Loren tiene nuevos dueños. En una batalla que quedará en la historia del servidor, la alianza **BloodOath** logró registrar el sello en los últimos 3 minutos del evento, arrebatándole el trono a TheKings.\n\nFelicidades al Guild Master y a todos los miembros. Podrán disfrutar del mapa exclusivo de Land of Trials durante toda esta semana.`
  },
  {
    id: 3,
    date: '25 Sep 2026',
    category: 'Actualización',
    title: 'Parche 1.0.2: Ajuste de Resets y Balance',
    excerpt: 'Nuevos límites de reset semanales y mejora en el drop de Chaos Castle.',
    content: `Hemos escuchado el feedback de la comunidad. A partir de hoy, aplicamos los siguientes cambios:\n\n1. **Límite de Resets:** Para mantener la economía sana y dar oportunidad a los nuevos, el límite máximo se ajusta a 50 resets esta semana.\n2. **Chaos Castle:** Se aumentó un 15% la probabilidad de obtener items Ancient en los niveles 5 y 6.\n3. **Clases:** Pequeño buff de daño al Skill 'Twisting Slash' del Dark Knight en PVE.`
  }
];

function NoticiasContent() {
  const { t } = useI18n();
  const [activeNews, setActiveNews] = useState(newsData[0]);

  return (
    <main className="relative z-10 py-16 bg-[#050a12]/90 backdrop-blur-md min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Cabecera */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-white drop-shadow-[0_0_15px_rgba(81,226,245,0.3)] mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('newsPage.title')}
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">{t('newsPage.subtitle')}</p>
        </div>

        {/* Layout Dividido */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Columna Izquierda: Lista de Noticias */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {newsData.map((item) => (
              <button 
                key={item.id}
                onClick={() => setActiveNews(item)}
                className={`text-left p-5 rounded border transition-all ${
                  activeNews.id === item.id 
                    ? 'bg-[#10567e]/30 border-[#51e2f5] shadow-[0_0_15px_rgba(81,226,245,0.15)]' 
                    : 'bg-[#0a111c] border-[#102542] hover:border-slate-500'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                    item.category === 'Transparencia' ? 'bg-green-900/50 text-green-400' : 
                    item.category === 'Eventos' ? 'bg-red-900/50 text-red-400' : 'bg-blue-900/50 text-blue-400'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{item.date}</span>
                </div>
                <h3 className={`text-lg font-bold mb-1 ${activeNews.id === item.id ? 'text-white' : 'text-slate-300'}`}>
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">{item.excerpt}</p>
              </button>
            ))}
          </div>

          {/* Columna Derecha: Lectura Completa */}
          <div className="lg:w-2/3">
            {activeNews ? (
              <div className="bg-[#0a111c] border border-[#102542] rounded-lg p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fce893] to-transparent opacity-60"></div>
                
                <span className="text-[#51e2f5] text-xs font-bold tracking-widest uppercase mb-2 block">
                  {activeNews.category} • {activeNews.date}
                </span>
                
                <h2 className="text-3xl text-white mb-6 font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
                  {activeNews.title}
                </h2>
                
                <div className="text-slate-300 leading-relaxed space-y-4 text-sm">
                  {activeNews.content.split('\n').map((paragraph, idx) => (
                    <p key={idx} dangerouslySetInnerHTML={{ 
                      __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<span class="text-[#fce893] font-bold">$1</span>') 
                    }} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center border border-dashed border-[#102542] rounded-lg bg-[#050a12]/50 p-10">
                <p className="text-slate-500">{t('newsPage.selectArticle')}</p>
              </div>
            )}
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
