import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navItems, profile } from '@/content/site'
import { cn } from '@/lib/utils'
import { cta } from './cta'

export function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-electric">
      <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-electric to-navy-700 font-display text-sm font-bold text-white shadow-[0_8px_24px_-8px_var(--electric)] transition-transform group-hover:rotate-[-6deg] motion-reduce:transition-none">
        AG
      </span>
      <span className="leading-tight">
        <span className="block font-display text-sm font-semibold text-foreground">{profile.name}</span>
        <span className="block text-[11px] tracking-wide text-muted-foreground">Marketing · Medical Billing</span>
      </span>
    </a>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 motion-reduce:transition-none',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-electric focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div
        className={cn(
          'mx-auto flex max-w-content items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 motion-reduce:transition-none',
          scrolled ? 'glass mx-3 sm:mx-6 xl:mx-auto' : 'border border-transparent',
        )}
      >
        <Logo />
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={cn(
                    'relative rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-electric motion-reduce:transition-none',
                    active === item.id ? 'text-white' : 'text-muted-foreground hover:text-white',
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute inset-x-3 -bottom-0.5 h-px origin-left bg-gradient-to-r from-electric to-transparent transition-transform duration-300 motion-reduce:transition-none',
                      active === item.id ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className={cta('primary', 'hidden px-5 py-2.5 lg:inline-flex')}>
          Hire Me
        </a>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-foreground lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="border-white/10 bg-navy-950/95 backdrop-blur-xl">
            <SheetTitle className="px-6 pt-6 font-display text-lg">Menu</SheetTitle>
            <SheetDescription className="sr-only">Jump to a section of the page</SheetDescription>
            <nav aria-label="Mobile" className="px-4">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'block rounded-xl px-3 py-3 text-base font-medium transition-colors',
                        active === item.id ? 'bg-electric/15 text-white' : 'text-muted-foreground hover:bg-white/5 hover:text-white',
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto p-6">
              <a href="#contact" onClick={() => setOpen(false)} className={cta('primary', 'w-full')}>
                Let&apos;s Work Together
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
