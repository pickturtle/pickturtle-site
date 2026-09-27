import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { Rating } from '@/components/Rating';
import type { Product } from '@/types';

export function ReviewSummary({ product }: { product: Product }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">Review summary</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Based on {product.reviewCount.toLocaleString()} verified reviews
          </p>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-4xl font-extrabold text-foreground">
            {product.score.toFixed(1)}
          </span>
          <span className="text-sm text-muted-foreground">/ 10</span>
        </div>
      </div>

      <div className="mt-5">
        <Rating value={product.rating} count={product.reviewCount} size="md" showCount />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-accent/30 p-4">
          <div className="flex items-center gap-2">
            <ThumbsUp className="h-4 w-4 text-green-500" />
            <h4 className="text-sm font-bold text-foreground">What we liked</h4>
          </div>
          <ul className="mt-3 space-y-2">
            {product.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-green-500" />
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-destructive/5 p-4">
          <div className="flex items-center gap-2">
            <ThumbsDown className="h-4 w-4 text-destructive" />
            <h4 className="text-sm font-bold text-foreground">What to consider</h4>
          </div>
          <ul className="mt-3 space-y-2">
            {product.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-destructive" />
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-secondary p-4">
        <h4 className="text-sm font-bold text-foreground">Our verdict</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{product.verdict}</p>
      </div>
    </div>
  );
}
