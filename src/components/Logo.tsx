import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  iconColor?: string;
  textColor?: string;
  accentColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-11 w-auto",
  iconColor = "#FFFFFF",
  textColor = "#FFFFFF",
  accentColor = "#00E5FF"
}) => {
  const idPrefix = useId().replace(/:/g, '');
  const maskId = `mask-${idPrefix}`;
  const gradientId = `gradient-${idPrefix}`;
  const glowId = `glow-${idPrefix}`;

  return (
    <svg 
      className={className}
      viewBox="0 0 265 95" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur"></feGaussianBlur>
          <feMerge>
            <feMergeNode in="blur"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={textColor} stopOpacity="0.05"></stop>
          <stop offset="40%" stopColor={textColor} stopOpacity="0.5"></stop>
          <stop offset="100%" stopColor={accentColor} stopOpacity="1"></stop>
        </linearGradient>
        <mask id={maskId}>
          <rect x="0" y="0" width="265" height="95" fill="white"></rect>
          <g transform="translate(45, 34) rotate(30)">
            <path d="M 0 -18 L 2.5 -5 L 15 -3 L 15 0 L 2.5 1 L 2 13 L 7 16 L 7 19 L 0 16.5 L -7 19 L -7 16 L -2 13 L -2.5 1 L -15 0 L -15 -3 L -2.5 -5 Z" fill="black" stroke="black" strokeWidth="5.5" strokeLinejoin="round"></path>
          </g>
        </mask>
      </defs>
      <g>
        <path d="M 5 15 L 14 20 L 14 62 L 5 67 Z" fill={iconColor}></path>
        <path d="M 22 20 L 31 15 L 31 67 L 22 62 Z" fill={iconColor}></path>
        <path d="M 14 38 L 22 38 L 22 45 L 14 45 Z" fill={iconColor}></path>
        <g mask={`url(#${maskId})`}>
          <path d="M 36 27 L 44 31 L 44 74 L 36 79 Z" fill={iconColor}></path>
          <path d="M 46 31 L 54 27 L 54 79 L 46 74 Z" fill={iconColor}></path>
        </g>
        <path d="M 59 15 L 68 20 L 68 62 L 59 67 Z" fill={iconColor}></path>
        <path d="M 76 20 L 85 15 L 85 67 L 76 62 Z" fill={iconColor}></path>
        <path d="M 68 38 L 76 38 L 76 45 L 68 45 Z" fill={iconColor}></path>
        <g transform="translate(45, 34) rotate(30)" fill={iconColor}>
          <path d="M 0 -18 L 2.5 -5 L 15 -3 L 15 0 L 2.5 1 L 2 13 L 7 16 L 7 19 L 0 16.5 L -7 19 L -7 16 L -2 13 L -2.5 1 L -15 0 L -15 -3 L -2.5 -5 Z"></path>
        </g>
      </g>
      <text x="98" y="33" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="800" fontSize="21.5" fill={textColor} letterSpacing="1.2">HEAVEN</text>
      <text x="98" y="53" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="800" fontSize="16.5" fill={textColor} letterSpacing="2.8">HOLIDAYS</text>
      <g fill={textColor}>
        <path d="M 200 24 C 202 22, 206 17, 209 13 L 216 13 L 216 48 L 220 48 L 220 53 L 204 53 L 204 48 L 208 48 L 208 21 L 200 24 Z"></path>
        <path d="M 218 24 C 220 22, 224 17, 227 13 L 234 13 L 234 48 L 238 48 L 238 53 L 222 53 L 222 48 L 226 48 L 226 21 L 218 24 Z"></path>
      </g>
      <path d="M 12 72 C 90 102, 190 85, 245 48" fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.5"></path>
      <g transform="translate(245, 48) rotate(45) scale(0.4)" fill={accentColor} filter={`url(#${glowId})`}>
        <path d="M 0 -15 L 2 -4 L 12 -2 L 12 0 L 2 1 L 1.5 10 L 5 12 L 5 14 L 0 12 L -5 14 L -5 12 L -1.5 10 L -2 1 L -12 0 L -12 -2 L -2 -4 Z"></path>
      </g>
      <text x="238" y="71" fontFamily="'Georgia', 'Times New Roman', serif" fontStyle="italic" fontSize="12.5" fill={textColor} textAnchor="end">Experience the World</text>
    </svg>
  );
};
