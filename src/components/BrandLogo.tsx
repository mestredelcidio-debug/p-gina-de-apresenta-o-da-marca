import React from 'react';
import decixLogoSvg from '../assets/images/decix_gamers_logo.svg';
import decixEmblemSvg from '../assets/images/decix_gamers_emblem.svg';

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

  const logoSrc = variant === 'full' ? decixLogoSvg : decixEmblemSvg;

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div
        className={`relative ${sizeMap[size]} shrink-0 rounded-xl overflow-hidden border border-cyan-500/50 bg-black shadow-lg shadow-cyan-600/30 group-hover:border-cyan-300 group-hover:scale-105 transition-all duration-300`}
      >
        <img
          src={logoSrc}
          alt="Logotipo oficial da marca DECIX GAMERS"
          className="h-full w-full object-contain"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-cyan-600/10 to-transparent pointer-events-none"
        />
      </div>

      {showText && (
        <span className="font-display font-extrabold tracking-wider bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(14,165,233,0.55)]">
          DECIX GAMERS
        </span>
      )}
    </div>
  );
};

