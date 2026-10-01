import React from 'react';
import { BrandInfo } from '../types';
import { Shield, Sparkles, Gamepad2 } from 'lucide-react';
import { BrandName } from './BrandName';
import decixEmblemSvg from '../assets/images/decix_gamers_emblem.svg';

interface FooterProps {
  brand: BrandInfo;
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ brand, onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#05070B] pt-16 pb-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <a
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="inline-flex items-center gap-3 group"
            >
              <div className="h-10 w-10 rounded-xl overflow-hidden border border-cyan-400/50 bg-black shadow-md shadow-cyan-600/30 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={decixEmblemSvg}
                  alt="Logotipo oficial DECIX GAMERS"
                  className="h-full w-full object-contain"
                />
              </div>
              <BrandName className="text-2xl font-display font-extrabold tracking-wider">
                DECIX GAMERS
              </BrandName>
            </a>
            <p className="text-sm font-medium text-cyan-400 tracking-wide uppercase">
              {brand.tagline}
            </p>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Estúdio de jogos digitais focado em transformar ideias criativas em experiências
              acessíveis, divertidas e memoráveis para jogadores em dispositivos móveis e outras
              plataformas.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Gamepad2 className="h-4 w-4 text-red-500" />
                <span>Jogos Digitais</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span>Android & Mobile</span>
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNav(e, '/')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/sobre"
                  onClick={(e) => handleNav(e, '/sobre')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Sobre a DECIX GAMERS
                </a>
              </li>
              <li>
                <a
                  href="/jogos"
                  onClick={(e) => handleNav(e, '/jogos')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Nossos Jogos
                </a>
              </li>
              <li>
                <a
                  href="/novidades"
                  onClick={(e) => handleNav(e, '/novidades')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Novidades
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  onClick={(e) => handleNav(e, '/faq')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Atendimento & Jurídico
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/suporte"
                  onClick={(e) => handleNav(e, '/suporte')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Suporte ao Jogador
                </a>
              </li>
              <li>
                <a
                  href="/contato"
                  onClick={(e) => handleNav(e, '/contato')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contato Oficial
                </a>
              </li>
              <li>
                <a
                  href="/politica-de-privacidade"
                  onClick={(e) => handleNav(e, '/politica-de-privacidade')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Shield className="h-3.5 w-3.5 text-slate-500" />
                  <span>Política de Privacidade</span>
                </a>
              </li>
              <li>
                <a
                  href="/termos-de-uso"
                  onClick={(e) => handleNav(e, '/termos-de-uso')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {brand.copyrightYear} <BrandName className="text-xs">{brand.name}</BrandName>. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Canal oficial de atendimento:</span>
            <span className="font-mono text-cyan-400/90">{brand.officialEmail}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
