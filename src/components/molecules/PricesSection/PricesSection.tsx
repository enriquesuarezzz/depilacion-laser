import { BarlowText } from '@/components/atoms/BarlowText'
import Image from 'next/image'
import Accordion from '../accordion/accordion'
import AccordionContent from './AccordionContent'

export default function PricesSection() {
  const accordionWoman = [
    {
      title: 'Precios woman',
      content: <AccordionContent woman />,
    },
  ]
  const accordionMan = [
    {
      title: 'Precios men',
      content: <AccordionContent man />,
    },
  ]
  return (
    <section className="mx-auto flex flex-col items-center justify-center pt-16 md:pt-20 lg:pt-32 ">
      {/* title and subtitle */}
      <div className="flex flex-col items-center justify-center">
        <BarlowText
          text="Precios"
          fontSize="64px"
          className="mb-5 text-center text-black"
        />
        <BarlowText
          text="Trae un amigo y consigue un 20% de descuento en todas las sesiones de depilación. ¡No te lo pierdas!"
          fontSize="26px"
          className="mb-5 text-center text-black"
        />
      </div>
      <div className=" flex flex-col gap-10 md:flex-row md:gap-20 lg:gap-32">
        {/* Woman section with image and accordion */}
        <div className="flex flex-col">
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/prices_woman.avif'
            }
            alt="Woman touching his face with a towel in her head"
            width={500}
            height={500}
            unoptimized
            className="h-full max-h-[430px] w-full object-cover md:max-w-[430px]"
          />
          <div className="max-w-[430px] p-4">
            <Accordion items={accordionWoman} />
          </div>
        </div>
        {/* Men section with image and accordion */}
        <div className="flex flex-col">
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/prices_man.avif'
            }
            alt="Man smiling with a towel in his hands"
            width={500}
            height={500}
            unoptimized
            className=" h-full max-h-[430px] w-full object-cover md:max-w-[430px]"
          />
          <div className="max-w-[430px] p-4">
            <Accordion items={accordionMan} />
          </div>
        </div>
      </div>
    </section>
  )
}
