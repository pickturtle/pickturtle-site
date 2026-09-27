import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/Container';

export function NewsletterCTA() {
  return (
    <section id="newsletter" className="py-14 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-border bg-foreground text-background">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:gap-12 lg:p-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-background/60">
                A smarter inbox
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                Good tech advice,
                <br />
                <span className="text-accent-foreground">once a week.</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-background/70">
                Join 120,000+ people getting our best picks, useful guides, and deals worth knowing about.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="h-12 flex-1 rounded-full border border-background/20 bg-background/10 px-5 text-base text-background placeholder:text-background/40 focus:border-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent-foreground/40"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent-foreground px-6 font-semibold text-foreground transition-all hover:opacity-90"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-3 text-sm text-background/50">
                Thoughtful recommendations. No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
