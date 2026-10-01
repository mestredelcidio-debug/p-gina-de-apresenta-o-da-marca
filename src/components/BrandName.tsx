import React from 'react';
import decixEmblemSvg from '../assets/images/decix_gamers_emblem.svg';

interface BrandNameProps {
  className?: string;
  children?: React.ReactNode;
  withEmblem?: boolean;
}

/**
 * Componente oficial de destaque do nome da marca DECIX GAMERS.
 * Aplica a cor chamativa inspirada no ciano elétrico e azul luminoso do logotipo oficial.
 */
export const BrandName: React.FC<BrandNameProps> = ({
  className = '',
  children = 'DECIX GAMERS',
  withEmblem = false,
}) => {
  return (
    <span className={`inline-flex items-center gap-1.5 align-baseline ${className}`}>
      {withEmblem && (
        <span className="inline-block h-4 w-4 rounded overflow-hidden border border-cyan-400/50 bg-black shrink-0 relative top-[-1px] shadow-sm shadow-cyan-500/40">
          <img
            src={decixEmblemSvg}
            alt="Emblema oficial DECIX GAMERS"
            className="h-full w-full object-contain"
          />
        </span>
      )}
      <span className="font-extrabold tracking-wider bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(14,165,233,0.55)] selection:bg-cyan-500/30 selection:text-white">
        {children}
      </span>
    </span>
  );
};
