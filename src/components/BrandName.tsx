import React from 'react';
import delxusEmblemSvg from '../assets/images/delxus_emblem_original.svg';

interface BrandNameProps {
  className?: string;
  children?: React.ReactNode;
  withEmblem?: boolean;
}

/**
 * Componente oficial de destaque do nome da marca DELXUS.
 * Aplica a cor chamativa inspirada no vermelho flamejante e escarlate do logotipo oficial.
 */
export const BrandName: React.FC<BrandNameProps> = ({
  className = '',
  children = 'DELXUS',
  withEmblem = false,
}) => {
  return (
    <span className={`inline-flex items-center gap-1.5 align-baseline ${className}`}>
      {withEmblem && (
        <span className="inline-block h-4 w-4 rounded overflow-hidden border border-red-500/50 bg-black shrink-0 relative top-[-1px]">
          <img
            src={delxusEmblemSvg}
            alt="Emblema oficial DELXUS"
            className="h-full w-full object-contain"
          />
        </span>
      )}
      <span className="font-extrabold tracking-wider bg-gradient-to-r from-red-500 via-rose-500 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(239,68,68,0.45)] selection:bg-red-500/30 selection:text-white">
        {children}
      </span>
    </span>
  );
};
