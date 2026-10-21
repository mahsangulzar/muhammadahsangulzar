import { BriefcaseMedical, Megaphone } from 'lucide-react'
import { skillGroups } from '@/content/site'
import { cn } from '@/lib/utils'
import { SectionHeading, reveal } from './primitives'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills & Expertise"
          title={
            <>
              The toolkit behind <span className="text-gradient">the results-focused work</span>
            </>
          }
          intro="Core capabilities across both disciplines, built through 15 years of hands-on professional experience."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, gi) => {
            const Icon = group.tone === 'electric' ? Megaphone : BriefcaseMedical
            const teal = group.tone === 'teal'
            return (
              <div key={group.title} className="glass rounded-3xl p-6 sm:p-8" {...reveal(gi * 120)}>
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      'grid size-12 place-items-center rounded-2xl ring-1',
                      teal ? 'bg-teal/15 text-teal ring-teal/30' : 'bg-electric/15 text-electric-soft ring-electric/30',
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
                    <p className="text-sm text-muted-foreground">{group.skills.length} core skills</p>
                  </div>
                </div>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {group.skills.map((skill, i) => (
                    <li
                      key={skill.name}
                      {...reveal(gi * 120 + i * 40)}
                      className={cn(
                        'group flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3.5 text-sm font-medium text-foreground transition-colors duration-300 motion-reduce:transition-none',
                        teal ? 'hover:border-teal/40 hover:bg-teal/10' : 'hover:border-electric/40 hover:bg-electric/10',
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span aria-hidden="true" className={cn('size-2 rounded-full', teal ? 'bg-teal' : 'bg-electric')} />
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="flex gap-1" role="img" aria-label={`Proficiency ${skill.level} of 5`}>
                          {[1, 2, 3, 4, 5].map((n) => (
                            <span
                              key={n}
                              className={cn(
                                'h-1.5 w-3 rounded-full',
                                n <= (skill.level ?? 0) ? (teal ? 'bg-teal' : 'bg-electric') : 'bg-white/15',
                              )}
                            />
                          ))}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
