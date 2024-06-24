import { BarlowText } from '@/components/atoms/BarlowText'
import React from 'react'

interface AccordionProps {
  woman?: boolean
  man?: boolean
}

const AccordionContent: React.FC<AccordionProps> = ({ woman, man }) => {
  const Prices = {
    man: [
      {
        title: 'Zonas Pequeñas',
        price: '10€',
        description:
          'ENTRECEJO, NUCA, AXILAS, MANOS, LABIO SUPERIOR, PIES, PATILLAS, INGLES, OREJAS, MEJILLAS, CUELLO O MENTON',
      },
      {
        title: 'Zonas Medianas',
        price: '20€',
        description:
          'ENTRECEJO, NUCA, AXILAS, MANOS, LABIO SUPERIOR, PIES, PATILLAS, INGLES, OREJAS, MEJILLAS, CUELLO O MENTON',
      },
      {
        title: 'Zonas Grandes',
        price: '30€',
        description:
          'ENTRECEJO, NUCA, AXILAS, MANOS, LABIO SUPERIOR, PIES, PATILLAS, INGLES, OREJAS, MEJILLAS, CUELLO O MENTON',
      },
    ],
    woman: [
      {
        title: 'Zonas Pequeñasss',
        price: '10€',
        description:
          'ENTRECEJO, NUCA, AXILAS, MANOS, LABIO SUPERIOR, PIES, PATILLAS, INGLES, OREJAS, MEJILLAS, CUELLO O MENTON',
      },
      {
        title: 'Zonas Medianas',
        price: '20€',
        description:
          'ENTRECEJO, NUCA, AXILAS, MANOS, LABIO SUPERIOR, PIES, PATILLAS, INGLES, OREJAS, MEJILLAS, CUELLO O MENTON',
      },
      {
        title: 'Zonas Grandes',
        price: '30€',
        description:
          'ENTRECEJO, NUCA, AXILAS, MANOS, LABIO SUPERIOR, PIES, PATILLAS, INGLES, OREJAS, MEJILLAS, CUELLO O MENTON',
      },
    ],
  }

  return (
    <section className="flex flex-col gap-6">
      {/* Create an accordion based on the woman and man props using the information from the Prices array */}
      {woman &&
        Prices.woman.map((item, index) => (
          <div key={index} className="flex flex-row p-4">
            <div className="flex flex-col">
              <BarlowText
                text={item.title}
                fontSize="32px"
                className="text-gray-500"
              />
              <BarlowText
                text={item.price}
                fontSize="40px"
                className=" font-bold text-blue-500"
              />
            </div>
            <BarlowText
              text={item.description}
              fontSize="16px"
              className="flex items-center justify-center text-center text-gray-400"
            />
          </div>
        ))}
      {man &&
        Prices.man.map((item, index) => (
          <div key={index} className="flex flex-row p-4">
            <div className="flex flex-col">
              <BarlowText
                text={item.title}
                fontSize="32px"
                className="text-gray-500"
              />
              <BarlowText
                text={item.price}
                fontSize="40px"
                className=" font-bold text-blue-500"
              />
            </div>
            <BarlowText
              text={item.description}
              fontSize="16px"
              className="flex items-center justify-center text-center text-gray-400"
            />
          </div>
        ))}
    </section>
  )
}

export default AccordionContent
