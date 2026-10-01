import React, { useState } from 'react';
import { Game, BrandInfo } from '../types';
import { Smartphone, Gamepad2, ArrowRight, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { BrandName } from './BrandName';

interface GamesCatalogProps {
  games: Game[];
  brand: BrandInfo;
  onSelectGame: (slug: string) => void;
}

export const GamesCatalog: React.FC<GamesCatalogProps> = ({
  games,
  brand,
  onSelectGame,
}) => {
  const [filter, setFilter] = useState<'all' | 'Android' | 'Em Breve'>('all');

  const filteredGames = games.filter((game) => {
    if (filter === 'all') return true;
    if (filter === 'Android') return game.platform.includes('Android');
    if (filter === 'Em Breve') return game.status !== 'Disponível';
    return true;
  });

  const handleDownload = (e: React.MouseEvent, game: Game) => {
    e.stopPropagation();
    if (game.googlePlayUrl && !game.googlePlayUrl.startsWith('[')) {
      window.open(game.googlePlayUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Link do jogo: ${game.googlePlayUrl}\n\n(Campo editável para a URL oficial da loja Google Play).`);
    }
  };

  return (
    <section id="jogos" className="relative py-24 bg-[#0A0D15] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-400 mb-2">
              <Gamepad2 className="h-4 w-4" />
              <span>Catálogo <BrandName className="text-xs">DELXUS</BrandName></span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              NOSSOS JOGOS
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-2xl">
              Portfólio de experiências interativas desenvolvidas pelo estúdio com foco em diversão
              inteligente, dinamismo e design refinado.
            </p>
          </div>

          {/* Interactive filter segmented buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-lg self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Todos ({games.length})
            </button>
            <button
              onClick={() => setFilter('Android')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'Android'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Android
            </button>
            <button
              onClick={() => setFilter('Em Breve')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'Em Breve'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Em Breve
            </button>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => {
            const isReleased = game.status === 'Disponível';
            return (
              <div
                key={game.id}
                onClick={() => onSelectGame(game.slug)}
                className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isReleased
                    ? 'border-white/10 bg-[#0E131F] hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10'
                    : 'border-dashed border-white/15 bg-white/[0.02] hover:border-white/30'
                }`}
              >
                {/* Visual Top Preview */}
                <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                  {game.keyArtUrl ? (
                    <img
                      src={game.keyArtUrl}
                      alt={`Arte do jogo ${game.title}`}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 to-[#07090E]">
                      <Gamepad2 className="h-10 w-10 text-slate-600 mb-2" />
                      <span className="text-xs font-mono text-slate-500">
                        PROJETO EM DESENVOLVIMENTO
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-transparent to-black/40" />

                  {/* App Icon Lockup */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {game.iconUrl ? (
                      <div className="h-11 w-11 rounded-lg overflow-hidden border border-white/20 shadow-md">
                        <img
                          src={game.iconUrl}
                          alt={`Ícone ${game.title}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-11 w-11 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400">
                        <Sparkles className="h-5 w-5" />
                      </div>
                    )}
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-md border ${
                        isReleased
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                          : 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                      }`}
                    >
                      {game.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span>{game.genre}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-slate-300">
                        <Smartphone className="h-3 w-3 text-cyan-400" />
                        <span>{game.platform}</span>
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {game.title}
                    </h3>

                    <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                      {game.shortDescription}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectGame(game.slug);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-cyan-400 transition-colors py-2"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>

                    {isReleased ? (
                      <button
                        onClick={(e) => handleDownload(e, game)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors"
                        title={game.googlePlayUrl}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Google Play</span>
                      </button>
                    ) : (
                      <span className="text-xs text-slate-500 font-mono">
                        {game.googlePlayUrl}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 22: Google Play Banner */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-[#0C1220] via-[#0E182D] to-[#0A101C] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Distribuição Oficial
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Encontre nossos jogos no Google Play
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Acompanhe a página oficial de desenvolvedor da <BrandName>DELXUS</BrandName> na loja e baixe nossos jogos com
              segurança e atualizações automáticas.
            </p>
            <p className="text-xs text-slate-400 font-mono pt-1">
              Link oficial: {brand.googlePlayDeveloperUrl}
            </p>
          </div>

          <button
            onClick={() => {
              if (!brand.googlePlayDeveloperUrl.startsWith('[')) {
                window.open(brand.googlePlayDeveloperUrl, '_blank', 'noopener,noreferrer');
              } else {
                alert(`Página de Desenvolvedor DELXUS: ${brand.googlePlayDeveloperUrl}\n\n(Configurável quando a página de desenvolvedor na Google Play Store for publicada).`);
              }
            }}
            className="group shrink-0 inline-flex items-center gap-2.5 rounded-lg bg-white text-slate-950 hover:bg-slate-100 px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all active:scale-[0.98] shadow-lg shadow-white/5"
          >
            <Smartphone className="h-4 w-4 text-emerald-600" />
            <span>Ver na Google Play</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
          </button>
        </div>
      </div>
    </section>
  );
};
