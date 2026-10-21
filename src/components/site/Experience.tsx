import { Briefcase } from 'lucide-react'
import { experience, profile } from '@/content/site'
import { cn } from '@/lib/utils'
import { SectionHeading, reveal } from './primitives'

export function Experience() {
  const hasPlaceholders = experience.some((e) => e.placeholder)

  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          id="experience-title"
          eyebrow={`${profile.yearsExperience} Years of Experience`}
          title={
            <>
              My Professional <span className="text-gradient">Journey</span>
            </>
          }
          intro="Fifteen years spanning digital marketing strategy and medical billing operations — two disciplines connected by data, process, and a focus on results."
        />

        <ol className="relative mx-auto mt-16 max-w-4xl">
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-5 w-px bg-gradient-to-b from-electric via-teal/60 to-transparent md:left-1/2" />
          {experience.map((entry, i) => {
            const right = i % 2 === 1
            return (
              <li key={i} className="relative pb-12 pl-14 last:pb-0 md:grid md:grid-cols-2 md:gap-12 md:pl-0" {...reveal(i * 80)}>
                <span
                  aria-hidden="true"
                  className="absolute top-1 left-5 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-electric/40 bg-navy-900 text-electric-soft shadow-[0_0_0_6px_var(--navy-950)] md:left-1/2"
                >
                  <Briefcase className="size-4" />
                </span>
                <div className={cn(right ? 'md:col-start-2' : 'md:col-start-1 md:text-right')}>
                  <div className="glass rounded-3xl p-6 text-left transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-electric/15 px-3 py-1 text-xs font-semibold text-electric-soft">{entry.period}</span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-muted-foreground">{entry.field}</span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-white">{entry.role}</h3>
                    <p className="text-sm font-medium text-electric-soft">{entry.employer}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {entry.responsibilities.map((r) => (
                        <li key={r} className="flex gap-2">
                          <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-electric" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
        {hasPlaceholders && (
          <p className="mx-auto mt-10 max-w-xl text-center text-xs text-muted-foreground">
            Detailed role history is being updated. Bracketed fields are editable placeholders.
          </p>
        )}
      </div>
    </section>
  )
}
