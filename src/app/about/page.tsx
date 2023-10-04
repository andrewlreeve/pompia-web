import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'

function Values() {
  return (
    <div className="mt-24 rounded-4xl bg-raspberry py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Values"
        title="What We Believe In"
        invert
      >
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Honesty" invert>
            We’re straight talking and open with communication. 
          </GridListItem>
          <GridListItem title="Action" invert>
            We have a strong bias for action and making things happen. 
          </GridListItem>
          <GridListItem title="Collaboration" invert>
            We love to become a trusted extension of your team.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'People',
    people: [
      {
        name: 'Annabel Causer',
        linkedin: 'https://www.linkedin.com/in/annabelcauser/',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Andrew Reeve',
        linkedin: 'https://www.linkedin.com/in/andrewlreeve/',
        image: { src: imageMichaelFoster },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              <a href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Pep Zest is a boutique online and e-commerce growth consultancy founded by Annabel Causer and Andrew Reeve',
}

export default async function About() {
  return (
    <>
      <PageIntro eyebrow="About" title="Who we are">
        <p>
          Pep Zest is a boutique online and e-commerce growth consultancy founded by Annabel Causer and Andrew Reeve,
          each with over 15 years experience across growth, marketing, technology, ecommerce and data.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            “Pep and Zest is built to provide the support we wanted when we were running our own direct-to-consumer
            business. Our approach is to be an extension of your team, to understand your business levers and the 
            actions required to drive sustainable long-term growth. We’ll help to dial up your growth, embed the skills you need to maintain momentum, and then get out your way”.
          </p>
          <p>
            Annabel and Andrew mentor and advise startups across NZ, AU and UK and are driven to help companies to discover what will move their online businesses forward.
          </p>
          <p>
            Prior to founding Pep and Zest, Annabel and Andrew founded a VC-backed online craft beer retailer in the UK. 
            Highlights include driving 3 x yearly customer and revenue growth; VC, crowd and angel investment; 31% awareness
            among craft beer drinkers; and multiple start up awards including #49 StartUp100 Awards, Future 50 Disruptive Businesses,
            Retail Business of the Year Finalist and The Guardian Startup of the Year Finalist.
          </p>
        </div>
      </PageIntro>

      <Values />

      <Team />

      <ContactSection />
    </>
  )
}
