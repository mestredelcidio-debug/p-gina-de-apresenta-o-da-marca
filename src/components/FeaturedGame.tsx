import React, { useState } from 'react';
import { Game } from '../types';
import { ArrowRight, Sparkles, Smartphone, CheckCircle, ExternalLink, Eye } from 'lucide-react';

interface FeaturedGameProps {
  game: Game;
  onOpenDetails: (slug: string) => void;
}

export const FeaturedGame: React.FC<FeaturedGameProps> = ({ game, onOpenDetails }) => {
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(0);

  const handlePlayClick = () => {
    if (game.googlePlayUrl && !game.googlePlayUrl.startsWith('[')) {
      window.open(game.googlePlayUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Link do Google Play: ${game.googlePlayUrl}\n\n(Este campo é editável para receber a URL oficial quando o app for publicado na loja).`);
    }
  };

  return (
    <section className="relative py-24 bg-[#070A10] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Destaque Oficial</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              JOGO EM DESTAQUE
            </h2>
            <p className="mt-2 text-base text-slate-300">
              {game.subtitle || 'Descubra um universo de palavras, desafios e diversão.'}
            </p>
          </div>

          <button
            onClick={() => onOpenDetails(game.slug)}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors py-2"
          >
            <span>Ver página completa do jogo</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Featured Showcase Card */}
        <div className="rounded-2xl border border-white/10 bg-[#0E131F]/90 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Left Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-inner group">
                <img
                  src={game.screenshots[selectedScreenshotIndex] || game.keyArtUrl}
                  alt={`Captura de tela do jogo ${game.title}`}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Game Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg overflow-hidden border border-white/20 shadow-md">
                    <img
                      src={game.iconUrl}
                      alt={`Ícone do aplicativo ${game.title}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-left bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    <span className="block text-xs font-bold text-white leading-none">
                      {game.title}
                    </span>
                    <span className="text-[10px] text-cyan-400 font-medium">
                      {game.platform}
                    </span>
                  </div>
                </div>
              </div>

              {/* Thumbnail Selector */}
              {game.screenshots.length > 1 && (
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 font-medium">Screenshots:</span>
                  <div className="flex gap-2">
                    {game.screenshots.map((thumb, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedScreenshotIndex(idx)}
                        className={`h-12 w-20 rounded-md overflow-hidden border transition-all ${
                          selectedScreenshotIndex === idx
                            ? 'border-cyan-400 ring-2 ring-cyan-400/40'
                            : 'border-white/10 opacity-70 hover:opacity-100'
                        }`}
                        aria-label={`Ver captura de tela ${idx + 1}`}
                      >
                        <img
                          src={thumb}
                          alt={`Miniatura ${idx + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Content Right Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="text-cyan-400 font-semibold">{game.genre}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <Smartphone className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{game.platform}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400 font-medium">{game.status}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {game.title}
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {game.shortDescription}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-2 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Destaques da Experiência:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {game.features.slice(0, 4).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={handlePlayClick}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Disponível no Google Play</span>
                </button>

                <button
                  onClick={() => onOpenDetails(game.slug)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Eye className="h-4 w-4 text-cyan-400" />
                  <span>Saiba Mais</span>
                </button>
              </div>

              {/* Safe Link Placeholder notice */}
              {game.googlePlayUrl?.startsWith('[') && (
                <p className="text-[11px] text-slate-400 font-mono">
                  Link da loja: {game.googlePlayUrl}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
