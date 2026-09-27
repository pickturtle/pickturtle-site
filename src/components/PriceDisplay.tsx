import { cn } from '@/lib/utils';

export function PriceDisplay({
  value,
  currency = 'USD',
  originalPrice,
  className,
  size = 'md',
}: {
  value: number;
  currency?: string;
  originalPrice?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

  const dim = size === 'sm' ? 'text-base' : size === 'md' ? 'text-xl' : 'text-3xl';

  return (
    <div className={cn('flex items-baseline gap-2', className)}>
      <span className={cn('font-display font-bold tracking-tight text-foreground', dim)}>
        {formatted}
      </span>
      {originalPrice && originalPrice > value && (
        <span className="text-sm font-medium text-muted-foreground line-through">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency,
            minimumFractionDigits: 0,
          }).format(originalPrice)}
        </span>
      )}
    </div>
  );
}
