import { ArrowRight, ExternalLink, ShieldCheck, Truck } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { PriceDisplay } from '@/components/PriceDisplay';
import type { Product } from '@/types';

export function AffiliateCTA({ product }: { product: Product }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <PriceDisplay value={product.price} size="lg" />
          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <Truck className="h-3.5 w-3.5" />
            <span>Free shipping available</span>
            <span>·</span>
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Price-match guaranteed</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-foreground px-6 py-3 font-semibold text-background transition-all hover:opacity-90"
          >
            Check price
            <ExternalLink className="h-4 w-4" />
          </a>
          <p className="text-center text-xs text-muted-foreground">
            Affiliate link · supports our reviews
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
        <Badge variant="green">In stock</Badge>
        <Badge variant="outline">30-day returns</Badge>
        <Badge variant="outline">2-year warranty</Badge>
      </div>

      <a
        href="#compare"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent-foreground"
      >
        Compare with similar products
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
