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
import imageConnections from '@/images/code.webp'
import { BgDecorator } from '@/components/BgDecorator'

const clients = [
  ['Bedfolk', logoBedfolk],
  ['Urban Jungle', logoUrbanJungle],
  ['Moju', logoMoju],
  ['Heritility', logoHertility],
]

function Clients() {
  return (
    <div className="-mb-1px mt-24 bg-raspberry py-20 sm:mt-32 sm:py-32 lg:mt-52">
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

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Product"
        title="Go Faster"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        Understand your data, automate the mundane and scale your business.
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <Image src={imageConnections} alt="connections"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Automation">
              Connect disparate systems and automate repetitive tasks. 
            </ListItem>
            <ListItem title="Data">
              Insight and reporting with a single source of truth.
            </ListItem>
            <ListItem title="AI">
              Add capability with virtaul workers.
            </ListItem>
          </List>
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
      <BgDecorator type="top" />
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Do more with your data
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Automation and data insight platform for smooth operations 
          </p>
        </FadeIn>
      </Container>

      <Clients />
      <BgDecorator type="middle" />
      <Services />
      <Quote
        className="lg:mt-18 mt-24 sm:mt-72px"
        person={{ name: 'Andrew', company: 'Pompia' }}
      >
       Built for enterprise scale. Designed for small and medium businesses. 
      </Quote>

      <ContactSection />
    </>
  )
}
