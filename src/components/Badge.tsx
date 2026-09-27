import { cn } from '@/lib/utils';

export function Badge({
  children,
  variant = 'default',
  className,
}: {
  children: React.ReactNode;
  variant?: 'default' | 'green' | 'blue' | 'amber' | 'outline' | 'ghost';
  className?: string;
}) {
  const styles: Record<string, string> = {
    default: 'bg-secondary text-secondary-foreground',
    green: 'bg-accent text-accent-foreground',
    blue: 'bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300',
    amber: 'bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
    outline: 'border border-border text-foreground',
    ghost: 'bg-transparent text-muted-foreground',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold',
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
