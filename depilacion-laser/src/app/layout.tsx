import type { Metadata } from 'next'
import { Barlow, Inter, Mulish } from 'next/font/google'
import './globals.css'
import Footer from '@/components/molecules/Footer/Footer'
import { NavbarComponent } from '@/components/molecules/Navbar/NavbarComponent'

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Depilacion Laser SHR',
  description: 'Depilacion Laser SHR',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={`${barlow.className} flex flex-col`}>
        {children}
        <NavbarComponent />
        <Footer />
      </body>
    </html>
  )
}
