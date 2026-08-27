import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Promoters } from '@/components/promoters'
import { JointStatement } from '@/components/joint-statement'
import { Business } from '@/components/business'
import { CommercialFlow } from '@/components/commercial-flow'
import { WhyMcc } from '@/components/why-mcc'
import { BrandStatement } from '@/components/brand-statement'
import { Perspective } from '@/components/perspective'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Promoters />
        <JointStatement />
        <Business />
        <CommercialFlow />
        <WhyMcc />
        <BrandStatement />
        <Perspective />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
