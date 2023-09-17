import React from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Theme from '@/theme/theme'

import Navbar from '@/components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CombatConnect',
  description: 'CombatConnect is a social network for martial artists.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Theme>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </Theme>
    </html>
  )
}
