import React from 'react';
import { ArrowRight, Sparkles, Gamepad2, Compass } from 'lucide-react';
import { BrandInfo } from '../types';
import { BrandName } from './BrandName';
import heroStudioImg from '../assets/images/hero_delxus_studio_1790822350853.jpg';
import delxusEmblemSvg from '../assets/images/delxus_emblem_original.svg';

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
          alt="Ambiente cinematográfico do estúdio de desenvolvimento DELXUS"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/80 to-[#07090E]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(239,68,68,0.12),rgba(6,182,212,0.1),rgba(255,255,255,0))]" />
      </div>

      {/* Decorative Gamer Elements with flame red and cyan ambiances */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-between px-8 opacity-25"
      >
        <div className="h-72 w-72 rounded-full bg-red-600/15 blur-3xl" />
        <div className="h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Official Brand Emblem Badge */}
        <div className="mb-6 inline-flex flex-col sm:flex-row items-center gap-3">
          <div className="group relative flex items-center gap-3 px-4 py-2 rounded-2xl bg-black/60 border border-red-500/40 shadow-xl shadow-red-950/40 backdrop-blur-md hover:border-red-400 transition-all">
            <div className="h-8 w-8 rounded-lg overflow-hidden border border-red-500/50 bg-black shadow-inner shrink-0">
              <img
                src={delxusEmblemSvg}
                alt="Emblema oficial DELXUS"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <span>Estúdio Oficial</span>
              <span aria-hidden="true" className="text-red-500">·</span>
              <BrandName className="text-sm">DELXUS</BrandName>
            </div>
          </div>
          
          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Jogue · Descubra · Divirta-se</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
          CRIANDO JOGOS.{' '}
          <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(239,68,68,0.35)]">
            CRIANDO EXPERIÊNCIAS.
          </span>
        </h1>

        {/* Subheadline with striking highlighted brand name */}
        <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed [text-wrap:balance]">
          A <BrandName className="text-lg md:text-xl">DELXUS</BrandName> desenvolve jogos digitais pensados para divertir, desafiar e transformar alguns minutos do seu dia em experiências memoráveis.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreGames}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-red-600 via-rose-600 to-red-500 hover:from-red-500 hover:to-rose-500 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all hover:shadow-xl hover:shadow-red-600/30 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 whitespace-nowrap"
          >
            <Gamepad2 className="h-4 w-4" />
            <span>Conheça Nossos Jogos</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreAbout}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 rounded-lg border border-red-500/30 bg-black/40 hover:bg-red-950/30 hover:border-red-400/60 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 whitespace-nowrap"
          >
            <Compass className="h-4 w-4 text-red-400" />
            <span>Conheça a <BrandName className="ml-1 text-xs">DELXUS</BrandName></span>
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

