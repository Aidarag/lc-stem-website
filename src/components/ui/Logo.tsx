import Link from 'next/link';
import Image from 'next/image';
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

  return (
    <Link href="/" className="group inline-flex items-center select-none cursor-pointer">
      <div className="relative flex items-center justify-start py-1">
        <Image
          src={logoImg}
          alt="LC STEM Logo"
          className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]`}
        />
      </div>
    </Link>
  );
}
