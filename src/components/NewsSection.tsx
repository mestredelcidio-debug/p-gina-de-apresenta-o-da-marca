import React, { useState } from 'react';
import { NewsItem } from '../types';
import { Newspaper, BellRing, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { BrandName } from './BrandName';

interface NewsSectionProps {
  news: NewsItem[];
}

export const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Lançamento', 'Estúdio', 'Atualização'];

  const filteredNews =
    selectedCategory === 'Todas'
      ? news
      : news.filter((n) => n.category === selectedCategory);

  return (
    <section id="novidades" className="relative py-24 bg-[#070A10] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
              <Newspaper className="h-4 w-4" />
              <span>Atualizações do Estúdio</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              ÚLTIMAS NOVIDADES
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-2xl">
              Fique por dentro dos novos lançamentos, atualizações de jogos e marcos da <BrandName>DECIX GAMERS</BrandName>.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Cards */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0E131F] p-6 hover:border-cyan-500/30 transition-all hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="text-cyan-400 font-semibold">{item.category}</span>
                    <span className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
                      <Calendar className="h-3 w-3" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">
                    {item.isUpcoming ? 'Próximo anúncio' : 'Publicado'}
                  </span>
                  <span className="text-cyan-400 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Ler nota <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/10 p-12 text-center">
            <BellRing className="h-10 w-10 text-cyan-400/60 mx-auto mb-3" />
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Em breve, novidades da <BrandName>DECIX GAMERS</BrandName>.
            </h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Estamos concentrados na criação e aprimoramento de nossos jogos. Fique de olho neste
              canal para futuros comunicados.
            </p>
          </div>
        )}

        {/* Microcopy Callout */}
        <div className="mt-12 text-center text-xs text-slate-400 font-mono">
          MICROCOPY · UM JOGO DE CADA VEZ. UMA EXPERIÊNCIA DE CADA VEZ.
        </div>
      </div>
    </section>
  );
};
