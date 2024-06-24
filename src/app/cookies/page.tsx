import { BarlowText } from '@/components/atoms/BarlowText'
import SectionLayout from '@/components/atoms/SectionLayout/SectionLayout'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Depilacion Laser Lanzarote | Cookies',
  description: 'Servicio de depilacion laser SHR en Lanzarote',
}

export default function CookiesPage() {
  return (
    <main>
      <Image
        src={'/images/contact/contact_background.jpg'}
        alt="laser depilation image"
        layout="responsive"
        width={1384}
        height={420}
        className="max-h-[320px] w-full object-cover"
        unoptimized
      />
      <SectionLayout>
        <div className="mx-auto max-w-[1000px] items-center justify-center px-4">
          {/* main title */}
          <BarlowText
            text={'Política de Cookies'}
            fontSize="64px"
            style="bold"
            className=" pb-4 text-center"
          />
          {/* main description */}
          <BarlowText
            text={
              'Una Cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contenga y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario. <br/> <br/> Las cookies son esenciales para el funcionamiento de internet, aportando innumerables ventajas en la prestación de servicios interactivos, facilitándole la navegación y usabilidad de nuestra web. <br/> <br/>  La información que le proporcionamos a continuación, le ayudará a comprender los diferentes tipos de cookies:'
            }
            fontSize="16px"
            className=" pb-8"
          />

          {/* cookies table */}
          <div className="relative z-30 flex overflow-x-auto pt-0">
            <table className=" w-full min-w-[800px] border border-black  text-left">
              <tbody>
                {/* cookies table title */}
                <tr className="border border-black">
                  <td colSpan={3} className="px-2 py-1  text-center">
                    <BarlowText
                      text={'TIPOS DE COOKIES'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                </tr>
                {/* row 1 */}
                <tr className="border  border-black">
                  <td rowSpan={2} className="border border-black px-2 py-1">
                    <BarlowText
                      text={'SEGÚN LA ENTIDAD QUE LAS GESTIONE'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                  <td className="border border-black px-2 py-1">
                    <BarlowText
                      text={'Cookies propias'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <BarlowText
                      text={
                        'Son aquellas que se recaban por el propio editor para prestar el servicio solicitado por el usuario.'
                      }
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                </tr>
                <tr className="border   border-black">
                  <td className="border border-black px-2 py-1">
                    <BarlowText
                      text={'Cookies propias'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <BarlowText
                      text={
                        'Son aquellas que son recabadas y gestionadas por un tercero, estas no se pueden considerar propias.'
                      }
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                </tr>
                {/* row 2 */}
                <tr className="border  border-black">
                  <td rowSpan={2} className="border border-black px-2 py-1">
                    <BarlowText
                      text={
                        'SEGÚN EL PLAZO DE TIEMPO QUE PERMANEZCAN ACTIVADAS'
                      }
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                  <td className="border border-black px-2 py-1">
                    <BarlowText
                      text={'Cookies de sesión'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <BarlowText
                      text={
                        'Recaban datos mientras el usuario navega por la red con la finalidad de prestar el servicio solicitado.'
                      }
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                </tr>
                <tr className="border   border-black">
                  <td className="border border-black px-2 py-1">
                    <BarlowText
                      text={'Cookies persistentes'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <BarlowText
                      text={
                        'Se almacenan en el terminal y la información obtenida, será utilizada por el responsable de la cookie con la finalidad de prestar el servicio solicitado.'
                      }
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                </tr>
                {/* row 3 */}
                <tr className="border  border-black">
                  <td rowSpan={5} className="border border-black px-2 py-1">
                    <BarlowText
                      text={'SEGÚN SU FINALIDAD'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                  <td className="border border-black px-2 py-1">
                    <BarlowText
                      text={'Cookies técnicas'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <BarlowText
                      text={
                        'Son las necesarias para la correcta navegación por la web.'
                      }
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                </tr>
                <tr className="border   border-black">
                  <td className="border border-black px-2 py-1">
                    <BarlowText
                      text={'Cookies de personalización'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <BarlowText
                      text={
                        'Permiten al usuario las características (idioma) para la navegación por la website.'
                      }
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                </tr>
                <tr className="border   border-black">
                  <td className="border border-black px-2 py-1">
                    <BarlowText
                      text={'Cookies de análisis'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <BarlowText
                      text={
                        'Permiten al prestador el análisis vinculado a la navegación realizada por el usuario, con la finalidad de llevar un seguimiento de uso de la página web así como realizar estadísticas de los contenidos más visitados, número de visitantes, etc.'
                      }
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                </tr>
                <tr className="border   border-black">
                  <td className="border border-black px-2 py-1">
                    <BarlowText
                      text={'Cookies publicitarias'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <BarlowText
                      text={
                        'Permiten al editor incluir en la web espacios publicitarios, según el contenido de la propia web.'
                      }
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                </tr>
                <tr className="border   border-black">
                  <td className="border border-black px-2 py-1">
                    <BarlowText
                      text={'Cookies de publicidad comportamental'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <BarlowText
                      text={
                        'Permiten al editor incluir en la página web espacios publicitarios según la información obtenida a través de los hábitos de navegación del usuario.'
                      }
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 text-center"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* after table */}
          <div className="flex h-full w-full flex-col gap-4">
            <BarlowText
              text={
                'Según lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), ------- informa de las cookies utilizadas en nuestra website:'
              }
              fontSize="16px"
              className=" pb-4 pt-4"
            />
          </div>
          {/* Table cookies 2 */}
          <div className="relative z-30 flex overflow-x-auto pt-0">
            <table className=" w-full min-w-[800px] border border-black text-left ">
              <tbody>
                <tr className=" border border-black">
                  <td
                    colSpan={2}
                    rowSpan={2}
                    className="px-2 py-1  text-center"
                  ></td>
                  <td
                    colSpan={4}
                    className="border border-black  px-2 py-1 text-center"
                  >
                    <BarlowText
                      text={'TIPO DE COOKIES'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 pt-4"
                    />
                  </td>
                </tr>
                {/* Option 1 */}
                <tr className=" border border-black">
                  <td
                    colSpan={1}
                    className="border border-black px-2 py-1 text-center"
                  >
                    <BarlowText
                      text={'Cookies propias'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 pt-4"
                    />
                  </td>
                  <td
                    colSpan={1}
                    className="border border-black px-2 py-1 text-center"
                  >
                    <BarlowText
                      text={'Cookies de terceros'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 pt-4"
                    />
                  </td>
                  <td
                    colSpan={1}
                    className="border border-black px-2 py-1 text-center"
                  >
                    <BarlowText
                      text={'Cookies de sesión'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 pt-4"
                    />
                  </td>
                  <td
                    colSpan={1}
                    className="border border-black px-2 py-1 text-center"
                  >
                    <BarlowText
                      text={'Cookies de sesión'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 pt-4"
                    />
                  </td>
                </tr>
                {/* Options */}
                <tr className=" border border-black">
                  <td
                    colSpan={1}
                    rowSpan={6}
                    className="border border-black px-2 py-1 text-center"
                  >
                    <BarlowText
                      text={
                        'F <br /> I<br /> N<br /> A<br /> L<br /> I<br /> D<br /> A<br />D'
                      }
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 pt-4"
                    />
                  </td>
                </tr>
                {/* First */}
                <tr className=" border border-black">
                  <td className="border border-black px-2 py-1 text-center">
                    <BarlowText
                      text={'Cookies técnicas'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 pt-4"
                    />
                  </td>
                  <td className="border border-black px-2 py-1 text-center">
                    √
                  </td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                </tr>
                {/* Second */}
                <tr className=" border border-black">
                  <td className="border border-black px-2 py-1 text-center">
                    <BarlowText
                      text={'Cookies de personalización'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 pt-4"
                    />
                  </td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                </tr>
                {/* Third */}
                <tr className=" border border-black">
                  <td className="border border-black px-2 py-1 text-center">
                    <BarlowText
                      text={'Cookies de análisis'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 pt-4"
                    />
                  </td>
                  <td className="border border-black px-2 py-1 text-center">
                    √
                  </td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                </tr>
                {/* Fourth */}
                <tr className=" border border-black">
                  <td className="border border-black px-2 py-1 text-center">
                    <BarlowText
                      text={'Cookies publicitarias'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 pt-4"
                    />
                  </td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                </tr>
                {/* Fifth */}
                <tr className=" border border-black">
                  <td className="border border-black px-2 py-1 text-center">
                    <BarlowText
                      text={'Cookies de publicidad comportamental'}
                      fontSize="16px"
                      style="bold"
                      className=" pb-4 pt-4"
                    />
                  </td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                  <td className="border border-black px-2 py-1 text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex h-full w-full flex-col gap-4">
            <BarlowText
              text={
                'Asimismo,------- informa al usuario de que tiene la posibilidad de configurar su navegador de modo que se le informe de la recepción de cookies, pudiendo, si así lo desea, impedir que sean instaladas en su disco duro. <br/> <br/> A continuación le proporcionamos los enlaces de diversos navegadores, a través de los cuales podrá realizar dicha configuración:'
              }
              fontSize="16px"
              className=" pb-4 pt-4"
            />
          </div>
          {/* Browsers */}
          <div className="flex h-full w-full flex-col gap-4">
            <BarlowText
              text={
                'Firefox <br/> <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank"><u class="transition-all duration-300 underline-offset-4"></u>https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we</a> <br/> <br/> Chrome <br/> <a href="https://support.google.com/chrome/bin/answer.py?hl=es&answer=95647" target="_blank"><u class="transition-all duration-300 underline-offset-4"></u>https://support.google.com/chrome/bin/answer.py?hl=es&answer=95647</a> <br/> <br/> Explorer <br/> <a href="https://windows.microsoft.com/es-es/internet-explorer/delete-manage-cookies#ie=ie-10" target="_blank"><u class="transition-all duration-300 underline-offset-4"></u>https://windows.microsoft.com/es-es/internet-explorer/delete-manage-cookies#ie=ie-10</a> <br/> <br/> Safari <br/> <a href="https://support.apple.com/kb/ph5042" target="_blank"><u class="transition-all duration-300 underline-offset-4"></u>https://support.apple.com/kb/ph5042</a> <br/> <br/> Opera <br/> <a href=" https://help.opera.com/Windows/11.50/es-ES/cookies.html" target="_blank"><u class="transition-all duration-300 underline-offset-4"></u> https://help.opera.com/Windows/11.50/es-ES/cookies.html</a>  '
              }
              fontSize="16px"
              className=" pb-4 pt-4"
            />
          </div>
        </div>
      </SectionLayout>
    </main>
  )
}
