import { useState, useMemo } from 'react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Skeleton } from '@/components/ui/skeleton';
import { categories } from '@/data/mock-data';
import { 
  CatalogGrid, 
  CatalogToolbar, 
  type CatalogFilters 
} from '@/features/catalog/components';
import { useCatalogProducts } from '@/features/catalog/hooks';

export function CatalogPage() {
  const [retryKey, setRetryKey] = useState(0);
  const { products, loading, error } = useCatalogProducts();
  
  const [filters, setFilters] = useState<CatalogFilters>({
    search: '',
    category: 'all',
    sort: 'popular',
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (filters.search) {
      const query = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.summary.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter((p) => p.categorySlug === filters.category);
    }

    // Sorting
    result.sort((a, b) => {
      switch (filters.sort) {
        case 'popular':
          return b.reviewCount - a.reviewCount;
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return result;
  }, [products, filters]);

  const clearFilters = () => {
    setFilters({
      search: '',
      category: 'all',
      sort: 'popular',
    });
  };

  const handleRetry = () => {
    setRetryKey(prev => prev + 1);
  };

  return (
    <div key={retryKey}>
      <Section spacing="tight">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Catalog' },
          ]}
          className="mb-6"
        />
        
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
          Catalog
        </h1>
        <p className="mt-3 max-w-xl text-lg text-muted-foreground">
          Explore our curated selection of products. Use filters to find exactly what you're looking for.
        </p>
      </Section>

      <Section spacing="tight">
        <CatalogToolbar 
          filters={filters} 
          categories={categories} 
          onChange={setFilters} 
        />
        
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>

        <div className="mt-8">
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="aspect-[4/5] w-full rounded-2xl" />
              ))}
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-lg font-medium text-foreground">Oops! Something went wrong.</p>
              <p className="mt-2 text-muted-foreground">{error.message}</p>
              <button
                onClick={handleRetry}
                className="mt-6 rounded-full bg-foreground px-6 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Try again
              </button>
            </div>
          ) : (
            <CatalogGrid 
              products={filteredProducts} 
              onClear={clearFilters} 
            />
          )}
        </div>
      </Section>
    </div>
  );
}
