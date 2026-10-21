import { ArrowRight, HeartPulse } from "lucide-react";
import { billingPillars, billingServices, rcmSteps } from "@/content/site";
import { cdn, cdnSrcSet } from "@/lib/img";
import { cta } from "./cta";
import { serviceIcons } from "./icons";
import { SectionHeading, reveal } from "./primitives";

/** Light, healthcare-styled section: white, navy, and teal. */
export function BillingServices() {
  return (
    <section
      id="medical-billing"
      aria-labelledby="billing-title"
      className="relative overflow-hidden bg-white py-24 text-navy-900 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 size-[28rem] rounded-full bg-teal-soft blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-40 size-[24rem] rounded-full bg-[oklch(0.95_0.03_250)] blur-3xl"
      />
      <div className="relative mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          id="billing-title"
          light
          tone="teal"
          eyebrow="Medical Billing Services"
          title={
            <>
              Medical Billing &{" "}
              <span className="text-teal">Revenue Cycle Management</span>{" "}
              Solutions
            </>
          }
          intro="Healthcare providers do their best work when the business side runs smoothly. I support billing teams with organized workflows, careful documentation, and steady follow-up across the revenue cycle."
        />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="relative" {...reveal()}>
            <img
              src={cdn("/img/medical-billing.jpg", 760, 570)}
              srcSet={cdnSrcSet(
                "/img/medical-billing.jpg",
                [480, 760, 1100],
                0.75,
              )}
              sizes="(min-width: 1024px) 38vw, 92vw"
              width={1200}
              height={896}
              loading="lazy"
              decoding="async"
              alt="Bright healthcare administration desk with a laptop, organized folders, and a stethoscope"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[0_30px_60px_-30px_oklch(0.3_0.08_262/0.5)]"
            />
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl">
              <span className="grid size-10 place-items-center rounded-xl bg-teal-soft text-teal">
                <HeartPulse className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-navy-900">
                Healthcare-focused workflows
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h3
              className="font-display text-2xl font-semibold text-navy-900"
              {...reveal()}
            >
              How better workflows improve operational performance
            </h3>
            {billingPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
                {...reveal(i * 100)}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-navy-900 font-display text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-navy-900">{pillar.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ol
          className="mt-20 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          aria-label="Revenue cycle workflow"
          {...reveal()}
        >
          {rcmSteps.map((step, i) => (
            <li key={step} className="flex items-center gap-2 sm:gap-3">
              <span className="rounded-full border border-teal/30 bg-teal-soft px-4 py-2 text-xs font-semibold text-navy-800 sm:text-sm">
                {step}
              </span>
              {i < rcmSteps.length - 1 && (
                <ArrowRight className="size-4 text-teal" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {billingServices.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <li
                key={service.title}
                {...reveal((i % 4) * 80)}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_-20px_oklch(0.3_0.08_262/0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:border-teal/50 hover:shadow-[0_24px_50px_-24px_oklch(0.4_0.1_200/0.45)] motion-reduce:transition-none"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-teal to-navy-700 transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
                />
                <span className="grid size-12 place-items-center rounded-2xl bg-teal-soft text-teal transition-colors duration-500 group-hover:bg-teal group-hover:text-white motion-reduce:transition-none">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>

        <div
          className="mt-14 flex flex-col items-center gap-4 text-center"
          {...reveal()}
        >
          <a href="#contact" className={cta("teal")}>
            Discuss Your Billing Workflow
          </a>
          <p className="max-w-2xl text-xs leading-relaxed text-slate-500">
            Services describe workflow and operational support. Outcomes depend
            on each practice&apos;s processes, payers, and documentation; no
            specific results are guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
