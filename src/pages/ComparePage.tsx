import { ArrowRight, Plus, X } from 'lucide-react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ComparisonTable } from '@/features/comparisons/components';
import { products, comparisonRows } from '@/data/mock-data';

export function ComparePage() {
  const compareProducts = products.slice(0, 3);

  return (
    <>
      <Section spacing="tight">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '#top' },
            { label: 'Compare' },
          ]}
          className="mb-6"
        />
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Compare products
            </h1>
            <p className="mt-3 max-w-xl text-lg text-muted-foreground">
              Put your top picks head-to-head. Specs, scores, and prices in one view.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border border-dashed border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground">
            <Plus className="h-4 w-4" />
            Add product
          </button>
        </div>
      </Section>

      {/* Comparison table */}
      <Section spacing="tight">
        <ComparisonTable products={compareProducts} rows={comparisonRows} />
      </Section>

      {/* Selected products summary */}
      <Section spacing="loose" className="bg-secondary/30">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          Products in this comparison
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {compareProducts.map((product) => (
            <div
              key={product.slug}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
            >
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-secondary">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base font-bold text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.brand}</p>
                <p className="mt-1 font-display text-lg font-bold text-foreground">
                  ${product.price.toLocaleString()}
                </p>
              </div>
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Remove from comparison"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="#newsletter"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
          >
            Get personalized recommendations
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Section>
    </>
  );
}
