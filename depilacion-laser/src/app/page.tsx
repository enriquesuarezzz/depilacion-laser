import { BarlowText } from '@/components/atoms/BarlowText'
import SectionLayout from '@/components/atoms/SectionLayout/SectionLayout'
import AboutUS from '@/components/molecules/AboutUs/AboutUs'
import { ImagesSliderComponent } from '@/components/molecules/ImagesSlider.tsx/ImagesSliderComponent'
import ReviewsSection from '@/components/molecules/ReviewsSection/ReviewsSection'
import DemoSlider from '@/components/molecules/offers/OffersSwiper'
import TextAndImage from '@/components/organism/TextAndImage/TextAndImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Depilacion Laser Lanzarote | Inicio',
  description: 'Servicio de depilacion laser SHR en Lanzarote',
}

export default function Home() {
  const data = [
    {
      img: `${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/cards_section/card1.jpg'}`,
      boxtitle: '<b>Indolora, Efectiva y Rápida</b>',
      title: '¿Qué es la depilación laser?',
      description:
        'La tecnología SHR ofrece resultados efectivos en la reducción del vello no deseado, incluso en áreas grandes del cuerpo, como piernas, espalda y pecho, utiliza un método de calentamiento gradual, lo que hace que sea mucho menos dolorosa que otros tipos de depilación láser. </br> </br> Es apta para una amplia gama de tonos de piel y tipos de vello, lo que la hace accesible para una variedad más amplia de personas en comparación con otros tipos de depilación láser. La tecnología SHR permite tratamientos más rápidos gracias a su capacidad para barrer áreas más grandes de piel de manera eficiente, lo que reduce el tiempo total de cada sesión. </br> </br> Debido a su enfoque suave y gradual, la depilación láser SHR tiende a causar menos efectos secundarios, como irritación o quemaduras, en comparación con otros métodos de depilación láser. ',
    },
    {
      img: `${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/cards_section/card2.jpg'}`,
      title: '¿Por qué deberías empezar hoy?',
      description:
        '<b>Las ventajas de la depilación láser SHR incluyen: </br> </br> </b> <ul class="list-disc list-inside"><li> <b> Efectividad:</b> Proporciona resultados duraderos al reducir significativamente el crecimiento del vello.</li> <li> <b> Menos dolorosa: </b> Su tecnología de calentamiento gradual la hace más cómoda y tolerable que otros métodos de depilación láser.</li> <li> <b> Versatilidad:</b> Es adecuada para una amplia variedad de tonos de piel y tipos de vello, lo que la hace accesible para más personas.</li> <li> <b> Rapidez: </b> Permite tratamientos más rápidos al cubrir áreas grandes de piel de manera eficiente.</li> <li> <b> Seguridad: </b> Tiende a tener menos efectos secundarios, como irritación o quemaduras, en comparación con otros métodos de depilación láser.</li> </ul>  </br> En resumen, la depilación láser SHR ofrece una combinación única de efectividad, comodidad, versatilidad y seguridad, lo que la convierte en una opción atractiva para la eliminación del vello no deseado.',
    },
    {
      img: `${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/cards_section/card3.jpeg'}`,
      title: '¿La depilación laser SHR duele?',
      description:
        'La depilación láser SHR es conocida por su relativa comodidad durante el tratamiento. Gracias a su tecnología de calentamiento gradual, muchos clientes experimentan solo una sensación de calor suave y tolerable durante las sesiones. Comparada con otros métodos de depilación láser, SHR tiende a ser menos dolorosa, lo que la convierte en una opción popular para aquellos que desean minimizar las molestias asociadas con la eliminación del vello no deseado.',
    },
    {
      img: `${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/cards_section/card4.jpg'}`,
      title: ' ¿Es permanente la depilación laser SHR?',
      description:
        'La depilación láser SHR proporciona una eliminación permanente del vello, pero es posible que algunos folículos pilosos vuelvan a producir vello con el tiempo debido a diversos factores, como cambios hormonales, genéticos, reacciones a medicamentos o enfermedades. Por lo tanto, es normal que algunas personas necesiten sesiones de mantenimiento anuales o cada dos años para eliminar el vello que pueda volver a crecer.',
    },
  ]
  return (
    <main className="h-full w-full">
      <ImagesSliderComponent />
      <SectionLayout>
        <div className=" pb-6 pt-6">
          {data.map((item, index) => (
            <div key={index} id={'card' + index}>
              <TextAndImage image={item.img} reverse={index % 2 == 0}>
                {/* contenedor */}
                <div className="flex flex-col md:max-w-[50%] md:px-4">
                  {/* cajonsito */}
                  <div className="mb-2 mt-4 flex h-fit w-fit items-center justify-center rounded-[4px] py-1">
                    <BarlowText
                      text={
                        data[0].boxtitle || '<b>Indolora, Efectiva y Rápida</b>'
                      }
                      fontSize="16px"
                      className=" text-black"
                    />
                  </div>
                  <div className="flex-col md:mt-2">
                    {/* titular */}
                    <BarlowText
                      text={item.title}
                      fontSize="40px"
                      className="text-dark-gray mb-2"
                    />
                    {/* descripcion */}
                    <BarlowText
                      text={item.description}
                      className="text-gray leading-6 opacity-60"
                      fontSize="16px"
                    />
                  </div>
                </div>
              </TextAndImage>
            </div>
          ))}
        </div>
        <AboutUS />
        <DemoSlider />
        <ReviewsSection />
      </SectionLayout>
    </main>
  )
}
