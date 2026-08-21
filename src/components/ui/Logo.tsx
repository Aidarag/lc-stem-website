import Link from 'next/link';
import { Atom } from 'lucide-react';
import logoDark from '../../../public/images/lc-stem-logo-dark.png';
import logoLight from '../../../public/images/lc-stem-logo-light.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'light', size = 'md' }: LogoProps) {
  const isDark = variant === 'dark';
  const logoImg = isDark ? logoDark : logoLight;

  const heightClasses = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-22',
  };

  const iconContainerSizes = {
    sm: 'h-6 w-6 rounded-md',
    md: 'h-8 w-8 rounded-lg',
    lg: 'h-10 w-10 rounded-xl',
  };

  const iconSizes = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4.5 w-4.5',
    lg: 'h-5.5 w-5.5',
  };

  return (
    <Link href="/" className="group inline-flex items-center gap-2 select-none cursor-pointer">
      {/* Sleek Minimalist Icon Badge next to the brand logo */}
      <div className={`flex ${iconContainerSizes[size]} items-center justify-center ${
        isDark 
          ? 'bg-purple-600 text-[#e3fc51] shadow-md border border-purple-400/30' 
          : 'bg-purple-600 text-white shadow-sm'
      } transition-transform duration-200 group-hover:scale-105 shrink-0`}>
        <Atom className={`${iconSizes[size]} stroke-[2.2]`} />
      </div>

      <div className="relative flex items-center justify-start py-1">
        <img
          src={logoImg.src}
          alt="LC STEM Logo"
          className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]`}
        />
      </div>
    </Link>
  );
}
