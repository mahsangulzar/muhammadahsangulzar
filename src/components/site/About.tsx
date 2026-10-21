import { Check } from "lucide-react";
import { aboutHighlights, profile } from "@/content/site";
import { cdn, cdnSrcSet } from "@/lib/img";
import { cta } from "./cta";
import { Eyebrow, reveal } from "./primitives";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-content items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="relative" {...reveal()}>
          <div
            aria-hidden="true"
            className="absolute -top-8 -left-8 size-40 rounded-full bg-electric/25 blur-3xl"
          />
          <img
            src={cdn("/img/workspace.jpg", 720, 900)}
            srcSet={cdnSrcSet("/img/workspace.jpg", [480, 720, 1000], 1.25)}
            sizes="(min-width: 1024px) 40vw, 92vw"
            width={928}
            height={1152}
            loading="lazy"
            decoding="async"
            alt="Modern professional workspace at dusk with a laptop and monitor displaying analytics charts"
            className="relative aspect-[4/5] w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl"
          />
          <div className="glass absolute -right-3 -bottom-6 rounded-2xl px-6 py-5 sm:-right-8">
            <p className="font-display text-4xl font-semibold text-white">
              {profile.yearsExperience}
              <span className="text-electric">+</span>
            </p>
            <p className="mt-1 max-w-[10rem] text-sm text-muted-foreground">
              Years across marketing & healthcare revenue
            </p>
          </div>
        </div>

        <div>
          <div {...reveal()}>
            <Eyebrow>About Me</Eyebrow>
            <h2
              id="about-title"
              className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl"
            >
              Two specialized fields.{" "}
              <span className="text-gradient">
                One focus on measurable value.
              </span>
            </h2>
          </div>
          <div
            className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
            {...reveal(100)}
          >
            <p>
              For 15 years, I have worked at the intersection of growth and
              operations. In digital marketing, I build strategies that help
              businesses get found, earn attention, and turn interest into
              qualified leads — through SEO, paid advertising, social media, and
              content that speaks to real customer needs.
            </p>
            <p>
              In medical billing, I bring the same discipline to revenue cycle
              workflows: organized claims processes, careful payment posting,
              consistent follow-up, and reporting that shows where time and
              revenue are being lost. Both fields reward the same habits — clear
              data, steady iteration, and attention to detail.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2" {...reveal(200)}>
            {aboutHighlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3 text-sm text-foreground"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-electric/20 text-electric-soft">
                  <Check className="size-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10" {...reveal(300)}>
            <a href="#contact" className={cta("primary")}>
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
