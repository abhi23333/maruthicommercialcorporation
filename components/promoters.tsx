import Image from 'next/image'
import { Reveal } from './reveal'
import { SwooshMark } from './wave-divider'

const promoters = [
  {
    name: 'Kukkadapu Maruthi',
    role: 'Founder & Promoter',
    image: '/promoter-maruthi.jpeg',
    quote:
      'Business is built on trust. When people believe in you, opportunities follow.',
    body: 'The founding force behind MCC, Kukkadapu Maruthi brings decades of on-the-ground commercial experience and an instinct for people. His relationships and reputation form the foundation the enterprise is built on.',
    accent: 'red' as const,
  },
  {
    name: 'Kukkadapu Abhivadan',
    role: 'Promoter & Next-Generation Leadership',
    image: '/promoter-abhivadan.jpeg',
    quote:
      'We carry forward a strong foundation — and take it into new markets and new ways of doing business.',
    body: 'Representing the next generation, Kukkadapu Abhivadan pairs the values MCC was built on with a forward-looking, opportunity-driven mindset — extending the enterprise into new sectors and modern ways of working.',
    accent: 'blue' as const,
  },
]

export function Promoters() {
  return (
    <section id="promoters" className="relative bg-cloud py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-mcc-red" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-mcc-red">
              The Promoters
            </p>
          </div>
          <h2 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-navy md:text-5xl lg:text-6xl">
            Two generations. One shared foundation.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            MCC is led by a partnership of experience and ambition — the values
            that built the enterprise, carried forward with fresh momentum.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {promoters.map((p, i) => (
            <Reveal key={p.name} delay={i * 130}>
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-white shadow-[0_2px_30px_rgba(15,25,45,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,25,45,0.12)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-cloud">
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={`Portrait of ${p.name}`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                  <span
                    className={`absolute left-5 top-5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white ${
                      p.accent === 'red' ? 'bg-mcc-red' : 'bg-mcc-blue'
                    }`}
                  >
                    {p.role}
                  </span>
                </div>

                <div className="p-7 md:p-9">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
                    {p.name}
                  </h3>
                  <SwooshMark className="mt-3 h-4 w-24" />
                  <blockquote
                    className={`mt-6 border-l-4 pl-5 text-lg font-medium italic leading-relaxed text-navy ${
                      p.accent === 'red' ? 'border-mcc-red' : 'border-mcc-blue'
                    }`}
                  >
                    &ldquo;{p.quote}&rdquo;
                  </blockquote>
                  <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
