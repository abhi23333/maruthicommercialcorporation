import { Reveal } from './reveal'

export function Contact() {
  return (
    <section id="contact" className="bg-cloud py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mcc-red">
                Connect With Us
              </p>
              <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-tight tracking-tight text-navy md:text-6xl">
                Let&apos;s Build the Next Opportunity.
              </h2>
              <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                For commercial enquiries, partnerships and opportunities, reach
                out to Maruthi Commercial Corporation.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pt-4">
            <Reveal delay={120}>
              <dl className="divide-y divide-border border-y border-border">
                <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                    Enterprise
                  </dt>
                  <dd className="text-lg font-medium text-navy sm:text-right">
                    Maruthi Commercial Corporation
                  </dd>
                </div>
                <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                    Location
                  </dt>
                  <dd className="text-lg font-medium text-navy sm:text-right">
                    Miryalaguda, Telangana, India
                  </dd>
                </div>
                <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                    Email
                  </dt>
                  <dd className="sm:text-right">
                    <a
                      href="mailto:info@maruthicommercial.com"
                      className="text-lg font-medium text-mcc-blue underline-offset-4 transition hover:underline"
                    >
                      info@maruthicommercial.com
                    </a>
                  </dd>
                </div>
              </dl>

              <a
                href="mailto:info@maruthicommercial.com"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
              >
                Start a Conversation
                <span aria-hidden>&rarr;</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
