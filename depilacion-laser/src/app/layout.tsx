import type { Metadata } from 'next'
import { Inter, Mulish } from 'next/font/google'
import './globals.css'
import Footer from '@/components/molecules/Footer/Footer'
import { NavbarComponent } from '@/components/molecules/Navbar/NavbarComponent'

export const mulish = Mulish({
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
      <body className={`${mulish.className} flex flex-col gap-6`}>
        {children}
        <NavbarComponent />
        <Footer />
      </body>
    </html>
  )
}
