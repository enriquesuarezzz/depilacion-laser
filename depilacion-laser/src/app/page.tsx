import SectionLayout from '@/components/atoms/SectionLayout/SectionLayout'
import AboutUS from '@/components/molecules/AboutUs/AboutUs'
import { CardsSection } from '@/components/molecules/CardsSection.tsx/CardsSection'
import { ImagesSliderComponent } from '@/components/molecules/ImagesSlider.tsx/ImagesSliderComponent'
import { ImagesSlider } from '@/components/molecules/ImagesSlider.tsx/ImagesSliderLogic'
import { NavbarComponent } from '@/components/molecules/Navbar/NavbarComponent'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full">
      <SectionLayout>     
      <ImagesSliderComponent />
      <NavbarComponent />
      <CardsSection />
      <AboutUS/>
      </SectionLayout>

    </main>
  )
}
