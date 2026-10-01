import React from 'react';
import { Lightbulb, Smile, Cpu, Sparkles, Target, Compass, Layers, CheckCircle2 } from 'lucide-react';
import { BrandInfo } from '../types';
import { BrandName } from './BrandName';
import delxusLogoSvg from '../assets/images/delxus_logo_original.svg';

interface AboutSectionProps {
  brand: BrandInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ brand }) => {
  const brandPrinciples = [
    {
      name: 'Criatividade',
      icon: Lightbulb,
      description: 'Liberdade para explorar conceitos originais e dinâmicas cativantes.',
      accent: 'from-amber-400/20 to-amber-500/5 text-amber-300 border-amber-500/20',
    },
    {
      name: 'Tecnologia',
      icon: Cpu,
      description: 'Engenharia sólida, carregamento leve e otimização para dispositivos móveis.',
      accent: 'from-cyan-400/20 to-cyan-500/5 text-cyan-300 border-cyan-500/20',
    },
    {
      name: 'Diversão',
      icon: Smile,
      description: 'O prazer genuíno de jogar no centro de cada mecânica desenvolvida.',
      accent: 'from-emerald-400/20 to-emerald-500/5 text-emerald-300 border-emerald-500/20',
    },
    {
      name: 'Experiência',
      icon: Sparkles,
      description: 'Interface clara, ergonomia nos toques e respeito ao tempo do jogador.',
      accent: 'from-red-500/20 to-rose-500/5 text-red-300 border-red-500/20',
    },
  ];

  const brandValues = [
    {
      title: 'CRIATIVIDADE',
      text: 'Novas ideias são o ponto de partida para cada experiência.',
    },
    {
      title: 'EXPERIÊNCIA',
      text: 'Pensamos no jogo a partir da perspectiva de quem está jogando.',
    },
    {
      title: 'QUALIDADE',
      text: 'Buscamos melhorar continuamente nossos produtos e cada detalhe da experiência.',
    },
    {
      title: 'EVOLUÇÃO',
      text: 'Aprendemos, testamos, ajustamos e continuamos avançando.',
    },
  ];

  return (
    <section id="sobre" className="relative py-24 bg-[#0A0D15] border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section 1: Por trás da DELXUS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-400">
              <Compass className="h-4 w-4" />
              <span>Identidade & Propósito</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              POR TRÁS DA <BrandName>DELXUS</BrandName>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>
                A <BrandName>DELXUS</BrandName> nasceu com uma ideia simples: criar jogos que sejam fáceis de começar,
                divertidos de jogar e capazes de conquistar o jogador ao longo do tempo.
              </p>
              <p>
                Nosso foco está em transformar ideias em experiências digitais envolventes, combinando
                criatividade, tecnologia, design e atenção aos detalhes.
              </p>
              <p>
                Cada jogo representa uma nova oportunidade de experimentar, aprender e criar algo que
                possa fazer parte do dia a dia dos jogadores.
              </p>
            </div>

            {/* Logo feature banner */}
            <div className="p-4 rounded-xl border border-red-500/20 bg-gradient-to-r from-red-950/30 via-black/40 to-transparent flex items-center gap-4">
              <div className="h-16 w-16 rounded-xl overflow-hidden border border-red-500/50 bg-black shadow-lg shadow-red-900/30 shrink-0 p-1">
                <img
                  src={delxusLogoSvg}
                  alt="Logotipo oficial da marca DELXUS"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-xs">
                <span className="block font-display font-bold text-white uppercase tracking-wider">
                  Logotipo Oficial da Marca
                </span>
                <span className="text-slate-400">
                  O emblema flamejante original simboliza a paixão, energia e determinação da <BrandName className="text-xs">DELXUS</BrandName> em cada projeto.
                </span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 font-mono">
              MICROCOPY · DO CONCEITO À TELA
            </div>
          </div>

          {/* Visual Principle Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brandPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.name}
                  className={`p-5 rounded-xl border bg-gradient-to-br transition-all duration-300 hover:scale-[1.02] ${principle.accent}`}
                >
                  <div className="p-2.5 rounded-lg bg-black/40 w-fit mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white tracking-wide uppercase">
                    {principle.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                    {principle.description}
                  </p>
                  <span className="mt-3 block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                    Princípio <BrandName className="text-[10px]">DELXUS</BrandName>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Nossa Missão & Para onde estamos indo */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-white/10">
          {/* Missão */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 relative group hover:border-red-500/30 transition-colors">
            <div className="flex items-center gap-3 text-red-400 mb-4">
              <Target className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Compromisso</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Nossa missão
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              "{brand.mission}"
            </p>
          </div>

          {/* Visão */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 relative group hover:border-amber-500/30 transition-colors">
            <div className="flex items-center gap-3 text-amber-400 mb-4">
              <Layers className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Trajetória</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Para onde estamos indo
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              A <BrandName>DELXUS</BrandName> busca crescer continuamente como marca de jogos digitais, desenvolvendo novos projetos, explorando diferentes ideias e construindo experiências cada vez melhores para seus jogadores.
            </p>
          </div>
        </div>

        {/* Section 3: Nossos Valores */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400">
              Pilares Fundamentais
            </span>
            <h3 className="font-display text-3xl font-extrabold text-white mt-2">
              NOSSOS VALORES
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Os fundamentos que orientam o design e a produção de cada jogo no estúdio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandValues.map((val, idx) => (
              <div
                key={val.title}
                className="p-6 rounded-xl bg-[#0E131F] border border-white/10 hover:border-red-500/30 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="font-mono text-red-400">0{idx + 1}</span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-400/80" />
                </div>
                <h4 className="font-display text-lg font-bold text-white tracking-wide">
                  {val.title}
                </h4>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
