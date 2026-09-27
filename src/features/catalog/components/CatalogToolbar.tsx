import { Search, ChevronDown } from 'lucide-react';
import type { Category } from '@/types';

export type CatalogFilters = {
  search: string;
  category: string;
  sort: 'popular' | 'price-asc' | 'price-desc' | 'rating';
};

type CatalogToolbarProps = {
  filters: CatalogFilters;
  categories: Category[];
  onChange: (filters: CatalogFilters) => void;
};

export function CatalogToolbar({ filters, categories, onChange }: CatalogToolbarProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filters, search: e.target.value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...filters, category: e.target.value });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...filters, sort: e.target.value as CatalogFilters['sort'] });
  };

  const inputClasses = "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <label htmlFor="catalog-search" className="sr-only">Search products</label>
          <Search 
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" 
            aria-hidden="true" 
          />
          <input
            id="catalog-search"
            type="search"
            placeholder="Search products..."
            value={filters.search}
            onChange={handleSearchChange}
            className={`${inputClasses} w-full pl-10`}
          />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <label htmlFor="catalog-category" className="sr-only">Filter by category</label>
          <select
            id="catalog-category"
            value={filters.category}
            onChange={handleCategoryChange}
            className={`${inputClasses} appearance-none pr-10`}
          >
            <option value="all">All categories</option>
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
          <ChevronDown 
            className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none text-muted-foreground" 
            aria-hidden="true" 
          />
        </div>
      </div>

      {/* Sort */}
      <div className="relative">
        <label htmlFor="catalog-sort" className="sr-only">Sort products</label>
        <select
          id="catalog-sort"
          value={filters.sort}
          onChange={handleSortChange}
          className={`${inputClasses} appearance-none pr-10`}
        >
          <option value="popular">Most popular</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest rated</option>
        </select>
        <ChevronDown 
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none text-muted-foreground" 
          aria-hidden="true" 
        />
      </div>
    </div>
  );
}
