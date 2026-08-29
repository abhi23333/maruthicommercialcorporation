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
                out to Maaruthi Commercial Corporation.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pt-4">
            <Reveal delay={120}>
              <dl className="divide-y divide-border border-y border-border">

                {/* Enterprise */}
                <div className="grid gap-2 py-6 sm:grid-cols-[120px_1fr] sm:gap-8">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                    Enterprise
                  </dt>

                  <dd className="text-lg font-medium text-navy sm:text-right">
                    Maaruthi Commercial Corporation
                  </dd>
                </div>

                {/* Location */}
                <div className="grid gap-2 py-6 sm:grid-cols-[120px_1fr] sm:gap-8">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                    Location
                  </dt>

                  <dd className="text-lg font-medium leading-relaxed text-navy sm:text-right">
                    Kukkadapu Enclave, Housing Board Colony,
                    <br className="hidden sm:block" />
                    Miryalaguda - 508207, Nalgonda, Telangana
                  </dd>
                </div>

                {/* Email */}
                <div className="grid gap-2 py-6 sm:grid-cols-[120px_1fr] sm:gap-8">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                    Email
                  </dt>

                  <dd className="sm:text-right">
                    <a
                      href="info@maaruthicommercialcorporation.com"
                      className="text-lg font-medium text-mcc-blue underline-offset-4 transition hover:underline"
                    >
                      info@maaruthicommercialcorporation.com
                    </a>
                  </dd>
                </div>

                {/* Phone */}
                <div className="grid gap-2 py-6 sm:grid-cols-[120px_1fr] sm:gap-8">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                    Contact
                  </dt>

                  <dd className="flex flex-col gap-1 text-lg font-medium sm:items-end">
                    <a
                      href="tel:+919490355713"
                      className="text-mcc-blue underline-offset-4 transition hover:underline"
                    >
                      +91 94903 55713
                    </a>

                    <a
                      href="tel:+919390221318"
                      className="text-mcc-blue underline-offset-4 transition hover:underline"
                    >
                      +91 93902 21318
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
