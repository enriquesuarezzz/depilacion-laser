import { BarlowText } from '@/components/atoms/BarlowText'
import Image from 'next/image'

export default function AboutUS() {
  return (
    <>
      <div
        className="hidden max-h-[500px] w-full flex-row content-center items-center gap-4 md:flex md:gap-10 lg:justify-center lg:gap-20"
        id="about_us"
      >
        <div className="flex max-h-[500px] flex-row lg:items-center">
          {/* Section image */}
          <Image
            src={process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/about_us.jpg'}
            alt={'About Us Image'}
            width={500}
            height={300}
            unoptimized
            className=" h-[500px] object-contain"
          />
        </div>
        <div className="flex max-w-[200px] flex-col md:max-w-[540px]">
          {/* Section title */}
          <div className="flex flex-row gap-2 md:gap-6 lg:items-center">
            <BarlowText
              text={'Nuestra Especialista'}
              style="semibold"
              fontSize="40px"
              className=""
            />
          </div>
          {/* Section description */}
          <BarlowText
            text={
              'Lorem ipsum dolor sit amet consectetur. Facilisis ipsum nibh suscipit euismod luctus tristique maecenas elit. Lectus risus sed vel proin risus at leo id tellus.  dolor sit amet consectetur. Facilisis ipsum nibh suscipit euismod luctus tristique maecenas elit. Lectus risus sed vel proin risus at leo id tellus'
            }
            fontSize="16px"
            className="pt-0 md:pt-6"
          />
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        <div className="flex flex-row  justify-center gap-2 md:gap-6">
          <BarlowText
            text={'Nuestra Especialista'}
            fontSize="64px"
            className="text-center"
          />
        </div>
        <div className="flex max-h-[500px] flex-row items-center justify-center">
          {/* Section image */}
          <Image
            src={process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/about_us.jpg'}
            alt={'About Us Image'}
            width={500}
            height={300}
            unoptimized
            className="h-[500px] object-contain pt-5"
          />
        </div>
        <div>
          <BarlowText
            text={
              'Lorem ipsum dolor sit amet consectetur. Facilisis ipsum nibh suscipit euismod luctus tristique maecenas elit. Lectus risus sed vel proin risus at leo id tellus.  dolor sit amet consectetur. Facilisis ipsum nibh suscipit euismod luctus tristique maecenas elit. Lectus risus sed vel proin risus at leo id tellus'
            }
            fontSize="16px"
            className="pt-6"
          />
        </div>
      </div>
    </>
  )
}
