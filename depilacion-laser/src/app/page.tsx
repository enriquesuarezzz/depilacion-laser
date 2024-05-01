import { ImagesSliderComponent } from '@/components/molecules/ImagesSlider.tsx/ImagesSliderComponent'
import { ImagesSlider } from '@/components/molecules/ImagesSlider.tsx/ImagesSliderLogic'
import { NavbarComponent } from '@/components/molecules/Navbar/NavbarComponent'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full">
      <ImagesSliderComponent />
      <NavbarComponent />
    </main>
  )
}
