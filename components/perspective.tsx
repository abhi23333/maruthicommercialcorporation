import { Reveal } from './reveal'

export function Perspective() {
  return (
    <section className="border-t border-border bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mcc-red">
                Our Perspective
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <p className="max-w-3xl text-balance font-serif text-2xl font-light leading-snug tracking-tight text-navy md:text-4xl">
                Commercial opportunities rarely follow a fixed path. MCC
                believes in staying adaptable, understanding what the market
                requires and building the right connections to make
                opportunities happen.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
