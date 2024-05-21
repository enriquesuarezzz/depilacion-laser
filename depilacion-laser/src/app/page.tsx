import SectionLayout from '@/components/atoms/SectionLayout/SectionLayout'
import AboutUS from '@/components/molecules/AboutUs/AboutUs'
import { CardsSection } from '@/components/molecules/CardsSection.tsx/CardsSection'
import { ImagesSliderComponent } from '@/components/molecules/ImagesSlider.tsx/ImagesSliderComponent'
import { ImagesSlider } from '@/components/molecules/ImagesSlider.tsx/ImagesSliderLogic'
import { NavbarComponent } from '@/components/molecules/Navbar/NavbarComponent'
import ReviewsSection from '@/components/molecules/ReviewsSection/ReviewsSection'
import DemoSlider from '@/components/molecules/offers/OffersSwiper'
import OffersSwiper from '@/components/molecules/offers/OffersSwiper'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Depilacion Laser SHR Lanzarote | Inicio',
  description: 'Servicio de depilacion laser SHR en Lanzarote',
}

export default function Home() {
  return (
    <main className="h-full w-full">
      <ImagesSliderComponent />
      <SectionLayout>
        <NavbarComponent />
        <CardsSection />
        <AboutUS />
        <DemoSlider />
        <ReviewsSection />
      </SectionLayout>
    </main>
  )
}
