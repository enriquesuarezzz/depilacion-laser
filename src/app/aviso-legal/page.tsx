import { BarlowText } from '@/components/atoms/BarlowText'
import SectionLayout from '@/components/atoms/SectionLayout/SectionLayout'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Depilacion Laser SHR | Aviso Legal',
  description: 'Aviso Legal',
}

export default function LegalAdvicePage() {
  const data = [
    {
      title: ' 1.Datos Identificativos',
      content:
        'En cumplimiento del Reglamento General de Protección de Datos (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, se reflejan los siguientes datos: La empresa titular del presente dominio web www.depilacionlaser.com.',
    },
    {
      title: '2. Usuarios',
      content:
        'El acceso y/o uso de este portal o sitio web le atribuye la condición de <b>usuario</b>, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso reflejadas en este aviso. Las Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento. En todo caso, para cualquier fin específico se solicitará su consentimiento expreso.',
    },
    {
      title: '3. Uso del portal',
      content: `Nuestra web proporciona acceso a información, servicios, programas o datos en Internet pertenecientes a www.depilacionlaser.com, a los que el <b><b>usuario</b></b> pueda tener acceso. El <b><b>usuario</b></b> asume la responsabilidad del correcto uso del portal, incluido el registro que pueda ser necesario para acceder a ciertos servicios o contenidos. En dicho registro, el <b><b>usuario</b></b> será responsable de proporcionar información veraz y lícita sobre sus datos. Como consecuencia de este registro, al <b><b>usuario</b></b> se le puede proporcionar una contraseña de la que será responsable, comprometiéndose a hacer un uso diligente, ético y confidencial de la misma. El <b>usuario</b> se compromete a hacer un uso adecuado de los contenidos y servicios (tales como servicios de chat, foros de discusión o grupos de noticias) ofrecidos a través del portal, y se abstendrá de utilizarlos, entre otros, para:<ul class="list-inside ml-2"><li> Compartir o difundir información personal de otros usuarios</li> <li> Participar en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público</li> <li> Difundir contenido o propaganda de naturaleza racista, xenófoba, pornográfica-ilegal, terrorista o que atente contra los derechos humanos</li> <li> Causar daños en los sistemas físicos y lógicos del propietario, de sus proveedores o de terceras personas, introducir o difundir virus informáticos u otros sistemas físicos o lógicos susceptibles de causar los daños mencionados anteriormente</li> <li> Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.<br/> <br/> </ul> El propietario del portal se reserva el derecho a retirar todos aquellos comentarios y aportaciones que vulneren el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas, pornográficos, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resulten adecuados o convenientes para su publicación. En cualquier caso, el propietario del portal no será responsable de las opiniones vertidas por los usuarios a través de los foros, chats u otras herramientas de participación.`,
    },
    {
      title: '4. Protección de datos',
      content:
        "El uso de datos personales está definido en base al Reglamento General de Protección de Datos y la legislación española vigente. Con el fin de lograr la máxima transparencia y en base a nuestra política proactiva, le informamos: ¿Por qué solicitamos sus datos? Depilacion Laser SHR Lanzarote informa al cliente que el tratamiento de los datos se realiza con las siguientes finalidades: Llevar a cabo todas las gestiones relacionadas con la elaboración de presupuestos, contratación y prestación de servicios de Depilacion Laser SHR Lanzarote a la empresa a la que pertenece o, en su caso, al interesado que lo solicite. Así como atender y responder a las comunicaciones recibidas y las de prospección comercial para mantener informados a los usuarios de posibles promociones. ¿Qué tipo de datos recopilamos? Datos personales correspondientes a su propia identidad y que sean adecuados, pertinentes, actuales, exactos y verdaderos. A estos efectos, el usuario será el único responsable frente a cualquier daño, directo y/o indirecto, que cause a terceros o a Depilacion Laser SHR Lanzarote por el uso de datos personales de otra persona, o sus propios datos personales cuando sean falsos, incorrectos, no actuales, inadecuados o irrelevantes. Del mismo modo, el usuario que utilice los datos personales de un tercero responderá ante este de la obligación de información establecida en el RGPD cuando los datos personales no hayan sido recopilados del propio interesado, y/o de las consecuencias de no haberle informado. ¿Cómo se recopilan? Uso de formularios para la recopilación de datos personales. En los formularios de contacto disponibles en el sitio web, donde se recopilan datos personales, el usuario debe dar su consentimiento expreso y previo a la aceptación y conocimiento de la política de privacidad completando el campo de verificación 'He leído y acepto la política de privacidad', cuyo contenido puede ser accedido a través del enlace adjunto que se enviará en este aviso legal. Si el campo de verificación no es marcado por el usuario, los datos contenidos en dichos formularios no serán enviados. Compartido con terceros: Los datos no se transferirán a terceros salvo en los casos en que exista una obligación legal. No se prevén transferencias de datos a terceros países. Derechos: Tiene derecho a acceder a sus datos, rectificarlos, suprimirlos, limitarlos y oponerse a su tratamiento en cualquier momento, también puede retirar el consentimiento otorgado y presentar una reclamación ante la autoridad de control (Agencia Española de Protección de Datos, C/ Jorge Juan nº6, 28001 Madrid). Asimismo, Depilacion Laser SHR Lanzarote informa que cumple con la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico y solicitará su consentimiento para el tratamiento de su dirección de correo electrónico con fines comerciales en todo momento.",
    },
    {
      title: '5. PROPIEDAD INTELECTUAL E INDUSTRIAL',
      content:
        'El propietario, ya sea por sí mismo o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su sitio web, así como de los elementos contenidos en él (a título enunciativo, imágenes, sonido, audio, video, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales utilizados, programas de computadora necesarios para su funcionamiento, acceso y uso, etc.). Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, distribución y comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de este sitio web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Depilacion Laser SHR Lanzarote. El USUARIO se compromete a respetar los derechos de propiedad intelectual e industrial de Depilacion Laser SHR Lanzarote. Puede visualizar los elementos del portal e incluso imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, única y exclusivamente, para su uso personal y privado. El USUARIO deberá abstenerse de suprimir, alterar, eludir o manipular cualquier dispositivo de protección o sistema de seguridad que esté instalado en las páginas de Depilacion Laser SHR Lanzarote.',
    },
    {
      title: '6. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD',
      content:
        'Depilacion Laser SHR Lanzarote no será responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que puedan causarse, incluyendo, de manera enunciativa pero no limitativa: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.',
    },
    {
      title: '7. MODIFICACIONES',
      content:
        'Depilacion Laser SHR Lanzarote se reserva el derecho de realizar modificaciones en su portal sin previo aviso, pudiendo cambiar, eliminar o añadir tanto el contenido como los servicios que se ofrecen a través del mismo, así como la forma en que estos se presentan o están ubicados en su portal.',
    },
    {
      title: '8. ENLACES',
      content:
        'En el caso de que en Depilacion Laser SHR Lanzarote. haya enlaces o hipervínculos a otros sitios web, no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso Depilacion Laser SHR Lanzarote. asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, confiabilidad, precisión, amplitud, veracidad, validez o constitucionalidad de cualquier material o información contenida en ninguno de esos hipervínculos o sitios web. Si utiliza los enlaces, acceda a la política de privacidad y aviso legal de la página visitada. Asimismo, la inclusión de estas conexiones externas no implicará ningún tipo de asociación, fusión o participación con las entidades conectadas.',
    },
    {
      title: '9. DERECHO DE EXCLUSIÓN',
      content:
        'Depilacion Laser SHR Lanzarote se reserva el derecho de denegar o retirar el acceso al portal y/o los servicios ofrecidos sin necesidad de previo aviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan las presentes Condiciones Generales de Uso.',
    },
    {
      title: '10. GENERALIDADES',
      content:
        'Se perseguirá el incumplimiento de estas condiciones, así como cualquier uso indebido de su portal, ejerciendo todas las acciones civiles y penales que le puedan corresponder en derecho.',
    },
    {
      title: '11. MODIFICACIÓN DE LAS PRESENTES CONDICIONES Y DURACIÓN',
      content:
        'Depilacion Laser SHR Lanzarote podrá modificar en cualquier momento las condiciones aquí determinadas, siendo debidamente publicadas como aquí aparecen. La vigencia de dichas condiciones dependerá de su exposición y estarán vigentes hasta que sean modificadas por otras debidamente publicadas.',
    },
    {
      title: '12. LEGISLACIÓN APLICABLE Y JURISDICCIÓN',
      content:
        'La relación entre Depilacion Laser SHR Lanzarote y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a la autoridad pertinente.',
    },
  ]
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
          {/* title */}
          <BarlowText
            text={'Aviso Legal'}
            tag="h1"
            fontSize="64px"
            style="bold"
            className="pb-4 text-center"
          />
          {/* map of data, title + content */}
          {data.map(({ title, content }) => (
            <div key={title}>
              <BarlowText text={title} fontSize="24px" className=" pb-8" />
              <BarlowText text={content} fontSize="16px" className=" pb-8" />
            </div>
          ))}
        </div>
      </SectionLayout>
    </main>
  )
}
