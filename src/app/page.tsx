import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export const metadata: Metadata = {
  description:
    'Direct-to-consumer and e-commerce consultancy',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Unlock growth in your online business
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Pep and Zest is a direct-to-consumer and e-commerce consultancy helping companies to achieve online growth.
            With an entrepreneurial approach, we provide the support, strategy, and tools you need to disrupt industries and scale your digital business.
          </p>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  )
}
