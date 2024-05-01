import { ImagesSliderComponent } from '@/components/molecules/ImagesSlider.tsx/ImagesSliderComponent'
import { ImagesSlider } from '@/components/molecules/ImagesSlider.tsx/ImagesSliderLogic'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full">
      <ImagesSliderComponent />
    </main>
  )
}
