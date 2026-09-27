import { ArrowRight, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { Rating } from "@/components/Rating";
import { PriceDisplay } from "@/components/PriceDisplay";
import { Badge } from "@/components/Badge";
import type { Product } from "@/types";
import { Link } from "react-router-dom";

const toneClasses: Record<string, string> = {
  green: "bg-accent text-accent-foreground",
  blue: "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  amber: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <div className="absolute left-3 top-3">
            <Badge
              variant={product.badgeTone ?? "default"}
              className={cn(
                "shadow-sm",
                toneClasses[product.badgeTone ?? "default"],
              )}
            >
              <Award className="h-3 w-3" />
              {product.badge}
            </Badge>
          </div>
        )}
        {product.recommended && (
          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background shadow-sm">
            <Award className="h-4 w-4" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {product.brand}
          </span>
          <span className="text-xs text-muted-foreground">
            {product.category}
          </span>
        </div>
        <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-foreground">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.summary}
        </p>

        <div className="mt-3">
          <Rating
            value={product.rating}
            count={product.reviewCount}
            size="sm"
          />
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <PriceDisplay value={product.price} size="sm" />
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-accent-foreground"
          >
            See details
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
