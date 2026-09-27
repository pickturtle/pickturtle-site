import { ArrowRight, Clock, Share2 } from 'lucide-react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/Badge';
import { ReviewCard } from '@/features/reviews/components';
import { reviews } from '@/data/mock-data';

export function ReviewPage() {
  const review = reviews[0];

  return (
    <>
      <Section spacing="tight">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '#top' },
            { label: 'Reviews', href: '#reviews' },
            { label: review.category },
          ]}
          className="mb-6"
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <Badge variant="green">{review.category}</Badge>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {review.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-foreground">
                  {review.author.split(' ').map((n) => n[0]).join('')}
                </span>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">{review.author}</p>
                  <p className="text-muted-foreground">{review.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{review.date}</span>
                <span>·</span>
                <span>{review.readTime}</span>
              </div>
            </div>
          </div>
          <div className="flex items-start lg:col-span-4 lg:justify-end">
            <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>
        </div>
      </Section>

      {/* Hero image */}
      <Container>
        <div className="overflow-hidden rounded-3xl border border-border bg-secondary">
          <div className="aspect-[21/9]">
            <img src={review.image} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </Container>

      {/* Body */}
      <Section spacing="default">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <article className="lg:col-span-8">
            <p className="text-xl leading-relaxed text-muted-foreground">{review.excerpt}</p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground">
              <p>
                We spent three months testing these laptops across lectures, essay writing, video
                editing, and late-night study sessions. Each machine was rated on battery life,
                keyboard comfort, display quality, portability, and overall value.
              </p>
              <h2 className="font-display text-2xl font-bold text-foreground">How we tested</h2>
              <p>
                Every laptop ran through the same battery of tasks: a full day of writing, a 4K
                video export, and a simulated commute of web browsing and streaming. We also
                measured real-world battery life rather than relying on manufacturer claims.
              </p>
              <h2 className="font-display text-2xl font-bold text-foreground">Our top picks</h2>
              <p>
                The MacBook Air M3 remains our overall winner for most students, but the Dell XPS 14
                is a strong alternative if you need Windows or want an OLED display. For budget
                buyers, the Acer Swift 3 delivers surprising performance at half the price.
              </p>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-display text-lg font-bold text-foreground">In this review</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {['How we tested', 'Our top picks', 'Best overall', 'Best budget', 'Best for gaming', 'Final verdict'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {/* More reviews */}
      <Section spacing="loose" className="bg-secondary/30">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            More reviews
          </h2>
          <a
            href="#reviews"
            className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-accent-foreground"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(1, 4).map((r) => (
            <ReviewCard key={r.slug} review={r} />
          ))}
        </div>
      </Section>
    </>
  );
}
