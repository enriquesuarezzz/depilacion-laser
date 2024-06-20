import { BarlowText } from '@/components/atoms/BarlowText'
import Image from 'next/image'
import Accordion from '../accordion/accordion'

export default function PricesSection() {
  const accordionWoman = [
    {
      title: 'Precios woman',
      content: 'cara 30, cara 40, cara 50',
    },
  ]
  const accordionMan = [
    {
      title: 'Precios men',
      content: 'pecho 30, pecho 40, hombro 50',
    },
  ]
  return (
    <section className="flex flex-col items-center justify-center">
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
      <div className="flex flex-col items-center justify-center gap-32 md:flex-row">
        {/* Woman section */}
        <div className="flex flex-col">
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/prices_woman.avif'
            }
            alt="Woman touching his face with a towel in her head"
            width={500}
            height={500}
            unoptimized
            className="h-[430px] w-[430px] object-cover"
          />
          <div className="p-4">
            <Accordion items={accordionWoman} />
          </div>
        </div>
        {/* Men section */}
        <div className="flex  flex-col">
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/prices_man.avif'
            }
            alt="Man smiling with a towel in his hands"
            width={500}
            height={500}
            unoptimized
            className="h-full max-h-[430px] w-full max-w-[430px] object-cover "
          />
          <div className="p-4">
            <Accordion items={accordionMan} />
          </div>
        </div>
      </div>
    </section>
  )
}
