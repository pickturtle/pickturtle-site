import { ProductCard } from '@/features/products/components';
import type { Product } from '@/types';

type CatalogGridProps = {
  products: Product[];
  onClear?: () => void;
};

export function CatalogGrid({ products, onClear }: CatalogGridProps) {
  if (products.length === 0) {
    return (
      <div 
        role="status" 
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <p className="text-lg text-muted-foreground">
          No products found matching your criteria.
        </p>
        {onClear && (
          <button
            onClick={onClear}
            aria-label="Clear all filters"
            className="mt-4 rounded-full border border-border bg-card px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Clear filters
          </button>
        )}
      </div>
    );
  }

  return (
    <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product.slug} role="listitem">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
