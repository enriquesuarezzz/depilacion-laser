import { BarlowText } from '@/components/atoms/BarlowText'
import Image from 'next/image'

export default function PricesSection() {
  return (
    <section className="flex flex-col items-center justify-center">
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
      <div className="flex">
        {/* Woman section */}
        <div className="flex flex-col"></div>
        <Image
          src={
            process.env.NEXT_PUBLIC_IMAGES_PATH +
            '/images/prices_cards_section/prices_woman.jpg'
          }
          alt="Woman depilating her face"
          width={500}
          height={500}
          className="h-[500px] w-[500px] object-cover"
        />
        {/* Men section */}
        <div className="flex flex-col">
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGES_PATH +
              '/images/prices_cards_section/prices_man.jpg'
            }
            alt="Woman depilating her face"
            width={500}
            height={500}
            className="h-[500px] w-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}
