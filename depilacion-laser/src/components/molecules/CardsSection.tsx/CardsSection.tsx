'use client'
import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { TracingBeam } from './CardsSectionLogic'

export function CardsSection() {
  return (
    <TracingBeam className="px-6">
      <div className="relative mx-auto max-w-2xl pt-4 antialiased">
        {dummyContent.map((item, index) => (
          <div
            key={`content-${index}`}
            id={`card-${index.toString()}`}
            className="mb-10"
          >
            <h2 className="mb-4 w-fit rounded-full bg-black px-4 py-1 text-sm text-white">
              {item.badge}
            </h2>

            <p className={twMerge('mb-4 text-xl')}>{item.title}</p>

            <div className="prose  prose-sm dark:prose-invert text-sm">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="mb-10 rounded-lg object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}

const dummyContent = [
  {
    title: 'Indolora, Efectiva y Rápida',
    description: (
      <>
        <p>
          La tecnología SHR ofrece resultados efectivos en la reducción del
          vello no deseado, incluso en áreas grandes del cuerpo, como piernas,
          espalda y pecho, utiliza un método de calentamiento gradual, lo que
          hace que sea mucho menos dolorosa que otros tipos de depilación láser.
          Es apta para una amplia gama de tonos de piel y tipos de vello, lo que
          la hace accesible para una variedad más amplia de personas en
          comparación con otros tipos de depilación láser. La tecnología SHR
          permite tratamientos más rápidos gracias a su capacidad para barrer
          áreas más grandes de piel de manera eficiente, lo que reduce el tiempo
          total de cada sesión. Debido a su enfoque suave y gradual, la
          depilación láser SHR tiende a causar menos efectos secundarios, como
          irritación o quemaduras, en comparación con otros métodos de
          depilación láser.
        </p>
        <br />
      </>
    ),
    badge: '¿Por qué depilación laser SHR?',
    image: `/images/card_section/card1.jpg`,
  },
  {
    title: '¿Por qué deberías empezar hoy?',
    description: (
      <>
        <p>
          Las ventajas de la depilación láser SHR incluyen: <br /> <br />
          <b> Efectividad </b>: Proporciona resultados duraderos al reducir
          significativamente el crecimiento del vello. <br /> <br />{' '}
          <b>Menos dolorosa:</b> Su tecnología de calentamiento gradual la hace
          más cómoda y tolerable que otros métodos de depilación láser. <br />{' '}
          <br />
          <b>Versatilidad:</b> Es adecuada para una amplia variedad de tonos de
          piel y tipos de vello, lo que la hace accesible para más personas.{' '}
          <br /> <br /> <b>Rapidez:</b> Permite tratamientos más rápidos al
          cubrir áreas grandes de piel de manera eficiente. <br /> <br />{' '}
          <b>Seguridad:</b> Tiende a tener menos efectos secundarios, como
          irritación o quemaduras, en comparación con otros métodos de
          depilación láser. <br /> <br />
          En resumen, la depilación láser SHR ofrece una combinación única de
          efectividad, comodidad, versatilidad y seguridad, lo que la convierte
          en una opción atractiva para la eliminación del vello no deseado.
        </p>
      </>
    ),
    badge: 'Ventajas',

    image: '/images/card_section/card2.jpg',
  },
  {
    title: '¿Todavía tienes dudas?',
    description: (
      <>
        <p>
          <b> ¿La depilación laser SHR duele? </b> <br /> <br />
          La depilación láser SHR es conocida por su relativa comodidad durante
          el tratamiento. Gracias a su tecnología de calentamiento gradual,
          muchos clientes experimentan solo una sensación de calor suave y
          tolerable durante las sesiones. Comparada con otros métodos de
          depilación láser, SHR tiende a ser menos dolorosa, lo que la convierte
          en una opción popular para aquellos que desean minimizar las molestias
          asociadas con la eliminación del vello no deseado. <br /> <br />
        </p>

        <p>
          <b> ¿Es permanente la depilación laser SHR? </b> <br /> <br />
          La depilación láser SHR proporciona una eliminación permanente del
          vello, pero es posible que algunos folículos pilosos vuelvan a
          producir vello con el tiempo debido a diversos factores, como cambios
          hormonales, genéticos, reacciones a medicamentos o enfermedades. Por
          lo tanto, es normal que algunas personas necesiten sesiones de
          mantenimiento anuales o cada dos años para eliminar el vello que pueda
          volver a crecer.
        </p>
      </>
    ),
    badge: 'Preguntas frecuentes',
    image: '/images/card_section/card3.jpeg',
  },
]
