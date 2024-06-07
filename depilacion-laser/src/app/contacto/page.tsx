import { BarlowText } from '@/components/atoms/BarlowText'
import ContactForm from '@/components/molecules/Contact/Contact'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Depilacion Laser Lanzarote | Contacto',
  description: 'Tu atencion es nuestra prioridad',
}

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col">
        <Image
          src={'/images/contact/contact_background.jpg'}
          alt="long beach club sign"
          layout="responsive"
          width={1384}
          height={420}
          className="w-full"
          unoptimized
        />
        <div className=" flex flex-col items-center justify-center  bg-opacity-50">
          <div className="max-w-8xl mx-auto px-4 xl:px-10">
            <div className="flex flex-col items-center justify-center pt-28 md:pt-16">
              <BarlowText
                text="Contacto"
                fontSize="40px"
                className="text-bold pt-6 text-white md:pt-0"
              />
              <BarlowText
                text="¿Tienes alguna consulta?, ¿Quieres solicitar tu primera cita?, ¡No dudes en contactarnos!"
                fontSize="16px"
                className="text-bold pb-2 pt-2 text-white md:pb-10 md:pt-6"
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <section className="bg-gray flex items-center justify-center">
        <div className="container mx-auto px-6 pt-6">
          <div className="mx-auto mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <span className="inline-block rounded-full bg-blue-100/80 p-3 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <BarlowText
                text="Correo Electrónico"
                fontSize="16px"
                className="mt-4 text-lg font-medium text-gray-800"
              />
              <BarlowText
                text="¡Estaremos encantados de antenderte!"
                fontSize="16px"
                className="mt-2 text-gray-500"
              />
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <BarlowText
                text="Ubicación"
                fontSize="16px"
                className="mt-4 text-lg font-medium text-gray-800"
              />
              <BarlowText
                text="¡Tu próximo centro de depilación!"
                fontSize="16px"
                className="mt-2 text-gray-500"
              />
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <BarlowText
                text="Teléfono"
                fontSize="16px"
                className="mt-4 text-lg font-medium text-gray-800"
              />
              <BarlowText
                text="Lunes a Viernes 9am - 5pm"
                fontSize="16px"
                className="mt-2 text-gray-500"
              />
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
    </>
  )
}
