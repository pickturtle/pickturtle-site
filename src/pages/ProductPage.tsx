import { ArrowRight, Check, ExternalLink, ShieldCheck, Truck } from 'lucide-react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/Badge';
import { Rating } from '@/components/Rating';
import { PriceDisplay } from '@/components/PriceDisplay';
import { ProductCard } from '@/features/products/components';
import { ReviewSummary } from '@/features/reviews/components';
import { products } from '@/data/mock-data';

export function ProductPage() {
  const product = products[0]; // MacBook Air M3
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Section spacing="tight">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '#top' },
            { label: product.category, href: '#categories' },
            { label: product.name },
          ]}
          className="mb-6"
        />

        {/* Product header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-3xl border border-border bg-secondary">
            <div className="aspect-square">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Badge variant="green">{product.badge}</Badge>
              <Badge variant="outline">{product.category}</Badge>
            </div>
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {product.name}
            </h1>
            <div className="mt-3">
              <Rating value={product.rating} count={product.reviewCount} size="md" />
            </div>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{product.summary}</p>

            <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <PriceDisplay value={product.price} size="lg" />
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <Truck className="h-3.5 w-3.5" />
                    <span>Free shipping</span>
                    <span>·</span>
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>30-day returns</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-foreground px-6 py-3 font-semibold text-background transition-all hover:opacity-90"
                >
                  Check price
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Affiliate link — we may earn a commission, which supports our independent reviews.
              </p>
            </div>

            {/* Quick specs */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {product.specs.slice(0, 4).map((spec) => (
                <div key={spec.label} className="rounded-xl border border-border bg-card p-3">
                  <p className="text-xs text-muted-foreground">{spec.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Review summary + specs */}
      <Section spacing="tight">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <ReviewSummary product={product} />
          </div>
          <div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-display text-lg font-bold text-foreground">Specifications</h3>
              <dl className="mt-4 divide-y divide-border">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between gap-4 py-3">
                    <dt className="text-sm text-muted-foreground">{spec.label}</dt>
                    <dd className="text-right text-sm font-semibold text-foreground">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* Related products */}
      <Section spacing="loose" className="bg-secondary/30">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Related products
          </h2>
          <a
            href="#products"
            className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-accent-foreground"
          >
            See all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
