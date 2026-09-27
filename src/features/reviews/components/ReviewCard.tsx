import { ArrowRight, Clock } from 'lucide-react';
import type { Review } from '@/types';

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]">
      <a href="#reviews" className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={review.image}
          alt={review.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
            {review.category}
          </span>
        </div>
      </a>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          <span>{review.date}</span>
          <span>·</span>
          <span>{review.readTime}</span>
        </div>
        <h3 className="mt-2 font-display text-lg font-bold leading-snug text-foreground">
          <a href="#reviews" className="transition-colors hover:text-accent-foreground">
            {review.title}
          </a>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {review.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">
              {review.author.split(' ').map((n) => n[0]).join('')}
            </span>
            <div className="text-xs">
              <p className="font-semibold text-foreground">{review.author}</p>
              <p className="text-muted-foreground">{review.authorRole}</p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>
      </div>
    </article>
  );
}
