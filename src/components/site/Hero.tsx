import { useEffect, useRef } from 'react'
import { ArrowRight, Stethoscope, TrendingUp } from 'lucide-react'
import { profile, stats } from '@/content/site'
import { cdn, cdnSrcSet } from '@/lib/img'
import { cta } from './cta'
import { Counter } from './primitives'

const lineOne = ['Driving', 'Digital', 'Growth.']
const lineTwo = ['Delivering', 'Smarter', 'Healthcare', 'Revenue', 'Solutions.']

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  // Gentle parallax on the background layer; skipped for reduced motion.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900)
        if (bgRef.current) bgRef.current.style.transform = `translate3d(0, ${y * 0.3}px, 0) scale(1.08)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
      <div ref={bgRef} aria-hidden="true" className="absolute inset-0 -z-20 scale-[1.08] will-change-transform">
        <img
          src={cdn('/img/hero-bg.jpg', 1600)}
          srcSet={cdnSrcSet('/img/hero-bg.jpg', [800, 1200, 1600, 2000])}
          sizes="100vw"
          alt=""
          className="size-full object-cover opacity-55"
        />
      </div>
      <div aria-hidden="true" className="hero-glow absolute inset-0 -z-10 opacity-80" />
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-navy-950" />

      <div className="mx-auto grid max-w-content items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <p className="word-rise inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-electric-soft uppercase backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-electric opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-electric" />
            </span>
            {profile.yearsExperience} Years of Professional Experience
          </p>

          <h1 id="hero-title" className="mt-7 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl xl:text-[4.1rem]">
            <span className="block">
              {lineOne.map((word, i) => (
                <span key={word} className="word-rise mr-[0.25em]" style={{ animationDelay: `${120 + i * 90}ms` }}>
                  {word}
                </span>
              ))}
            </span>
            <span className="mt-1 block">
              {lineTwo.map((word, i) => (
                <span key={word} className="word-rise text-gradient mr-[0.25em]" style={{ animationDelay: `${420 + i * 90}ms` }}>
                  {word}
                </span>
              ))}
            </span>
          </h1>

          <p className="word-rise mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg" style={{ animationDelay: '900ms' }}>
            Hi, I&apos;m <strong className="font-semibold text-white">{profile.name}</strong>, a Digital Marketing Strategist and
            Medical Billing Specialist with 15 years of professional experience. I help businesses strengthen their online
            presence, attract qualified leads, improve marketing performance, and streamline medical billing operations.
          </p>

          <div className="word-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '1050ms' }}>
            <a href="#services" className={cta('primary', 'group')}>
              Explore My Services
              <ArrowRight className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
            </a>
            <a href="#contact" className={cta('ghost')}>
              Let&apos;s Work Together
            </a>
          </div>

          <dl className="word-rise mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8" style={{ animationDelay: '1200ms' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="word-rise relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: '300ms' }}>
          <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-electric/40 via-transparent to-teal/30 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.02] p-2.5 shadow-2xl backdrop-blur">
            <img
              src={cdn('/img/portrait.jpg', 640, 795)}
              srcSet={cdnSrcSet('/img/portrait.jpg', [400, 640, 900], 1.242)}
              sizes="(min-width: 1024px) 34vw, 90vw"
              width={928}
              height={1152}
              alt={`Portrait of ${profile.name} working at a laptop`}
              fetchPriority="high"
              className="aspect-[928/1152] w-full rounded-[1.6rem] object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-navy-950/70 p-4 backdrop-blur-md">
              <p className="font-display text-base font-semibold text-white">{profile.name}</p>
              <p className="text-sm text-muted-foreground">{profile.title}</p>
            </div>
          </div>

          <div className="glass absolute top-10 -left-4 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex lg:-left-10">
            <span className="grid size-9 place-items-center rounded-xl bg-electric/20 text-electric-soft">
              <TrendingUp className="size-4" />
            </span>
            <span className="text-sm font-semibold text-white">Digital Growth</span>
          </div>
          <div className="glass absolute top-1/2 -right-4 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex lg:-right-8">
            <span className="grid size-9 place-items-center rounded-xl bg-teal/20 text-teal">
              <Stethoscope className="size-4" />
            </span>
            <span className="text-sm font-semibold text-white">Revenue Cycle</span>
          </div>
        </div>
      </div>
    </section>
  )
}
