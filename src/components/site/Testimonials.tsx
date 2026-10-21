import { MessageSquareQuote, Quote } from 'lucide-react'
import { placeholderTestimonials, testimonials } from '@/content/site'
import { cta } from './cta'
import { SectionHeading, reveal } from './primitives'

export function Testimonials() {
  // Placeholder cards only appear on the local dev server, never in production.
  const isPlaceholder = testimonials.length === 0
  const items = isPlaceholder ? (import.meta.env.DEV ? placeholderTestimonials : []) : testimonials

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="relative py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-navy-900/60 to-transparent" />
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Testimonials"
          title={
            <>
              What clients <span className="text-gradient">say</span>
            </>
          }
          intro="Feedback from the businesses and teams I have worked with."
        />

        {items.length > 0 ? (
          <ul className="mt-16 grid gap-6 md:grid-cols-3">
            {items.map((t, i) => (
              <li key={i} {...reveal(i * 100)}>
                <figure className="glass relative flex h-full flex-col rounded-3xl p-7">
                  {isPlaceholder && (
                    <span className="absolute top-5 right-5 rounded-full border border-amber-300/40 bg-amber-300/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-amber-200 uppercase">
                      Placeholder
                    </span>
                  )}
                  <Quote className="size-8 text-electric" aria-hidden="true" />
                  <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-electric to-navy-700 font-display text-sm font-semibold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">{t.name}</span>
                      <span className="block text-xs text-muted-foreground">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <div className="glass mx-auto mt-14 flex max-w-2xl flex-col items-center rounded-3xl p-10 text-center" {...reveal()}>
            <span className="grid size-14 place-items-center rounded-2xl bg-electric/15 text-electric-soft ring-1 ring-electric/30">
              <MessageSquareQuote className="size-6" aria-hidden="true" />
            </span>
            <p className="mt-6 font-display text-xl font-semibold text-white">Verified client stories are on their way</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Only genuine, permission-based feedback is published here. Have we worked together? I would be grateful to
              hear about your experience.
            </p>
            <a href="#contact" className={cta('ghost', 'mt-7')}>
              Share Your Feedback
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
