'use client'

import { useEffect, useState } from 'react'
import { MccLogo } from './mcc-logo'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Promoters', href: '#promoters' },
  { label: 'Business', href: '#business' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-white/90 shadow-[0_1px_20px_rgba(15,25,45,0.06)] backdrop-blur-xl'
          : 'border-b border-transparent bg-white/0'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 md:px-8 ${
          scrolled ? 'h-[74px]' : 'h-[92px]'
        }`}
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center" aria-label="Maruthi Commercial Corporation — home">
          <MccLogo
            priority
            width={220}
            height={130}
            className={`w-auto transition-all duration-300 ${
              scrolled ? 'h-12 md:h-14' : 'h-14 md:h-[68px]'
            }`}
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-[15px] font-semibold tracking-wide text-navy/75 transition-colors hover:text-navy"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-mcc-red transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center rounded-full bg-mcc-red px-6 py-3 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-mcc-red/90 sm:inline-flex"
          >
            Connect With Us
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-navy lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-navy transition-all ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-5 bg-navy transition-all ${
                  open ? 'top-1.5 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-white/97 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3.5 text-base font-semibold text-navy/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-mcc-red px-5 py-3.5 text-sm font-bold text-white"
              >
                Connect With Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
