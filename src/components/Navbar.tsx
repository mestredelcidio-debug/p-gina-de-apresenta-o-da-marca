import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import delxusEmblemSvg from '../assets/images/delxus_emblem_original.svg';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Jogos', path: '/jogos' },
    { label: 'Novidades', path: '/novidades' },
    { label: 'Suporte', path: '/suporte' },
    { label: 'Contato', path: '/contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090E]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-[#07090E]/95 via-[#07090E]/70 to-transparent border-b border-white/5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-sm"
          >
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl overflow-hidden border border-red-500/50 bg-black shadow-md shadow-red-600/30 group-hover:scale-105 group-hover:border-red-400 transition-all duration-300">
              <img
                src={delxusEmblemSvg}
                alt="Logotipo oficial DELXUS"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-red-500 via-rose-500 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(239,68,68,0.5)] group-hover:brightness-110 transition-all">
              DELXUS
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-8 text-sm font-medium"
          >
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.path ||
                (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`relative py-1 transition-colors hover:text-white ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary action button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onNavigate('/jogos')}
              className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:from-cyan-400 hover:to-emerald-400 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap"
            >
              <span>Conheça Nossos Jogos</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0A0D15]/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.path ||
                (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`flex items-center justify-between py-2 text-base font-medium rounded-md px-3 transition-colors ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-400 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/40 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />}
                </a>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/jogos');
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all active:scale-[0.98]"
              >
                <span>Conheça Nossos Jogos</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
