import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Quote } from '@/components/Quote'
import logoBedfolk from '@/images/clients/bedfolk.webp'
import logoUrbanJungle from '@/images/clients/urban-jungle.svg'
import logoCraggyRange from '@/images/clients/craggy-range.webp'
import logoMoju from '@/images/clients/moju.webp'
import logoHertility from '@/images/clients/hertility.png'
import imageWorking from '@/images/working.jpg'
import imageProfile from '@/images/profile.jpg'

const clients = [
  ['Bedfolk', logoBedfolk],
  ['Urban Jungle', logoUrbanJungle],
  ['Moju', logoMoju],
  ['Heritility', logoHertility],
]

const testimonials = [
  {
    client: 'Bedfolk',
    name: 'Nick James',
    role: 'Founder & MD',
    logo: logoBedfolk,
    title: 'Wealth of experience',
    description:
      "I couldn't recommend Annabel highly enough. She joined our team as interim Growth Lead and immediately took the bull by the horns. She was brilliant at identifying strategic priorities, structuring them into logical work-streams and managed the team extremely well - allowing them to execute at a high cadence. She brings a wealth of experience from a breadth of categories, and is also just a pleasure to work alongside!",
  },
  {
    client: 'MOJU',
    name: 'Jon Marchant',
    role: 'Marketing Director',
    logo: logoBedfolk,
    title: 'Strategic expertise',
    description:
      'Annabel is a real pleasure to work with! She has become an integral part of the MOJU team, putting her wide ranging strategic expertise into practice to drive MOJU DTC growth as well as supporting the internal teams to upskill their e-commerce knowledge. I would strongly recommend Annabel to any business looking to either develop their own DTC platform or accelerate growth.',
  },
  {
    client: 'Urban Jungle',
    name: 'Jimmy Williams',
    role: 'CEO',
    logo: logoUrbanJungle,
    title: 'Incredible with the team',
    description:
      "Annabel joined our team at a critical point in our growth… Executing a huge amount of work, with the highest quality standards… From leading a project around branding and visual identity, through overhauls of performance channels and executing big above the line campaigns. She's also been incredible with the team, taking real time to help them develop. If you get the chance to work with her, I strongly advise you take it.",
  },
]

function Clients() {
  return (
    <div className="mt-24 bg-raspberry py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Who We’ve Worked With
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
                  <Image src={logo} alt={client} unoptimized width={184} />
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
      ></SectionIntro>
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
                  <span className="font-semibold">{testimonial.client}</span>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>
                    {testimonial.name} - {testimonial.role}
                  </span>
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
        title="What We Do"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        Founded with an entrepreneurial approach, we provide the support,
        strategy, and tools you need to disrupt industries and scale your
        digital business.
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageProfile}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-start"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Strategy">
              Marketing, Growth & DTC strategies and frameworks.
            </ListItem>
            <ListItem title="Marketing">
              Digital advertising, performance marketing, and email marketing.
            </ListItem>
            <ListItem title="Data">
              Insight, forecasting, reporting and AI.
            </ListItem>
            <ListItem title="Website">
              Site audits, project management, and conversion optimization.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function Support() {
  return (
    <>
      <SectionIntro
        eyebrow="Support"
        title="How We Help"
        className="mt-24 sm:mt-32 lg:mt-40"
      ></SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pr-4">
            <ListItem title="Growth">
              Unlock opportunities to scale or reactivate growth
            </ListItem>
            <ListItem title="Insight">
              Add a modern data stack with a single source of truth
            </ListItem>
            <ListItem title="Expertise">
              Access fractional marketing and data specalists
            </ListItem>
          </List>
          <div className="mt-16 flex justify-center lg:mt-0 lg:w-1/2 lg:justify-end lg:pl-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageWorking}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-end"
                shape={1}
              />
            </FadeIn>
          </div>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description: 'Direct-to-consumer and e-commerce consultancy',
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
            Pep & Zest is a direct-to-consumer and marketing consultancy helping
            ambitious companies to achieve growth.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Services />

      <Quote
        className="mt-24 sm:mt-32 lg:mt-40"
        person={{ name: 'Annabel Causer', company: 'Pep & Zest' }}
      >
        Our approach is to be an extension of your team. We’ll work with you to
        to drive sustainable long-term growth through marketing, website and
        data alignment.
      </Quote>

      <Support />

      <Testimonials />

      <ContactSection />
    </>
  )
}
