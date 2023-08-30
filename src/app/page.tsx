import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

const testimonials = [
  {client: 'Urban Jungle', name: 'Nick James', role: 'Founder & MD', logo: logoPhobiaDark, title: "I couldn't recomend Annabel highly enough", description: "She joined our team as interim Growth Lead during a period of transition and immediately took the bull by the horns. She was brilliant at identifying strategic priorities, structuring them into logical work-streams and managed the team extremely well - allowing them to execute at a high cadence. She brings a wealth of experience from a breadth of categories, and is also just a pleasure to work alongside!"},
  {client: 'Hertility Health', name: "Dr Helen O'Neill", role: 'CEO', logo: logoPhobiaDark, title: 'Annabel has been a tour de force', description: 'Not only did she surpass her expectations as she had come recommended, but she has also set a new benchmark. If only everyone could be more Annabel'},
  {client: 'MOJU', name: 'Jon Marchant', role: 'Marketing Director', logo: logoPhobiaDark, title: 'Annabel is a real pleasure to work with', description: 'She has become an integral part of the MOJU team, putting her wide ranging strategic expertise into practice to drive MOJU DTC growth as well as supporting the internal teams to upskill their e-commerce knowledge. I would strongly recommend Annabel to any business looking to either develop their own DTC platform or accelerate growth.'},
]

function Clients() {
  return (
    <div className="mt-24 bg-raspberry py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-50" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Testimonials() {
  return (
    <>
      <SectionIntro
        title="What They’re Saying"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <FadeIn key={testimonial.client} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 sm:p-8">
                <h3>
                  <span className="absolute inset-0 rounded-3xl" />
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.client}
                    className="h-16 w-16"
                    unoptimized
                  />
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <span className="font-semibold">
                    {testimonial.client}
                  </span>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{testimonial.name} - {testimonial.role}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {testimonial.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {testimonial.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We unlock growth in your online business"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Strategy & Frameworks">
              Strategy and frameworks to help achieve your growth goals.
            </ListItem>
            <ListItem title="Marketing Expertise">
              Marketing strategy and performance marketing to build your brand and grow your customers.
            </ListItem>
            <ListItem title="Website Services">
              Site audits, relaunches, and conversion optimization to help turn visitors into customers.
            </ListItem>
            <ListItem title="Data Insights">
              Transform your data into valuable insight.
            </ListItem>
            <ListItem title="Flexible Collaboration">
              Interim support or project-specific consultation.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

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
            Pep and Zest 
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Direct-to-consumer and e-commerce consultancy helping companies to achieve online growth.
            With an entrepreneurial approach, we provide the support, strategy, and tools you need to disrupt industries and scale your digital business.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Testimonials />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
