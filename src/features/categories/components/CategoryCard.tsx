import { ArrowRight, Camera, Home, Headphones, Laptop, Smartphone, Watch } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Category } from '@/types';

const iconMap: Record<string, LucideIcon> = {
  laptop: Laptop,
  smartphone: Smartphone,
  headphones: Headphones,
  camera: Camera,
  watch: Watch,
  home: Home,
};

export function CategoryCard({ category }: { category: Category }) {
  const Icon = iconMap[category.icon] ?? Laptop;

  return (
    <a
      href="#products"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-background/90 text-foreground backdrop-blur-sm">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-foreground">{category.name}</h3>
          <span className="shrink-0 text-xs font-medium text-muted-foreground">
            {category.productCount} products
          </span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>
        <div className="mt-auto flex items-center gap-1 pt-4 text-sm font-semibold text-foreground transition-colors group-hover:text-accent-foreground">
          Browse {category.name}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
  );
}
