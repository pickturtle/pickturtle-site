import { ArrowRight, Filter, Grid3x3, List } from 'lucide-react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/features/products/components';
import { products, categories } from '@/data/mock-data';

export function CategoryPage() {
  const category = categories[0]; // Laptops
  const categoryProducts = products.filter((p) => p.categorySlug === category.slug);

  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={category.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        </div>
        <Container>
          <div className="relative py-12 sm:py-16">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '#top' },
                { label: 'Categories', href: '#categories' },
                { label: category.name },
              ]}
              className="mb-6"
            />
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {category.name}
            </h1>
            <p className="mt-3 max-w-xl text-lg text-muted-foreground">{category.description}</p>
            <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{category.productCount} products</span>
              <span>·</span>
              <span>Updated weekly</span>
              <span>·</span>
              <span>184 reviews</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Toolbar */}
      <Section spacing="tight">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
              <Filter className="h-4 w-4" />
              Filters
            </button>
            <div className="hidden gap-1 rounded-full border border-border bg-card p-1 sm:flex">
              <button className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-foreground">
                All
              </button>
              <button className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
                Top rated
              </button>
              <button className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
                Best value
              </button>
              <button className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
                New
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by</span>
            <select className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground focus:outline-none">
              <option>Most popular</option>
              <option>Highest rated</option>
              <option>Price: low to high</option>
              <option>Price: high to low</option>
            </select>
            <div className="hidden gap-1 rounded-full border border-border bg-card p-1 sm:flex">
              <button className="rounded-full bg-secondary p-1.5 text-foreground">
                <Grid3x3 className="h-4 w-4" />
              </button>
              <button className="rounded-full p-1.5 text-muted-foreground hover:text-foreground">
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Product grid */}
      <Section spacing="tight">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* Load more */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
            Load more products
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-sm text-muted-foreground">
            Showing {categoryProducts.length} of {category.productCount} products
          </p>
        </div>
      </Section>
    </>
  );
}
