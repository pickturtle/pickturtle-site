import { ArrowRight, Check, Heart, Mail, Shield, Target, Users } from 'lucide-react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { stats } from '@/data/mock-data';

const values = [
  {
    icon: Shield,
    title: 'Independent',
    description: 'We buy our own products. No sponsored reviews, no pay-for-placement.',
  },
  {
    icon: Target,
    title: 'Thorough',
    description: 'Every product is tested in real-world conditions over weeks, not hours.',
  },
  {
    icon: Heart,
    title: 'Honest',
    description: 'We tell you what is good and what is not. No hype, no filler.',
  },
  {
    icon: Users,
    title: 'Reader-first',
    description: 'Our job is to help you decide, not to sell you something.',
  },
];

const team = [
  { name: 'Maya Chen', role: 'Senior Reviews Editor', initials: 'MC' },
  { name: 'Alex Rivera', role: 'Audio Specialist', initials: 'AR' },
  { name: 'Jordan Lee', role: 'Camera Reviewer', initials: 'JL' },
  { name: 'Sam Patel', role: 'Wearables Editor', initials: 'SP' },
];

export function AboutPage() {
  return (
    <>
      <Section spacing="tight">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '#top' },
            { label: 'About' },
          ]}
          className="mb-6"
        />
      </Section>

      {/* Hero */}
      <Section spacing="tight">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            About PickTurtle
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            We help you buy tech
            <br />
            <span className="text-accent-foreground">you'll actually love.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            PickTurtle started with a simple frustration: buying tech shouldn't require a degree in
            spec-sheet reading. We cut through the noise, test what matters, and tell you in plain
            English what is worth your money.
          </p>
        </div>
      </Section>

      {/* Stats */}
      <Section spacing="default" className="bg-secondary/30">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]"
            >
              <p className="font-display text-4xl font-extrabold tracking-tight text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section spacing="loose">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            What we stand for
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Four principles that guide every review and recommendation we publish.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">{value.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* How we review */}
      <Section spacing="loose" className="bg-secondary/30">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            How we review
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            A consistent process means you can trust every recommendation.
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {[
            { step: '01', title: 'Research', description: 'We survey the market, read user reviews, and identify the products worth testing.' },
            { step: '02', title: 'Test', description: 'We use each product daily for weeks, running the same benchmarks and real-world tasks.' },
            { step: '03', title: 'Recommend', description: 'We score, summarize, and publish our findings in plain English with clear pros and cons.' },
          ].map((item) => (
            <div key={item.step} className="relative">
              <span className="font-display text-5xl font-extrabold text-accent-foreground/20">
                {item.step}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section spacing="loose">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            The people behind the picks
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            A small team of reviewers who care about getting it right.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-xl font-bold text-foreground">
                {member.initials}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section spacing="loose" className="bg-secondary/30">
        <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)] sm:p-12">
          <Mail className="mx-auto h-10 w-10 text-accent-foreground" />
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground">
            Got a product we should test?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-lg text-muted-foreground">
            We are always looking for the next great product to review. Drop us a line.
          </p>
          <a
            href="#newsletter"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-background transition-all hover:opacity-90"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Section>
    </>
  );
}
