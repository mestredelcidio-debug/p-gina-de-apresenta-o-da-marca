import React from 'react';
import { ArrowRight, Sparkles, Gamepad2, Compass } from 'lucide-react';
import { BrandInfo } from '../types';
import { BrandName } from './BrandName';
import heroStudioImg from '../assets/images/hero_decix_studio.jpg';
import decixEmblemSvg from '../assets/images/decix_gamers_emblem.svg';
import decixLogoSvg from '../assets/images/decix_gamers_logo.svg';

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,210,255,0.22),rgba(6,182,212,0.14),rgba(255,255,255,0))]" />
      </div>

      {/* Decorative Gamer Elements with electric cyan and sky blue ambiances */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-between px-8 opacity-35"
      >
        <div className="h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl animate-pulse" />
        <div className="h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Prominent & Ultra-Visible Hero Brand Centerpiece */}
        <div className="mb-8 flex flex-col items-center group">
          <div className="relative flex items-center justify-center">
            {/* Glowing outer halo */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 opacity-60 blur-lg group-hover:opacity-100 transition duration-500 animate-pulse" />
            
            {/* Main Logo Container */}
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-2xl overflow-hidden border-2 border-cyan-400/80 bg-black/95 p-1.5 shadow-2xl shadow-cyan-500/50 backdrop-blur-xl group-hover:scale-105 group-hover:border-cyan-300 transition-all duration-300">
              <img
                src={decixEmblemSvg}
                alt="Logotipo oficial DECIX GAMERS"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 backdrop-blur-md shadow-md shadow-cyan-950/50">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>ESTÚDIO OFICIAL DE JOGOS</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
          CRIANDO JOGOS.{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(0,210,255,0.6)]">
            CRIANDO EXPERIÊNCIAS.
          </span>
        </h1>

        {/* Subheadline with striking highlighted brand name */}
        <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed [text-wrap:balance]">
          A <BrandName className="text-lg md:text-xl">DECIX GAMERS</BrandName> desenvolve jogos digitais pensados para divertir, desafiar e transformar alguns minutos do seu dia em experiências memoráveis.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
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
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-xs text-slate-400 w-full">
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

