import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import { GoogleAnalytics } from '@next/third-parties/google'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Pompia',
    default: 'Pompia - Do more with your data',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-300 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <GoogleAnalytics gaId="G-8W96CEB7DM" />
      </body>
    </html>
  )
}
