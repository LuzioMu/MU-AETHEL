'use client';

// =========================================================================
// MU AETHEL - Feed de Noticias Compacto
// =========================================================================

export default function NewsFeed() {
  // Datos de ejemplo: luego los conectarás a tu base de datos o CMS
  const news = [
    { id: 1, type: 'Actualización', date: '18 sept 2026', title: 'Ajuste de tasas de Helper Token' },
    { id: 2, type: 'Evento', date: '15 sept 2026', title: 'Torneo de Honor: 64 llaves, entrada libre' },
    { id: 3, type: 'Mantenimiento', date: '11 sept 2026', title: 'Mantenimiento preventivo del GameServer' },
    { id: 4, type: 'Noticia', date: '04 sept 2026', title: 'Por qué Mu Aethel no va a tener sistema VIP' },
  ];

  return (
    <section id="noticias" className="relative z-10 py-10 bg-[#050a12]/85 backdrop-blur-md border-y border-[#102542]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* TÍTULO */}
        <div className="text-center mb-6">
          <h2 
            className="text-2xl sm:text-3xl text-white drop-shadow-md"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Noticias del Reino
          </h2>
        </div>

        {/* GRILLA COMPACTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {news.map((item) => (
            <a 
              key={item.id} 
              href={`#noticia-${item.id}`} 
              className="block p-4 rounded bg-[#0a182e]/60 border border-[#102542] hover:border-[#51e2f5]/60 hover:bg-[#0a182e]/90 transition-all shadow-md"
            >
              <div className="flex justify-between items-center mb-2 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                <span className={
                  item.type === 'Evento' ? 'text-[#cba135]' : 
                  item.type === 'Actualización' ? 'text-[#51e2f5]' : 
                  item.type === 'Mantenimiento' ? 'text-red-400' : 'text-slate-300'
                }>
                  {item.type}
                </span>
                <span>{item.date}</span>
              </div>
              <h3 
                className="text-sm font-semibold text-[#fce893] leading-snug"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {item.title}
              </h3>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
}
