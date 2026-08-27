import { Reveal } from './reveal'

export function About() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-mcc-red" />
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-mcc-red">
                  Who We Are
                </p>
              </div>

              <h2 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-navy md:text-5xl lg:text-6xl">
                A commercial house built to connect markets.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Maruthi Commercial Corporation (MCC) is a diversified
                  commercial enterprise rooted in Miryalaguda, Telangana. We
                  operate at the meeting point of requirement and opportunity —
                  identifying where value can be created and bringing the right
                  people, products, resources and transportation capabilities
                  together.
                </p>

                <p>
                  Rather than confining ourselves to a single category, MCC
                  stays deliberately versatile, operating across trading,
                  logistics and transportation, commercial opportunities and
                  diversified ventures. That flexibility, paired with a deep
                  understanding of local and regional markets, lets us move
                  quickly on genuine commercial opportunities.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
                {[
                  { k: 'Rooted', v: 'In Miryalaguda, Telangana' },
                  { k: 'Diversified', v: 'Across commercial sectors' },
                  { k: 'Relationship-led', v: 'In every transaction' },
                ].map((c) => (
                  <div key={c.k} className="bg-white p-6">
                    <p className="font-display text-lg font-extrabold text-mcc-blue">
                      {c.k}
                    </p>

                    <p className="mt-2 text-sm leading-snug text-muted-foreground">
                      {c.v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
