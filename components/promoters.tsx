import Image from 'next/image'
import { Reveal } from './reveal'
import { SwooshMark } from './wave-divider'

const promoters = [
  {
    name: 'Kukkadapu Maruthi',
    role: 'Founder & Promoter',
    image: '/promoter-maruthi.jpeg',
    quote:
      'Thirty-five years in business is built on more than transactions — it is built on trust, relationships and a reputation earned over time.',
    body: 'With over 35 years of experience in commercial business, Kukkadapu Maruthi is the founding force behind MCC. His journey has been shaped by deep market understanding, enduring relationships and a reputation built through consistency, integrity and commitment. His approach has always been straightforward — understand people, honour commitments and create value that lasts. The relationships established over decades continue to form the foundation on which MCC moves forward today.',
    accent: 'red' as const,
  },
  {
    name: 'Kukkadapu Abhivadan',
    role: 'Promoter & Next-Generation Leadership',
    image: '/promoter-abhivadan.jpeg',
    quote:
      'A strong legacy is not simply inherited — it is a responsibility to carry forward, evolve and build upon.',
    body: 'As the next generation of MCC, Kukkadapu Abhivadan represents the continuation of a business built over decades. Currently pursuing his undergraduate education at CBIT, he brings a contemporary perspective shaped by technology, learning and an understanding of the evolving business landscape. His role is to understand the foundations that came before, preserve the values that built them and contribute to MCC’s next chapter with fresh perspective, discipline and ambition.',
    accent: 'blue' as const,
  },
]

export function Promoters() {
  return (
    <section id="promoters" className="relative bg-cloud py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Section Heading */}
        <Reveal className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-mcc-red" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-mcc-red">
              The Promoters
            </p>
          </div>

          <h2 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-navy md:text-5xl lg:text-6xl">
            Built over 35 years.
            <br />
            Carried forward by the next generation.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            MCC brings together decades of commercial experience and a new
            generation of ambition — connected by the same values of trust,
            relationships and long-term thinking.
          </p>
        </Reveal>

        {/* Promoter Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {promoters.map((p, i) => (
            <Reveal key={p.name} delay={i * 130}>
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-white shadow-[0_2px_30px_rgba(15,25,45,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,25,45,0.12)]">

                {/* Portrait */}
                <div
                  className={`relative overflow-hidden bg-cloud ${
                    i === 0 ? 'aspect-[5/4]' : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={`Portrait of ${p.name}`}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className={
                      i === 0
                        ? 'object-contain object-center'
                        : 'object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]'
                    }
                  />

                  {/* Subtle bottom fade */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />

                  {/* Role Badge */}
                  <span
                    className={`absolute left-5 top-5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm ${
                      p.accent === 'red'
                        ? 'bg-mcc-red'
                        : 'bg-mcc-blue'
                    }`}
                  >
                    {p.role}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 md:p-9">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
                    {p.name}
                  </h3>

                  <SwooshMark className="mt-3 h-4 w-24" />

                  <blockquote
                    className={`mt-6 border-l-4 pl-5 text-lg font-medium italic leading-relaxed text-navy ${
                      p.accent === 'red'
                        ? 'border-mcc-red'
                        : 'border-mcc-blue'
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
