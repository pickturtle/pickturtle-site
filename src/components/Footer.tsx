import { Logo } from '@/components/Logo';
import { Container } from '@/components/Container';

const footerSections = [
  {
    title: 'Explore',
    links: ['Products', 'Categories', 'Reviews', 'Comparisons', 'Deals'],
  },
  {
    title: 'Company',
    links: ['About us', 'Our process', 'Editorial guidelines', 'Contact', 'Careers'],
  },
  {
    title: 'Follow along',
    links: ['Newsletter', 'Instagram', 'YouTube', 'TikTok', 'X / Twitter'],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-14 sm:grid-cols-3 lg:grid-cols-4 lg:py-16">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Better choices for the tech in your life. Independent reviews and comparisons you can trust.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-display text-sm font-bold text-foreground">{section.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">© 2024 PickTurtle, Inc.</p>
          <p className="text-sm text-muted-foreground">Made for better decisions.</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Affiliate disclosure</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
