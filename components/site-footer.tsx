import { MccLogo } from './mcc-logo'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Promoters', href: '#promoters' },
  { label: 'Business', href: '#business' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <MccLogo
              width={135}
              height={80}
              className="h-16 w-auto"
            />
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm font-medium text-navy/60 transition-colors hover:text-navy"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Maruthi Commercial Corporation.
            All rights reserved.
          </p>

          <p className="font-medium tracking-wide text-navy/50">
            Building Connections. Moving Opportunities.
          </p>
        </div>
      </div>
    </footer>
  )
}
