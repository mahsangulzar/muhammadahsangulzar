import { marketingServices } from '@/content/site'
import { serviceIcons } from './icons'
import { SectionHeading, reveal } from './primitives'

export function MarketingServices() {
  return (
    <section id="services" aria-labelledby="marketing-title" className="relative py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
      <div aria-hidden="true" className="absolute top-40 left-1/2 -z-10 h-80 w-[60rem] max-w-full -translate-x-1/2 rounded-full bg-electric/10 blur-3xl" />
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          id="marketing-title"
          eyebrow="Digital Marketing Services"
          title={
            <>
              Digital Marketing That Drives <span className="text-gradient">Measurable Growth</span>
            </>
          }
          intro="Strategy, execution, and measurement working together — so every channel supports the next and every decision is grounded in data."
        />
        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {marketingServices.map((service, i) => {
            const Icon = serviceIcons[service.icon]
            return (
              <li
                key={service.title}
                {...reveal((i % 4) * 80)}
                className="group glass relative flex flex-col overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-electric/40 motion-reduce:transition-none"
              >
                <div aria-hidden="true" className="absolute -top-16 -right-16 size-40 rounded-full bg-electric/0 blur-2xl transition-colors duration-500 group-hover:bg-electric/25" />
                <span className="relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-electric/30 to-electric/5 text-electric-soft ring-1 ring-electric/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg] motion-reduce:transition-none">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span aria-hidden="true" className="absolute top-6 right-6 font-display text-xs font-semibold text-white/25">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="relative mt-6 font-display text-lg font-semibold text-white">{service.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="relative mt-5 flex flex-wrap gap-1.5 pt-1" aria-label={`${service.title} includes`}>
                  {service.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-foreground/85">
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
