import { MulishText } from '@/components/atoms/MulishText'
import Image from 'next/image'

export default function AboutUS() {
  return (
    <div
      className="flex max-h-[500px] w-full flex-row items-center gap-4 md:gap-10 lg:gap-20"
      id="about_us"
    >
      <div className="flex max-h-[500px] flex-row items-center">
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
        <div className="flex flex-row items-center gap-2 md:gap-6">
          <MulishText
            text={'Nuestra Especialista'}
            style="regular"
            fontSize="40px|30px|20px"
            className=""
          />
        </div>
        {/* Section description */}
        <MulishText
          text={
            'Lorem ipsum dolor sit amet consectetur. Facilisis ipsum nibh suscipit euismod luctus tristique maecenas elit. Lectus risus sed vel proin risus at leo id tellus.  dolor sit amet consectetur. Facilisis ipsum nibh suscipit euismod luctus tristique maecenas elit. Lectus risus sed vel proin risus at leo id tellus'
          }
          style="regular"
          fontSize="14px"
          className="pt-0 md:pt-6"
        />
      </div>
    </div>
  )
}
