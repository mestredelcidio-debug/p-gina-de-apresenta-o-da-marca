import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
}) => {
  const sizeMap = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-14 w-14',
    xl: 'h-20 w-20',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div
        className={`relative ${sizeMap[size]} shrink-0 rounded-xl overflow-hidden border border-red-500/40 bg-black shadow-lg shadow-red-600/20 group-hover:border-red-500 transition-all duration-300`}
      >
        <img
          src="/src/assets/images/delxus_logo_official_1790824285866.jpg"
          alt="Logotipo oficial DELXUS com emblema em chamas"
          className="h-full w-full object-cover"
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
