import { BarlowText } from '@/components/atoms/BarlowText'
import { ILocation } from '@/components/atoms/Svg/ILocation'
import { IMail } from '@/components/atoms/Svg/IMail'
import { IPhone } from '@/components/atoms/Svg/IPhone'
import ContactForm from '@/components/molecules/ContactForm/ContactForm'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Depilacion Laser SHR Lanzarote | Contacto',
  description: 'Tu atencion es nuestra prioridad',
}

export default function ContactPage() {
  return (
    <main>
      <section className="flex flex-col">
        {/* header image */}
        <Image
          src={'/images/contact/contact_background.jpg'}
          alt="laser depilation image"
          layout="responsive"
          width={1384}
          height={420}
          className="max-h-[320px] w-full object-cover"
          unoptimized
        />
        {/* title and subtitle */}
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-8xl mx-auto px-4 xl:px-10">
            <div className="flex flex-col items-center justify-center pt-2 md:pt-10">
              <BarlowText
                text="Contacto"
                fontSize="40px"
                className="text-bold pt-6 md:pt-0"
              />
              <BarlowText
                text="¿Tienes alguna consulta?, ¿Quieres solicitar tu primera cita?, ¡No dudes en contactarnos!"
                fontSize="16px"
                className="text-bold pb-6 pt-2  text-center md:pb-10 md:pt-6"
              />
            </div>
            {/* contact form component */}
            <ContactForm />
          </div>
        </div>
      </section>
      {/* mail + location + phone */}
      <section className="bg-gray flex items-center justify-center pb-10">
        <div className="container mx-auto px-6 pt-6">
          <div className="mx-auto mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <span className="inline-block rounded-full bg-blue-100/80 p-3 text-blue-500">
                {/* mail Icon */}
                <IMail />
              </span>
              {/* mail title */}
              <BarlowText
                text="Correo Electrónico"
                fontSize="16px"
                className="mt-4 text-lg font-medium text-gray-800"
              />
              {/* mail subtitle */}
              <BarlowText
                text="¡Estaremos encantados de antenderte!"
                fontSize="16px"
                className="mt-2 text-gray-500"
              />
              {/* mail link */}
              <Link href="mailto:correoElectronico@gmail.com">
                <BarlowText
                  text="correoElectronico@gmail.com"
                  fontSize="16px"
                  className="mt-2 text-blue-500"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="inline-block rounded-full bg-blue-100/80 p-3 text-blue-500">
                {/* location Icon */}
                <ILocation />
              </span>
              {/* location title */}
              <BarlowText
                text="Ubicación"
                fontSize="16px"
                className="mt-4 text-lg font-medium text-gray-800"
              />
              {/* location subtitle */}
              <BarlowText
                text="¡Tu próximo centro de depilación!"
                fontSize="16px"
                className="mt-2 text-gray-500"
              />
              {/* location link */}
              <Link href="https://www.google.es/maps?q=28.965169+-13.555036">
                <BarlowText
                  text="C/ Manolo Milares 23, 35500"
                  fontSize="16px"
                  className="mt-2 text-blue-500"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="inline-block rounded-full bg-blue-100/80 p-3 text-blue-500">
                {/* phone Icon */}
                <IPhone />
              </span>
              {/* phone title */}
              <BarlowText
                text="Teléfono"
                fontSize="16px"
                className="mt-4 text-lg font-medium text-gray-800"
              />
              {/* phone subtitle */}
              <BarlowText
                text="Lunes a Viernes 9am - 5pm"
                fontSize="16px"
                className="mt-2 text-gray-500"
              />
              {/* phone link */}
              <Link href="tel:+34 693 736 276">
                <BarlowText
                  text="693 736 276"
                  fontSize="16px"
                  className="mt-2 text-blue-500"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
