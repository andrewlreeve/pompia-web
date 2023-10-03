import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Strategy() {
  return (
    <Section title="Strategy" image={{ src: imageWhiteboard }}>
      <List className="mt-8">
        <ListItem>
          Direct-to-consumer and ecommerce strategy
        </ListItem>
        <ListItem>
          Experiment-driven growth frameworks  
        </ListItem>
        <ListItem>
          KPIs and target metrics 
        </ListItem>
        <ListItem>
          Team hiring or upskilling 
        </ListItem>
      </List>
    </Section>
  )
}

function Marketing() {
  return (
    <Section title="Marketing" image={{ src: imageLaptop, shape: 1 }}>
      <List className="mt-8">
        <ListItem>
          Marketing strategy and implementation
        </ListItem>
        <ListItem>
          Agency, freelance or team management
        </ListItem>
        <ListItem>
          Performance marketing including Google Search & Performance Max, Meta Ads, Pinterest Ads, YouTube Ads
        </ListItem>
        <ListItem>
          Organic email and email automation
        </ListItem>
      </List>
    </Section>
  )
}

function Data() {
  return (
    <Section title="Data" image={{ src: imageMeeting, shape: 2 }}>
      <List className="mt-8">
        <ListItem>
          Set up the right foundations to build your data capabilities 
        </ListItem>
        <ListItem>
          Build a modern data stack to give a single source of truth 
        </ListItem>
        <ListItem>
          Actionable insight and reporting on the metrics that really matter 
        </ListItem>
        <ListItem>
          First-party data for better marketing attribution
        </ListItem>
      </List>
    </Section>
  )
}

function Website() {
  return (
    <Section title="Website" image={{ src: imageLaptop, shape: 1 }}>
      <List className="mt-8">
        <ListItem>
          Site audits
        </ListItem>
        <ListItem>
          Project management of site relaunches
        </ListItem>
        <ListItem>
          Conversion optimisation 
        </ListItem>
        <ListItem>
          Merchandising 
        </ListItem>
      </List>
    </Section>
  )
}

function Process() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
      </div>

      <SectionIntro
        eyebrow="Process"
        title="How We Work"
      >
        <p>
          Two ways to work with us
        </p>
      </SectionIntro>

      <Container className="mt-8">
        <GridList>
          <GridListItem title="Interim or Fractional Role">
            Fill leadership gaps with experienced roles like Marketing Director or Growth Lead.
          </GridListItem>
          <GridListItem title="Consulting Services">
            Specialised expertise and in-house team coaching for specific projects.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Services',
  description:
    'We provide Interim, Fractional Support or Consulting Services',
}

export default function Services(){
  return (
    <>
      <PageIntro eyebrow="Services" title="What We Do">
        Pep & Zest is an online and e-commerce growth consultancy helping companies to grow their online businesses. Whether its interim support or project-specific consultation, we offer personalised support tailored to your needs.
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Strategy />
        <Marketing />
        <Data />
        <Website />
      </div>

      <Process />

      <ContactSection />
    </>
  )
}
