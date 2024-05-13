import SectionLayout from '@/components/atoms/SectionLayout/SectionLayout'
import AboutUS from '@/components/molecules/AboutUs/AboutUs'
import { CardsSection } from '@/components/molecules/CardsSection.tsx/CardsSection'
import { ImagesSliderComponent } from '@/components/molecules/ImagesSlider.tsx/ImagesSliderComponent'
import { ImagesSlider } from '@/components/molecules/ImagesSlider.tsx/ImagesSliderLogic'
import { NavbarComponent } from '@/components/molecules/Navbar/NavbarComponent'
import ReviewsSection from '@/components/molecules/ReviewsSection/ReviewsSection'
import { PricesCardsSection } from '@/components/organisms/PricesCardsSection/PricesCardsSection'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full">
      <ImagesSliderComponent />
      <SectionLayout>
        <NavbarComponent />
        <CardsSection />
        <AboutUS />
        <PricesCardsSection />
        <ReviewsSection />
      </SectionLayout>
    </main>
  )
}
