import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'lead' | 'small' | 'muted';
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

const Typography: React.FC<TypographyProps> = ({ 
  variant, 
  children, 
  className,
  gradient = false 
}) => {
  const baseStyles = {
    h1: 'text-4xl md:text-5xl font-bold leading-tight',
    h2: 'text-3xl font-bold leading-tight',
    h3: 'text-2xl font-bold leading-tight',
    h4: 'text-xl font-semibold leading-tight',
    body: 'text-lg leading-relaxed',
    lead: 'text-xl leading-relaxed',
    small: 'text-sm leading-normal',
    muted: 'text-gray-600 leading-normal'
  };

  const gradientStyle = gradient 
    ? 'bg-gradient-to-r from-amber-700 to-green-600 text-transparent bg-clip-text'
    : '';

  const Component = variant.startsWith('h') ? variant as keyof JSX.IntrinsicElements : 'p';

  return (
    <Component 
      className={cn(baseStyles[variant], gradientStyle, className)}
    >
      {children}
    </Component>
  );
};

export default Typography;