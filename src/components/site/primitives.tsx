import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Reveals every `[data-reveal]` element as it scrolls into view. Mounted once
 * on the page; content stays visible when JavaScript is unavailable.
 */
export function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }
    root.classList.add('js-ready')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])
}

/** Props that opt an element into the scroll reveal, with an optional stagger. */
export function reveal(delay = 0) {
  return {
    'data-reveal': '',
    style: { '--reveal-delay': `${delay}ms` } as React.CSSProperties,
  }
}

export function Eyebrow({ children, tone = 'electric' }: { children: React.ReactNode; tone?: 'electric' | 'teal' }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold tracking-[0.18em] uppercase',
        tone === 'electric'
          ? 'border-electric/30 bg-electric/10 text-electric-soft'
          : 'border-teal/30 bg-teal/10 text-teal',
      )}
    >
      <span className={cn('size-1.5 rounded-full', tone === 'electric' ? 'bg-electric' : 'bg-teal')} />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = 'electric',
  light = false,
  id,
}: {
  eyebrow: string
  title: React.ReactNode
  intro?: React.ReactNode
  tone?: 'electric' | 'teal'
  light?: boolean
  id?: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center" {...reveal()}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={cn(
          'mt-5 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl',
          light ? 'text-navy-900' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed text-pretty sm:text-lg',
            light ? 'text-slate-600' : 'text-muted-foreground',
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}

/** Counts up to `value` the first time it scrolls into view. */
export function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || !('IntersectionObserver' in window)) return
    setDisplay(0)
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const duration = 1400
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}
