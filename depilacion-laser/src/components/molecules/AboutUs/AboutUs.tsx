import { BarlowText } from '@/components/atoms/BarlowText'
import { IVerified } from '@/components/atoms/Svg/IVerified'
import { IExperience } from '@/components/atoms/Svg/IExperience'
import { IRenew } from '@/components/atoms/Svg/IRenew'
import Image from 'next/image'

export default function AboutUS() {
  return (
    <div className="relative flex w-full justify-center ">
      {/* Section image */}
      <Image
        src={
          process.env.NEXT_PUBLIC_IMAGES_PATH +
          '/images/about_us_placeholder.jpg'
        }
        alt={'About Us Image'}
        width={1200}
        height={600}
        unoptimized
        className="  object-contain"
      />
      <div className="absolute bottom-[-10%] flex h-full max-h-[100px] w-full max-w-[1000px] items-center rounded-2xl bg-blue-400/95 md:max-h-[150px] lg:max-h-[200px] ">
        <div className="flex flex-row">
          <div className="flex flex-col items-center gap-4">
            <IVerified size={30} />
            <BarlowText
              text="Una autentica profesional"
              fontSize="26px"
              className="text-center text-white"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <IExperience size={30} />
            <BarlowText
              text="mas de 20 años de expereincia en depilación"
              fontSize="26px"
              className="text-center text-white"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <IRenew size={30} />
            <BarlowText
              text="siempre a la ultima tecnologia"
              fontSize="26px"
              className="text-center text-white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
