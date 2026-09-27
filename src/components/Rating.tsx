import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Rating({
  value,
  count,
  size = 'sm',
  showCount = true,
  className,
}: {
  value: number;
  count?: number;
  size?: 'xs' | 'sm' | 'md';
  showCount?: boolean;
  className?: string;
}) {
  const dim = size === 'xs' ? 'h-3 w-3' : size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';
  const text = size === 'xs' ? 'text-xs' : size === 'sm' ? 'text-sm' : 'text-base';

  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => {
          const filled = i <= Math.round(value);
          return (
            <Star
              key={i}
              className={cn(
                dim,
                filled
                  ? 'fill-amber-400 text-amber-400'
                  : 'fill-muted text-muted',
              )}
            />
          );
        })}
      </div>
      <span className={cn('font-semibold text-foreground', text)}>{value.toFixed(1)}</span>
      {showCount && count !== undefined && (
        <span className={cn('text-muted-foreground', text)}>
          ({count.toLocaleString()})
        </span>
      )}
    </div>
  );
}
