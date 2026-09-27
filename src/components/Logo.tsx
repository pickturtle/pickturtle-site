import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center', className)}>
      <img
        src="/pickturtle_logo.png"
        alt="PickTurtle"
        className="h-8 w-auto dark:hidden"
      />
      <img
        src="/pickturtle_logo_darkmode.png"
        alt="PickTurtle"
        className="hidden h-8 w-auto dark:block"
      />
    </span>
  );
}
