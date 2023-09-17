import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
       hello@pepandzest.com
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
        </div>
      </Container>
    </>
  )
}
