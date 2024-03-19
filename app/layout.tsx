import Navbar from '@/components/Navbar';
import './globals.css'
import { Inter } from 'next/font/google'

import { Lato } from 'next/font/google';
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Steelprotection',
  description: 'Generated by Igor Gasi',
}

const font = Lato({subsets: ['latin'], weight: ['400']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
