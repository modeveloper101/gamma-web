import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans, Bentham } from 'next/font/google'

export const bentham =  Bentham({ subsets:['latin'], weight: '400'})
const open_sans = DM_Sans({ subsets: ['latin'],  weight: ["400"] , style: "normal", variable: '--font-lato'})

export const metadata: Metadata = {
  title: 'Gamma Creations Co., Ltd',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} container`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
