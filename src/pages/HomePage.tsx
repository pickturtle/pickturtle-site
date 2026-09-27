import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProductCard } from "@/features/products/components";
import { CategoryCard } from "@/features/categories/components";
import { ReviewCard } from "@/features/reviews/components";
import {
  products,
  categories,
  reviews,
  trendingSearches,
  stats,
} from "@/data/mock-data";
import { useLocation } from "react-router-dom";

export function HomePage() {
  const featured = products.slice(0, 3);
  const recommended = products.filter((p) => p.recommended).slice(0, 4);
  // Use `useLocation` para obter o caminho atual (não precisa de `useState`)
  const location = useLocation();
  return (
    <>
      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-border"
      >
        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-foreground/10 blur-[120px]" />
        <Container>
          <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
            <div className="lg:col-span-7 lg:pt-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-accent-foreground" />
                Product advice, without the noise
              </div>
              <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Find tech you'll
                <br />
                <span className="text-accent-foreground">love to use.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                We test, compare, and explain the products that make everyday
                life a little better. No hype. Just clear recommendations from
                people who care.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-base font-semibold text-background transition-all hover:opacity-90"
                >
                  Explore products
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-semibold text-foreground transition-all hover:border-foreground/30 hover:bg-secondary"
                >
                  How we review
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["MC", "AR", "JL", "SP"].map((init, i) => (
                    <span
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-secondary text-xs font-bold text-foreground"
                    >
                      {init}
                    </span>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Trusted by 120,000+ readers
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Making better buys every month
                  </p>
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-pop)]">
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={featured[0].image}
                      alt={featured[0].name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-foreground px-3 py-1.5 text-xs font-bold text-background">
                      <Zap className="h-3 w-3" fill="currentColor" />
                      Editor's choice
                    </span>
                  </div>
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-pop)] sm:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-2xl font-extrabold text-foreground">
                        2,400+
                      </p>
                      <p className="text-xs text-muted-foreground">
                        products researched
                      </p>
                    </div>
                  </div>
                </div>
                {/* Floating rating card */}
                <div className="absolute -right-4 top-8 hidden rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-pop)] sm:block">
                  <p className="text-xs font-semibold text-muted-foreground">
                    Reader rating
                  </p>
                  <p className="font-display text-xl font-bold text-foreground">
                    4.9 / 5
                  </p>
                  <p className="text-xs text-muted-foreground">12k reviews</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trending ticker */}
      <section className="border-b border-border bg-secondary/30">
        <Container>
          <div className="flex items-center gap-4 overflow-x-auto py-3 no-scrollbar">
            <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
              <BarChart3 className="h-4 w-4 text-accent-foreground" />
              Trending now
            </span>
            {trendingSearches.map((term, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-3 text-sm text-muted-foreground"
              >
                {i > 0 && (
                  <ChevronRight className="h-3 w-3 text-muted-foreground/40" />
                )}
                <a
                  href="#products"
                  className="transition-colors hover:text-foreground"
                >
                  {term}
                </a>
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured products */}
      <Section id="products">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              Curated for you
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Popular right now
            </h2>
          </div>
          <a
            href="#products"
            className="hidden items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-accent-foreground sm:inline-flex"
          >
            See all products
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      {/* Categories */}
      <Section id="categories" className="bg-secondary/30" spacing="loose">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              Explore by category
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              What are you shopping for?
            </h2>
          </div>
          <a
            href="#categories"
            className="hidden items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-accent-foreground sm:inline-flex"
          >
            Browse all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </Section>

      {/* Editorial / approach */}
      <Section id="about" spacing="loose">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              The PickTurtle approach
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
              Less scrolling.
              <br />
              <span className="text-accent-foreground">More confidence.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Buying tech shouldn't feel like a second job. Our team cuts
              through the specs and sponsored noise so you can make a decision
              that feels right.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Independent recommendations",
                "Real-world testing",
                "Plain-English advice",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base font-medium text-foreground">
                    {point}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#about"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent-foreground"
            >
              Meet the team
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <p className="font-display text-4xl font-extrabold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Latest reviews */}
      <Section id="reviews" className="bg-secondary/30" spacing="loose">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              Fresh from the lab
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Latest reviews
            </h2>
          </div>
          <a
            href="#reviews"
            className="hidden items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-accent-foreground sm:inline-flex"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
      </Section>

      {/* Compare banner */}
      <Section id="compare" spacing="loose">
        <div className="overflow-hidden rounded-3xl border border-border bg-foreground p-8 text-background sm:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-background/60">
                Side-by-side, simplified
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                Compare before
                <br />
                <span className="text-accent-foreground">you commit.</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-background/70">
                Put your top picks head-to-head and see what actually separates
                them. Specs, scores, and prices in one view.
              </p>
              <a
                href="#compare"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-foreground px-6 py-3 font-semibold text-foreground transition-all hover:opacity-90"
              >
                Start comparing
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="h-24 w-24 overflow-hidden rounded-2xl border border-background/20 bg-background/10">
                  <img
                    src={featured[0].image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm font-semibold">{featured[0].name}</p>
                <p className="font-display text-2xl font-extrabold text-accent-foreground">
                  9.4
                </p>
              </div>
              <span className="font-display text-xl font-bold text-background/40">
                VS
              </span>
              <div className="flex flex-col items-center gap-3">
                <div className="h-24 w-24 overflow-hidden rounded-2xl border border-background/20 bg-background/10">
                  <img
                    src={featured[1].image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm font-semibold">{featured[1].name}</p>
                <p className="font-display text-2xl font-extrabold text-background/70">
                  9.1
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Recommended */}
      <Section spacing="loose">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              PickTurtle recommends
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Worth your money
            </h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recommended.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>
    </>
  );
}
