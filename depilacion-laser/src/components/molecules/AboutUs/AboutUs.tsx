import { BarlowText } from '@/components/atoms/BarlowText'
import { IVerified } from '@/components/atoms/Svg/IVerified'
import { IExperience } from '@/components/atoms/Svg/IExperience'
import { IRenew } from '@/components/atoms/Svg/IRenew'
import Image from 'next/image'

export default function AboutUS() {
  const renderCaption = () => (
    <div className="absolute bottom-[-10%] flex h-full max-h-[100px] w-full max-w-[450px] items-center justify-center rounded-2xl bg-opacity-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 shadow-2xl backdrop-blur-lg md:max-h-[150px] md:w-[85%] md:max-w-[1100px] lg:max-h-[200px]">
      <div className="flex flex-row gap-4 pl-1 md:pl-0">
        {[
          { icon: <IVerified size={25} />, text: 'Calidad y profesionalismo' },
          {
            icon: <IExperience size={25} />,
            text: '+ de 200 sesiones de experiencia',
          },
          {
            icon: <IRenew size={25} />,
            text: 'Tecnología de última generación',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex max-w-[33%] flex-col items-center justify-center gap-1 md:gap-4"
          >
            <div className="rounded-full bg-white p-3 shadow-lg">
              {item.icon}
            </div>

            <BarlowText
              text={item.text}
              fontSize="26px"
              style="semibold"
              className="text-center text-white"
            />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section>
      <div
        id="about_us_section"
        className="relative hidden items-center justify-center pt-4 md:flex md:pt-10"
      >
        {/* Section image for md and larger screens */}
        <Image
          src={
            process.env.NEXT_PUBLIC_IMAGES_PATH +
            '/images/about_us_placeholder.jpg'
          }
          alt={'About Us Image'}
          width={1200}
          height={600}
          unoptimized
          className="max-h-[700px] object-contain"
        />
        {renderCaption()}
      </div>
      <div
        id="about_us_section"
        className="relative  flex items-center justify-center pt-4 md:hidden md:pt-10"
      >
        {/* Section image for mobile screens */}
        <Image
          src={process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/about_us_1.jpg'}
          alt={'About Us Image'}
          width={1200}
          height={600}
          unoptimized
          className="max-h-[700px] object-contain"
        />
        {renderCaption()}
      </div>
    </section>
  )
}
