import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'lead' | 'small' | 'muted';
  children: React.ReactNode;
  className?: string;
  /** When true, applies the brand heading color (solid; gradients removed). */
  gradient?: boolean;
}

const Typography: React.FC<TypographyProps> = ({ 
  variant, 
  children, 
  className,
  gradient = false,
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

  const brandHeadingColor = gradient ? 'text-amber-900' : '';

  const Component = variant.startsWith('h') ? variant as keyof JSX.IntrinsicElements : 'p';

  return (
    <Component 
      className={cn(baseStyles[variant], brandHeadingColor, className)}
    >
      {children}
    </Component>
  );
};

export default Typography;
