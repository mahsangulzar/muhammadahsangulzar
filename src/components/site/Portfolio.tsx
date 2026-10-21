import { useState } from 'react'
import { portfolioCategories, projects, type PortfolioCategory } from '@/content/site'
import { cdn, cdnSrcSet } from '@/lib/img'
import { cn } from '@/lib/utils'
import { SectionHeading, reveal } from './primitives'

type Filter = 'All' | PortfolioCategory

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          id="portfolio-title"
          eyebrow="Portfolio & Case Studies"
          title={
            <>
              Work across <span className="text-gradient">marketing and revenue cycle</span>
            </>
          }
          intro="A look at the kinds of engagements I deliver. Projects marked “Demonstration” illustrate approach and deliverables; verified client case studies will be added here."
        />

        <div role="group" aria-label="Filter projects by category" className="mt-12 flex flex-wrap justify-center gap-2" {...reveal()}>
          {(['All', ...portfolioCategories] as Filter[]).map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={filter === cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none',
                filter === cat
                  ? 'border-electric bg-electric text-white shadow-[0_8px_24px_-10px_var(--electric)]'
                  : 'border-white/10 bg-white/5 text-muted-foreground hover:border-white/25 hover:text-white',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visible.map((project) => (
            <li
              key={project.title}
              className="group glass animate-in fade-in-0 zoom-in-95 overflow-hidden rounded-3xl duration-500 motion-reduce:animate-none"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cdn(project.image, 640, 440)}
                  srcSet={cdnSrcSet(project.image, [400, 640, 900], 0.6875)}
                  sizes="(min-width: 1024px) 24rem, (min-width: 640px) 46vw, 92vw"
                  width={640}
                  height={440}
                  loading="lazy"
                  decoding="async"
                  alt={project.imageAlt}
                  className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-navy-950/70 px-3 py-1 text-[11px] font-semibold text-electric-soft backdrop-blur">
                    {project.category}
                  </span>
                  {project.demo && (
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                      Demonstration
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Focus areas">
                  {project.focus.map((f) => (
                    <li key={f} className="rounded-md bg-electric/10 px-2 py-1 text-[11px] font-medium text-electric-soft">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
