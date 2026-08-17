import React from 'react';

// Ornate Kolam / Rangoli divider
export const KolamDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 my-6 opacity-75 ${className}`}>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-temple-gold to-temple-gold"></div>
    <svg className="w-8 h-8 text-temple-gold fill-current" viewBox="0 0 100 100">
      {/* Traditional 8-point Kolam Lotus Knot */}
      <path d="M50 10 C53 25 75 47 90 50 C75 53 53 75 50 90 C47 75 25 53 10 50 C25 47 47 25 50 10 Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
      <circle cx="50" cy="24" r="3" fill="currentColor" />
      <circle cx="50" cy="76" r="3" fill="currentColor" />
      <circle cx="24" cy="50" r="3" fill="currentColor" />
      <circle cx="76" cy="50" r="3" fill="currentColor" />
    </svg>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-temple-gold to-temple-gold"></div>
  </div>
);

// Temple Gopuram Arch Motif
export const GopuramArch = ({ className = "" }) => (
  <svg className={`w-12 h-12 text-temple-gold ${className}`} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 8 L54 26 L60 22 L56 38 L24 38 L20 22 L26 26 Z" fill="currentColor" fillOpacity="0.85" />
    <path d="M16 38 H64 V44 H16 V38 Z" fill="currentColor" />
    <path d="M22 44 H58 V70 C58 70 54 60 40 60 C26 60 22 70 22 70 V44 Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
    <circle cx="40" cy="48" r="4" fill="currentColor" />
  </svg>
);

// Corner Gold Filigree Flourish
export const CornerFlourish = ({ position = "top-left", className = "" }) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-[-1]',
  }[position] || '';

  return (
    <svg className={`w-12 h-12 text-temple-gold/40 pointer-events-none ${rotationClass} ${className}`} viewBox="0 0 100 100" fill="none">
      <path d="M10 10 H60 C60 10 40 20 40 40 C40 60 10 60 10 60 V10 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M8 8 L8 70 M8 8 L70 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 16 C26 16 34 24 34 34" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      <path d="M24 8 C24 24 8 24 8 24" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
};

// Doll Silhouette Vector
export const MarapachiDollIcon = ({ className = "w-6 h-6" }) => (
  <svg className={`${className}`} viewBox="0 0 64 64" fill="currentColor">
    {/* Crown */}
    <path d="M32 4 L38 14 L42 11 L39 21 L25 21 L22 11 L26 14 Z" />
    {/* Head */}
    <circle cx="32" cy="27" r="8" />
    {/* Torso */}
    <path d="M22 37 C22 37 25 56 32 60 C39 56 42 37 42 37 L37 35 L32 37 L27 35 Z" />
  </svg>
);
