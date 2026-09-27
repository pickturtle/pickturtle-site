import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';

export function Section({
  children,
  className,
  containerSize,
  spacing = 'default',
}: {
  children: ReactNode;
  className?: string;
  containerSize?: 'default' | 'wide' | 'narrow';
  spacing?: 'default' | 'tight' | 'loose' | 'none';
}) {
  const pad =
    spacing === 'none'
      ? ''
      : spacing === 'tight'
        ? 'py-10 sm:py-12'
        : spacing === 'loose'
          ? 'py-20 sm:py-28'
          : 'py-14 sm:py-20';

  return (
    <section className={cn(pad, className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
