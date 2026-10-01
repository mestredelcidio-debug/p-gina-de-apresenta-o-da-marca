import React from 'react';
import { Gamepad2, ArrowLeft, Compass, Sparkles } from 'lucide-react';
import { BrandName } from './BrandName';

interface NotFoundPageProps {
  onGoHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-24 pb-16 px-4 bg-[#07090E] text-center">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Visual Gamer Badge with official logo */}
        <div className="relative mx-auto h-24 w-24 rounded-2xl bg-black border border-red-500/50 shadow-2xl shadow-red-950/50 p-2 flex items-center justify-center">
          <img
            src="/src/assets/images/delxus_logo_official_1790824285866.jpg"
            alt="Logotipo DELXUS"
            className="h-full w-full object-cover rounded-xl"
          />
          <div className="absolute -top-2 -right-2">
            <span className="font-mono text-xs font-bold bg-red-600 text-white px-2 py-0.5 rounded-full shadow">
              404
            </span>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Coordenadas Desconhecidas</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            OPS! VOCÊ SE PERDEU NO UNIVERSO <BrandName className="text-3xl sm:text-4xl md:text-5xl">DELXUS</BrandName>.
          </h1>

          <p className="text-base text-slate-300 max-w-md mx-auto leading-relaxed">
            A página que você está procurando não foi encontrada. Ela pode ter sido movida,
            renomeada ou ainda estar em desenvolvimento no estúdio.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onGoHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:shadow-lg hover:shadow-red-600/30 active:scale-[0.98]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar para o Início</span>
          </button>
        </div>

        {/* Studio Easter Egg */}
        <p className="text-xs text-slate-400 font-mono pt-6">
          <BrandName className="text-xs">DELXUS</BrandName> GAME ENGINE · CÓDIGO DE ERRO: ROTA_NAO_ENCONTRADA
        </p>
      </div>
    </div>
  );
};
