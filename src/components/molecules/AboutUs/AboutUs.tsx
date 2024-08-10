import { BarlowText } from '@/components/atoms/BarlowText'
import { IVerified } from '@/components/atoms/Svg/IVerified'
import Image from 'next/image'

interface AboutUsProps {
  title: string
  description: string
}

export default function AboutUs() {
  const features = [
    {
      title: 'Profesionalidad  ',
      description: 'Curso en Estética Profesional',
    },
    {
      title: '5 años de Experiencia ',
      description: '2000 depilaciones y más de 200 personas',
    },
    {
      title: 'Última tecnología',
      description: 'Nuestra máquina posee las mejores características',
    },
  ]

  return (
    <section>
      <div
        id="about_us_section"
        className="flex flex-col items-center justify-center pt-4 md:pt-10"
      >
        {/* Image */}
        <Image
          src={'/images/about_us.avif'}
          alt="Our Specialist performing a depilation"
          width={1200}
          height={600}
          unoptimized
          className="max-h-[700px] object-contain pb-10 md:pb-16"
        />
        {/* Features */}
        <div className="md:divide-dark-gray flex flex-col gap-4 md:flex-row md:divide-x lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-row items-center gap-4 py-3`}
            >
              {/* Icon */}
              <IVerified className="ml-2 mt-2 size-6 shrink-0 lg:size-11" />
              {/* Text */}
              <div className="flex flex-col ">
                <BarlowText
                  text={feature.title}
                  fontSize="32px"
                  className="text-dark-gray whitespace-nowrap"
                />
                <BarlowText
                  text={feature.description}
                  fontSize="16px"
                  className="text-dark-gray"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
