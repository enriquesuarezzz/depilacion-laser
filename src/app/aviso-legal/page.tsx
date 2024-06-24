import { BarlowText } from '@/components/atoms/BarlowText'
import SectionLayout from '@/components/atoms/SectionLayout/SectionLayout'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Depilacion Laser SHR | Aviso Legal',
  description: 'Aviso Legal',
}

export default function LegalAdvicePage() {
  return (
    <main>
      {/* Background image */}
      <Image
        src={'/images/contact/contact_background.jpg'}
        alt="laser depilation image"
        layout="responsive"
        width={1384}
        height={420}
        className="max-h-[320px] w-full object-cover"
        unoptimized
      />
      {/* Content */}
      <SectionLayout>
        <div className="mx-auto max-w-[1000px] items-center justify-center px-4">
          <BarlowText
            text={'Aviso Legal'}
            tag="h1"
            fontSize="64px"
            style="bold"
            className="pb-4 text-center"
          />
          {/* Title 1 */}
          <BarlowText
            text={'1.Datos Identificativos'}
            fontSize="24px"
            className=" pb-8"
          />
          {/* Content 1 */}
          <BarlowText
            text={
              'En cumplimiento del Reglamento General de Protección de Datos (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, se reflejan los siguientes datos: La empresa titular del presente dominio web www.depilacionlaser.com.'
            }
            fontSize="16px"
            className=" pb-8"
          />

          {/* Title 2 */}
          <BarlowText text={'2. Usuarios'} fontSize="24px" className=" pb-8" />
          {/* Content 2 */}
          <BarlowText
            text={
              'El acceso y/o uso de este portal o sitio web le atribuye la condición de <b>usuario</b>, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso reflejadas en este aviso. Las Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento. En todo caso, para cualquier fin específico se solicitará su consentimiento expreso.'
            }
            fontSize="16px"
            className=" pb-8"
          />

          {/* Title 3 */}
          <BarlowText
            text={'3. Uso del portal'}
            fontSize="24px"
            className=" pb-8"
          />
          {/* Content 3 */}
          <BarlowText
            text={
              'Nuestra web proporciona acceso a información, servicios, programas o datos en Internet pertenecientes a www.depilacionlaser.com, a los que el <b><b>usuario</b></b> pueda tener acceso. El <b><b>usuario</b></b> asume la responsabilidad del correcto uso del portal, incluido el registro que pueda ser necesario para acceder a ciertos servicios o contenidos. En dicho registro, el <b><b>usuario</b></b> será responsable de proporcionar información veraz y lícita sobre sus datos. Como consecuencia de este registro, al <b><b>usuario</b></b> se le puede proporcionar una contraseña de la que será responsable, comprometiéndose a hacer un uso diligente, ético y confidencial de la misma. El <b>usuario</b> se compromete a hacer un uso adecuado de los contenidos y servicios (tales como servicios de chat, foros de discusión o grupos de noticias) ofrecidos a través del portal, y se abstendrá de utilizarlos, entre otros, para:<ul class="list-inside ml-2"><li> Compartir o difundir información personal de otros usuarios</li> <li> Participar en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público</li> <li> Difundir contenido o propaganda de naturaleza racista, xenófoba, pornográfica-ilegal, terrorista o que atente contra los derechos humanos</li> <li> Causar daños en los sistemas físicos y lógicos del propietario, de sus proveedores o de terceras personas, introducir o difundir virus informáticos u otros sistemas físicos o lógicos susceptibles de causar los daños mencionados anteriormente</li> <li> Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.<br/> <br/> </ul> El propietario del portal se reserva el derecho a retirar todos aquellos comentarios y aportaciones que vulneren el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas, pornográficos, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resulten adecuados o convenientes para su publicación. En cualquier caso, el propietario del portal no será responsable de las opiniones vertidas por los usuarios a través de los foros, chats u otras herramientas de participación.'
            }
            fontSize="16px"
            className=" pb-8"
          />
          {/* Title 4 */}
          <BarlowText
            text={'4. Protecciónd de datos'}
            fontSize="24px"
            className=" pb-8"
          />
          {/* Content 4 */}
          <BarlowText text={''} fontSize="16px" className=" pb-8" />
        </div>
      </SectionLayout>
    </main>
  )
}
