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

function OurProcess() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
      </div>

      <SectionIntro title="Our Process">
         We’ll work with your team to embed a growth mindset, upskill
         team members and help recruit permanent hires so you’re 
         equipped to drive your online business forward for many years. 
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Insight">
            We’ll build a deep understanding of your business ambitions, 
            challenges, team and metrics. 
          </GridListItem>
          <GridListItem title="Strategy">
            Together we’ll identify the strategic approach needed to grow
            your direct-to-consumer business, ruthlessly prioritise 
            actions and establish frameworks to execute well. 
          </GridListItem>
          <GridListItem title="Action">
            We’ll run priority projects to fire up your online growth.
            We’re used to moving fast and have a strong bias for action.
            Whether it’s giving your digital ads a makeover, sprucing up 
            your site, or diving into data for insights, we’ll make it happen. 
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Process',
  description:
    'We provide Interim, Fractional Support or Consulting Services',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Process" title="How we work">
        Two ways to work with us
      </PageIntro>
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

      <OurProcess />

      <ContactSection />
    </>
  )
}
