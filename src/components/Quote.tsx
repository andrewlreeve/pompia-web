import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function Quote({
  children,
  person,
  className,
}: {
  children: React.ReactNode
  person: { name: string; company: string }
  className?: string
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-sugar py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              {person.name} - {person.company}
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
