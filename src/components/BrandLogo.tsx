import React from 'react';
import delxusLogoSvg from '../assets/images/delxus_logo_original.svg';
import delxusEmblemSvg from '../assets/images/delxus_emblem_original.svg';

interface BrandLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'emblem' | 'full';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
  variant = 'emblem',
}) => {
  const sizeMap = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-14 w-14',
    xl: 'h-24 w-24',
  };

  const logoSrc = variant === 'full' ? delxusLogoSvg : delxusEmblemSvg;

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div
        className={`relative ${sizeMap[size]} shrink-0 rounded-xl overflow-hidden border border-red-500/50 bg-black shadow-lg shadow-red-600/30 group-hover:border-red-400 group-hover:scale-105 transition-all duration-300`}
      >
        <img
          src={logoSrc}
          alt="Logotipo oficial da marca DELXUS"
          className="h-full w-full object-contain"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent pointer-events-none"
        />
      </div>

      {showText && (
        <span className="font-display font-extrabold tracking-wider bg-gradient-to-r from-red-500 via-rose-500 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]">
          DELXUS
        </span>
      )}
    </div>
  );
};

