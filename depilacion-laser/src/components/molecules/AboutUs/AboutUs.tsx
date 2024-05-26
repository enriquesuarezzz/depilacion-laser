import { BarlowText } from '@/components/atoms/BarlowText'
import Image from 'next/image'

export default function AboutUS() {
  return (
    <div className="relative flex w-full justify-center ">
      {/* Section image */}
      <Image
        src={
          process.env.NEXT_PUBLIC_IMAGES_PATH +
          '/images/placeholder_about_us.png'
        }
        alt={'About Us Image'}
        width={1200}
        height={600}
        unoptimized
        className="  object-contain"
      />
      <div className="absolute bottom-[-10%] h-full max-h-[200px] w-full max-w-[1000px] bg-green-400">
        <div className="flex flex-row gap-20">
          <div>hola</div>
          <div>hola</div>
          <div>hola</div>
          <div>hola</div>
        </div>
      </div>
    </div>
  )
}
