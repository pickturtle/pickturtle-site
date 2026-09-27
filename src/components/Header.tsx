import { useEffect, useState } from 'react';
import { ArrowRight, Menu, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Container } from '@/components/Container';

const navLinks = [
  { label: 'Find products', href: '#product' },
  { label: 'Categories', href: '#category' },
  { label: 'Reviews', href: '#review' },
  { label: 'Compare', href: '#compare' },
  { label: 'About', href: '#about' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-lg supports-[backdrop-filter]:bg-background/70'
          : 'border-b border-transparent bg-background',
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden -ml-1 inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground hover:bg-secondary"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <a href="#top" aria-label="PickTurtle home">
              <Logo />
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen((p) => !p)}
              aria-label="Search"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-foreground/30 hover:bg-secondary"
            >
              <Search className="h-4 w-4" />
            </button>
            <ThemeToggle />
            <a
              href="#newsletter"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all hover:opacity-90"
            >
              Get recommendations
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </Container>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-lg">
          <Container>
            <div className="flex items-center gap-3 py-3">
              <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
              <input
                autoFocus
                placeholder="Search products, categories, and guides…"
                className="flex-1 bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setSearchOpen(false);
                }}
              />
              <kbd className="hidden sm:inline-flex shrink-0 items-center rounded border border-border px-1.5 py-0.5 text-xs text-muted-foreground">
                ESC
              </kbd>
              <button
                onClick={() => setSearchOpen(false)}
                className="lg:hidden inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </Container>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-background shadow-xl flex flex-col">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Logo />
              <button
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground hover:bg-secondary"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto border-t border-border p-4">
              <a
                href="#newsletter"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-semibold text-background"
              >
                Get recommendations
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
