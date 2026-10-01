import React from 'react';
import { ArrowRight, Sparkles, Gamepad2, Compass } from 'lucide-react';
import { BrandInfo } from '../types';
import { BrandName } from './BrandName';
import heroStudioImg from '../assets/images/hero_decix_studio.jpg';
import decixEmblemSvg from '../assets/images/decix_gamers_emblem.svg';

interface HeroProps {
  brand: BrandInfo;
  onExploreGames: () => void;
  onExploreAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  brand,
  onExploreGames,
  onExploreAbout,
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Studio Visual with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroStudioImg}
          alt="Ambiente cinematográfico do estúdio de desenvolvimento DECIX GAMERS"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/85 to-[#07090E]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.18),rgba(6,182,212,0.12),rgba(255,255,255,0))]" />
      </div>

      {/* Decorative Gamer Elements with electric cyan and sky blue ambiances */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-between px-8 opacity-30"
      >
        <div className="h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Official Brand Emblem Badge */}
        <div className="mb-6 inline-flex flex-col sm:flex-row items-center gap-3">
          <div className="group relative flex items-center gap-3 px-4 py-2 rounded-2xl bg-black/70 border border-cyan-400/40 shadow-xl shadow-cyan-950/50 backdrop-blur-md hover:border-cyan-300 transition-all">
            <div className="h-9 w-9 rounded-lg overflow-hidden border border-cyan-400/50 bg-black shadow-inner shrink-0">
              <img
                src={decixEmblemSvg}
                alt="Emblema oficial DECIX GAMERS"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <span>Estúdio Oficial</span>
              <span aria-hidden="true" className="text-cyan-400">·</span>
              <BrandName className="text-sm">DECIX GAMERS</BrandName>
            </div>
          </div>
          
          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Jogue · Descubra · Divirta-se</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
          CRIANDO JOGOS.{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(14,165,233,0.45)]">
            CRIANDO EXPERIÊNCIAS.
          </span>
        </h1>

        {/* Subheadline with striking highlighted brand name */}
        <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed [text-wrap:balance]">
          A <BrandName className="text-lg md:text-xl">DECIX GAMERS</BrandName> desenvolve jogos digitais pensados para divertir, desafiar e transformar alguns minutos do seu dia em experiências memoráveis.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreGames}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 transition-all hover:shadow-xl hover:shadow-cyan-500/30 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap"
          >
            <Gamepad2 className="h-4 w-4" />
            <span>Conheça Nossos Jogos</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreAbout}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 rounded-lg border border-cyan-500/30 bg-black/40 hover:bg-cyan-950/30 hover:border-cyan-400/60 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap"
          >
            <Compass className="h-4 w-4 text-cyan-400" />
            <span>Conheça a <BrandName className="ml-1 text-xs">DECIX GAMERS</BrandName></span>
          </button>
        </div>

        {/* Micro-editorial Footer Badges (No pills) */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-xs text-slate-400">
          <div>
            <span className="block font-display text-lg font-bold text-white tracking-wide">
              Android
            </span>
            <span className="text-slate-400">Foco inicial em dispositivos móveis</span>
          </div>
          <div>
            <span className="block font-display text-lg font-bold text-white tracking-wide">
              Casual & Inteligente
            </span>
            <span className="text-slate-400">Mecânicas acessíveis e estimulantes</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="block font-display text-lg font-bold text-white tracking-wide">
              Evolução Constante
            </span>
            <span className="text-slate-400">Novos projetos em desenvolvimento</span>
          </div>
        </div>
      </div>
    </section>
  );
};

