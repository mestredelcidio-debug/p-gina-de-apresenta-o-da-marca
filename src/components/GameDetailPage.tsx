import React, { useState } from 'react';
import { Game, BrandInfo } from '../types';
import {
  ArrowLeft,
  Smartphone,
  ExternalLink,
  Shield,
  HelpCircle,
  CheckCircle2,
  Share2,
  Sparkles,
  Maximize2,
  Play,
} from 'lucide-react';
import { BrandName } from './BrandName';

interface GameDetailPageProps {
  game: Game;
  brand: BrandInfo;
  onBack: () => void;
  onNavigateSupport: () => void;
  onNavigatePrivacy: () => void;
}

export const GameDetailPage: React.FC<GameDetailPageProps> = ({
  game,
  brand,
  onBack,
  onNavigateSupport,
  onNavigatePrivacy,
}) => {
  const [activeMedia, setActiveMedia] = useState<'screenshot' | 'trailer'>('screenshot');
  const [selectedScreenshot, setSelectedScreenshot] = useState<string>(
    game.screenshots[0] || game.keyArtUrl
  );
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    if (game.googlePlayUrl && !game.googlePlayUrl.startsWith('[')) {
      window.open(game.googlePlayUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Link do Google Play: ${game.googlePlayUrl}\n\n(Campo editável para a URL oficial da publicação do aplicativo na Google Play Store).`);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${game.title} - DELXUS`,
        text: game.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#07090E] min-h-screen text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar aos Jogos</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>{copied ? 'Link copiado!' : 'Compartilhar'}</span>
          </button>
        </div>

        {/* Hero Banner Area */}
        <div className="relative rounded-3xl border border-white/10 overflow-hidden bg-gradient-to-b from-[#0F1424] to-[#0A0D16] p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Branding & Core Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                {game.iconUrl ? (
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl shrink-0">
                    <img
                      src={game.iconUrl}
                      alt={`Ícone oficial de ${game.title}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-20 w-20 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-cyan-400" />
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <span className="font-semibold text-cyan-400">{game.genre}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <Smartphone className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{game.platform}</span>
                    </span>
                  </div>
                  <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                    {game.title}
                  </h1>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {game.fullDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all shadow-xl shadow-emerald-500/20 active:scale-[0.98]"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Disponível no Google Play</span>
                </button>

                <button
                  onClick={onNavigateSupport}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-200 transition-all"
                >
                  <HelpCircle className="h-4 w-4 text-cyan-400" />
                  <span>Suporte deste Jogo</span>
                </button>
              </div>

              {/* Editable Google Play Link Hint */}
              <p className="text-xs text-slate-400 font-mono">
                Link na Google Play: {game.googlePlayUrl}
              </p>
            </div>

            {/* Right: Key Art Media Card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black/50">
                <img
                  src={game.keyArtUrl || game.screenshots[0]}
                  alt={`Arte promocional de ${game.title}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">Universo <BrandName className="text-xs">DELXUS</BrandName></span>
                  <span className="text-emerald-400 font-medium">Jogo Original</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Media & Screenshots Section */}
        <div className="mt-16 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h2 className="font-display text-2xl font-bold text-white">
                Galeria & Visão Geral
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Confira imagens e detalhes visuais da interface do jogo.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveMedia('screenshot')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeMedia === 'screenshot'
                    ? 'bg-cyan-500 text-slate-950'
                    : 'text-slate-400 hover:text-white bg-white/5'
                }`}
              >
                Capturas de Tela
              </button>
              <button
                onClick={() => setActiveMedia('trailer')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeMedia === 'trailer'
                    ? 'bg-cyan-500 text-slate-950'
                    : 'text-slate-400 hover:text-white bg-white/5'
                }`}
              >
                <Play className="h-3 w-3" />
                <span>Trailer / Vídeo</span>
              </button>
            </div>
          </div>

          {activeMedia === 'screenshot' ? (
            <div className="space-y-4">
              {/* Main large viewer */}
              <div className="relative aspect-[16/9] max-h-[540px] rounded-2xl overflow-hidden border border-white/10 bg-black/80 flex items-center justify-center">
                <img
                  src={selectedScreenshot}
                  alt="Visualização ampliada do jogo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Thumbnails row */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {game.screenshots.map((shot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedScreenshot(shot)}
                    className={`relative h-20 w-32 rounded-xl overflow-hidden shrink-0 border transition-all ${
                      selectedScreenshot === shot
                        ? 'border-cyan-400 ring-2 ring-cyan-400/50'
                        : 'border-white/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={shot}
                      alt={`Miniatura ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative aspect-[16/9] max-h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0B0F19] to-[#04060A] flex flex-col items-center justify-center p-8 text-center">
              <div className="p-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-4">
                <Play className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Trailer Oficial do Jogo
              </h3>
              <p className="text-sm text-slate-400 max-w-md mb-4">
                Espaço reservado para o trailer de jogabilidade oficial ou vídeo de apresentação do
                Google Play.
              </p>
              <div className="text-xs font-mono text-cyan-400/80 bg-white/5 px-3 py-1.5 rounded border border-white/10">
                [INSERIR VÍDEO DO YOUTUBE / TRAILER]
              </div>
            </div>
          )}
        </div>

        {/* Features & Technical specifications */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-display text-2xl font-bold text-white">
              Características & Recursos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {game.features.map((feature, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-white/10 bg-[#0E131F] flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0A0D15] space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Ficha Técnica
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Desenvolvedora:</span>
                  <BrandName className="text-xs">{brand.name}</BrandName>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Plataforma:</span>
                  <span className="font-medium text-cyan-300">{game.platform}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Gênero:</span>
                  <span className="text-slate-200">{game.genre}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Classificação:</span>
                  <span className="text-slate-200">Livre para todos os públicos</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Idioma:</span>
                  <span className="text-slate-200">Português (Brasil)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Suporte Técnico:</span>
                  <button
                    onClick={onNavigateSupport}
                    className="text-cyan-400 hover:underline font-medium"
                  >
                    Abrir chamado
                  </button>
                </div>
              </div>
            </div>

            {/* Privacy Link */}
            <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Shield className="h-4 w-4 text-emerald-400" />
                <span>Privacidade & Dados</span>
              </div>
              <button
                onClick={onNavigatePrivacy}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Ler Política
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
