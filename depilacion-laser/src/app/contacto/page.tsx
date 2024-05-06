import { MulishText } from '@/components/atoms/MulishText'
import SectionLayout from '@/components/atoms/SectionLayout/SectionLayout'
import ContactForm from '@/components/molecules/ContactForm/ContactForm'
import { ImagesSliderComponent } from '@/components/molecules/ImagesSlider.tsx/ImagesSliderComponent'
import { ImagesSlider } from '@/components/molecules/ImagesSlider.tsx/ImagesSliderLogic'
import { Metadata } from 'next'

export const metada: Metadata = {
  title: 'Depilacion Laser SHR | Contacto',
  description: 'Contacto',
}

export default function ContactPage() {
  return (
    <SectionLayout>
      <div className="flex flex-col items-center justify-center pt-28">
        <MulishText text="Contacto" fontSize="40px|30px|20px" className="" />
        <MulishText
          text="¿Tienes alguna consulta?, ¿Quieres solicitar tu primera cita?, ¡No dudes en contactarnos!"
          fontSize="16px"
          className=""
        />
      </div>
      <ContactForm />
    </SectionLayout>
  )
}
