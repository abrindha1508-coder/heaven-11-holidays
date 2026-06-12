import React from 'react';
import logoImg from '../assets/heaven11logo.png';

interface LogoProps {
  className?: string;
  iconColor?: string;
  textColor?: string;
  accentColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-11 w-auto",
}) => {
  return (
    <img 
      src={logoImg} 
      alt="Heaven11 Holidays Logo" 
      className={className}
      style={{ display: 'block', objectFit: 'contain' }}
    />
  );
};
