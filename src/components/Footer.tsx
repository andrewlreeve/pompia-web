import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'

const navigation = [
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Contact us', href: '/contact' },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-3 gap-8">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              <Link
                href={section.href}
                className="transition hover:text-neutral-950"
              >
                {section.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="w-full sm:mt-8 lg:mt-16">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2"></div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" />
          </Link>
          <Navigation />
          <p className="text-sm text-neutral-700">
            © Pep & Zest Limited {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
