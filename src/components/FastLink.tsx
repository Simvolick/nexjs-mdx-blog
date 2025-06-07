import Link from 'next/link';
import { ReactNode } from 'react';

interface FastLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const FastLink: React.FC<FastLinkProps> = ({ 
  href, 
  children, 
  className,
}) => {
  
  return (
    <Link 
      href={href} 
      className={className}
      prefetch={false} // Disable prefetch to prevent RSC payload issues
    >
      {children}
    </Link>
  );
};

export default FastLink; 