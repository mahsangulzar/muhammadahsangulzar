import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0'

/** Shared call-to-action styles for links and buttons. */
export function cta(variant: 'primary' | 'ghost' | 'teal' = 'primary', className?: string) {
  return cn(
    base,
    variant === 'primary' &&
      'bg-gradient-to-r from-electric to-[oklch(0.6_0.2_265)] text-white shadow-[0_10px_30px_-10px_var(--electric)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_var(--electric)]',
    variant === 'ghost' &&
      'border border-white/15 bg-white/5 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-electric/60 hover:bg-white/10',
    variant === 'teal' &&
      'bg-navy-900 text-white hover:-translate-y-0.5 hover:bg-navy-800 focus-visible:ring-offset-white',
    className,
  )
}
