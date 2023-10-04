import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { ContactForm } from '@/components/ContactForm'

function ContactDetails() {
  return (
    <FadeIn>
      <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
        {[
          ['Say hello', 'hello@pepandzest.com']
        ].map(([label, email]) => (
          <div key={email}>
            <dt className="font-semibold text-neutral-950">{label}</dt>
            <dd>
              <Link
                href={`mailto:${email}`}
                className="text-neutral-600 hover:text-neutral-950"
              >
                {email}
              </Link>
            </dd>
          </div>
        ))}
      </dl>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
      </PageIntro>

      <Container className="mt-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 max-w-2xl">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </>
  )
}
