import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Posts created by next`,
  description: 'Crafted by Sky Scappers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
		{children}
    </>
  )
}
