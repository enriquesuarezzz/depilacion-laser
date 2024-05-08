import { MulishText } from '@/components/atoms/MulishText'
import ContactForm from '@/components/molecules/Contact/Contact'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Depilacion Laser SHR | Contacto',
  description: 'Contacto',
}

export default function ContactPage() {
  return (
    <div className="relative h-screen">
      <Image
        src={
          process.env.NEXT_PUBLIC_IMAGES_PATH +
          '/images/contact/contact_background.jpg'
        }
        layout="fill"
        objectFit="cover"
        unoptimized
        alt="contact us background image"
        className="opacity-65"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <div className="max-w-8xl mx-auto px-4 xl:px-10">
          <div className="flex flex-col items-center justify-center pt-28">
            <MulishText
              text="Contacto"
              fontSize="40px|30px|20px"
              className="text-bold text-white"
            />
            <MulishText
              text="¿Tienes alguna consulta?, ¿Quieres solicitar tu primera cita?, ¡No dudes en contactarnos!"
              fontSize="16px"
              className="text-bold pb-10 pt-6 text-white"
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
