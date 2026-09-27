import { Check, Minus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ComparisonRow, Product } from '@/types';

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="h-4 w-4 text-green-500" />
    ) : (
      <X className="h-4 w-4 text-muted-foreground" />
    );
  }
  return <span className="font-medium text-foreground">{value}</span>;
}

export function ComparisonTable({
  products,
  rows,
}: {
  products: Product[];
  rows: ComparisonRow[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
      <table className="w-full min-w-[640px] border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="p-5 text-left text-sm font-semibold text-muted-foreground">
              Feature
            </th>
            {products.map((p) => (
              <th key={p.slug} className="p-5 text-left">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-secondary">
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.brand}</p>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.feature}
              className={cn(
                'border-b border-border last:border-0 transition-colors hover:bg-secondary/50',
                i % 2 === 1 && 'bg-secondary/20',
              )}
            >
              <td className="p-5 text-sm font-medium text-muted-foreground">{row.feature}</td>
              {row.values.map((value, j) => (
                <td key={j} className="p-5 text-sm">
                  <CellValue value={value} />
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="p-5 text-sm font-semibold text-muted-foreground">Price</td>
            {products.map((p) => (
              <td key={p.slug} className="p-5">
                <span className="font-display text-lg font-bold text-foreground">
                  ${p.price.toLocaleString()}
                </span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
