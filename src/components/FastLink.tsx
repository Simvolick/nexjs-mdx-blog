'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface FastLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  passHref?: boolean;
}

const FastLink: React.FC<FastLinkProps> = ({ 
  href, 
  children, 
  className, 
  passHref = false 
}) => {
  return (
    <Link 
      href={href} 
      className={className}
      passHref={passHref}
      prefetch={false} // This enables hover prefetching (Next.js 10.0.3+)
    >
      {children}
    </Link>
  );
};

export default FastLink; 