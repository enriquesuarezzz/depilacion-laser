import { BarlowText } from '@/components/atoms/BarlowText'
import React from 'react'

interface AccordionProps {
  woman?: boolean
  man?: boolean
}

const AccordionContent: React.FC<AccordionProps> = ({ woman, man }) => {
  //prices data
  const Prices = {
    man: [
      {
        title: 'Zonas Pequeñas',
        price: '12€',
        description:
          'GENITALES, NUCA, CUELLO, OREJAS, ENTRECEJO, MANOS, MEJILLAS, PIES, LÍNEA ALBA, AREOLAS, LABIO SUPERIOR, MENTÓN, SIENES O PATILLAS',
      },
      {
        title: 'Zonas Medianas',
        price: '25€',
        description:
          'FACIAL COMPLETO, LÍNEA INTERGLÚTEA, HOMBROS, ANTEBRAZOS, PERFILADO DE BARBA, PUBIS O INGLES BRASILEÑAS',
      },
      {
        title: 'Zonas Grandes',
        price: '35€',
        description:
          'GLÚTEOS, BRAZOS COMPLETOS, ESPALDA, LUMBOSACRA, TÓRAX, ABDOMEN, ZONA ÍNTIMA COMPLETA O MEDIAS PIERNAS',
      },
    ],
    woman: [
      {
        title: 'Zonas Pequeñas',
        price: '10€',
        description:
          'AXILAS, LABIO SUPERIOR, MENTÓN, GENITALES, LÍNEA ALBA, INGLES, PIES, AREOLAS, CUELLO, PATILLAS, MANOS, ESCOTE, ENTRECEJO, NUCA, MEJILLAS, SIENES U OREJAS',
      },
      {
        title: 'Zonas Medianas',
        price: '20€',
        description:
          'FACIAL COMPLETO, INGLES BRASILEÑAS, ANTEBRAZOS, PUBIS U HOMBROS',
      },
      {
        title: 'Zonas Grandes',
        price: '30€',
        description:
          'MEDIAS PIERNAS, ZONA INTIMA COMPLETA, BRAZOS, GLÚTEOS, LUMBOSACRA, ABDOMEN, TÓRAX O ESPALDA',
      },
    ],
  }

  return (
    <section className="flex flex-col gap-6">
      {/* Create an accordion based on the woman props using the information from the Prices array */}
      {/* map of the items of the Prices array */}
      {woman &&
        Prices.woman.map((item, index) => (
          <div key={index} className="flex flex-row p-4">
            <div className="flex flex-col">
              {/* title */}
              <BarlowText
                text={item.title}
                fontSize="26px"
                className="text-gray-500"
              />
              {/* price */}
              <BarlowText
                text={item.price}
                fontSize="40px"
                className="font-bold text-blue-500"
              />
            </div>
            {/* description */}
            <BarlowText
              text={item.description}
              fontSize="14px"
              className="flex items-center justify-center pl-4 text-center text-gray-400"
            />
          </div>
        ))}
      {/* Create an accordion based on the man props using the information from the Prices array */}
      {man &&
        Prices.man.map((item, index) => (
          <div key={index} className="flex flex-row p-4">
            {/* title  */}
            <div className="flex flex-col">
              <BarlowText
                text={item.title}
                fontSize="26px"
                className="text-gray-500"
              />
              {/* price */}
              <BarlowText
                text={item.price}
                fontSize="40px"
                className=" font-bold text-blue-500"
              />
            </div>
            {/* description */}
            <BarlowText
              text={item.description}
              fontSize="14px"
              className="flex items-center justify-center pl-4 text-center text-gray-400"
            />
          </div>
        ))}
    </section>
  )
}

export default AccordionContent
