import Link from 'next/link';
import { Atom } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'light', size = 'md' }: LogoProps) {
  const isDark = variant === 'dark';

  const iconContainerSizes = {
    sm: 'h-7 w-7 rounded-md',
    md: 'h-8 w-8 rounded-lg',
    lg: 'h-10 w-10 rounded-xl',
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <Link href="/" className="group inline-flex items-center gap-2.5 select-none">
      {/* Sleek Minimalist Icon Badge */}
      <div className={`flex ${iconContainerSizes[size]} items-center justify-center ${
        isDark 
          ? 'bg-purple-600 text-white shadow-md border border-purple-400/30' 
          : 'bg-purple-600 text-white shadow-sm'
      } transition-transform duration-200 group-hover:scale-105 shrink-0`}>
        <Atom className={`${iconSizes[size]} stroke-[2.2]`} />
      </div>

      {/* Clean Single-Line Typography */}
      <div className={`font-sans ${textSizes[size]} tracking-tight flex items-center gap-1.5 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        <span className="font-extrabold transition-colors group-hover:text-purple-600">
          Livingstone
        </span>
        <span className="font-bold text-purple-600">
          STEM
        </span>
      </div>
    </Link>
  );
}
