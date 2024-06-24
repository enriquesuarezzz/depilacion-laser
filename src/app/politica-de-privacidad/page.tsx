import { BarlowText } from '@/components/atoms/BarlowText'
import SectionLayout from '@/components/atoms/SectionLayout/SectionLayout'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Depilacion Laser Lanzarote | Cookies',
  description: 'Servicio de depilacion laser SHR en Lanzarote',
}

export default function PrivacyPolicyPage() {
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
            text={'Política de privacidad'}
            tag="h1"
            fontSize="64px"
            style="bold"
            className="pb-4 text-center"
          />
          {/* Title 1 */}
          <BarlowText
            text={
              '1.Información Información del Responsable del Tratamiento de Datos '
            }
            fontSize="24px"
            className=" pb-8"
          />
          {/* Content 1 */}
          <BarlowText
            text={
              'Nombre del Responsable: Valeria Garritano <br/> Correo electrónico: <a class="hover:underline text-blue-300 hover:text-blue-500" href="mailto:valeriagarritano@gmail.com">valeriagarritano@gmail.com</a>'
            }
            fontSize="16px"
            className=" pb-8"
          />
          {/* Title 2 */}
          <BarlowText
            text={'2. Datos Personales Recopilados '}
            fontSize="24px"
            className=" pb-8"
          />
          {/* Content 2 */}
          <BarlowText
            text={
              'Recopilamos los siguientes datos personales de nuestros clientes a través de formularios en línea y comunicaciones por correo electrónico:'
            }
            fontSize="16px"
            className=" pb-8"
          />
          <BarlowText
            text={
              '<ul class="list-inside"><li>Nombre completo</li><li>Dirección de correo electrónico</li><li>Número de teléfono</li><li>Información necesaria para la facturación y pago</li></ul>'
            }
            fontSize="16px"
            className=" pb-8"
          />
          {/* Title 3 */}
          <BarlowText
            text={'3. Finalidad del Tratamiento de Datos  '}
            fontSize="24px"
            className=" pb-8"
          />
          {/* Content 3 */}
          <BarlowText
            text={
              'Utilizamos los datos personales recopilados para las siguientes finalidades:  <br/> <br/> <ul class="list-inside"><li>Procesar y gestionar los servicios contratados por nuestros clientes.</li><li>Mantener contacto y comunicación relacionada con los servicios.</li><li>Cumplir con obligaciones legales y fiscales.</li></ul>'
            }
            fontSize="16px"
            className=" pb-8"
          />
          {/* Title 4 */}
          <BarlowText
            text={'4. Base Legal para el Tratamiento de Datos '}
            fontSize="24px"
            className=" pb-8"
          />
          {/* Content 4 */}
          <BarlowText
            text={
              'El tratamiento de datos personales se basa en el consentimiento explícito del usuario/cliente para los fines específicos descritos anteriormente. '
            }
            fontSize="16px"
            className=" pb-8"
          />
          {/* Title 5 */}
          <BarlowText
            text={'5. Uso de Cookies y Tecnologías Similares '}
            fontSize="24px"
            className=" pb-8"
          />
          {/* Content 5 */}
          <BarlowText
            text={
              'Utilizamos cookies en nuestro sitio web para mejorar la experiencia del usuario y recopilar datos estadísticos sobre el uso del sitio. Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador. Puede consultar nuestra Política de Cookies en el siguiente en enlace <a class="hover:underline text-blue-300 hover:text-blue-500" href="/cookies">Política de Cookies</a>'
            }
            fontSize="16px"
            className=" pb-8"
          />
          {/* Title 6 */}
          <BarlowText
            text={'6. Derechos de los Usuarios'}
            fontSize="24px"
            className=" pb-8"
          />
          {/* Content 6 */}
          <BarlowText
            text={
              'Los usuarios tienen los siguientes derechos: <br/> <br/> <ul class="list-inside"><li>Derecho de acceso: a solicitar información sobre los datos personales que tenemos.</li><li>Derecho de rectificación: a corregir datos personales inexactos o incompletos.</li><li>Derecho de supresión: a solicitar la eliminación de datos personales cuando ya no sean necesarios para los fines para los que fueron recogidos.</li><li>Otros derechos según la legislación aplicable.</li></ul>'
            }
            fontSize="16px"
            className=" pb-8"
          />
          {/* Title 7 */}
          <BarlowText
            text={'7. Seguridad de los Datos '}
            fontSize="24px"
            className=" pb-8"
          />
          {/* Content 7 */}
          <BarlowText
            text={
              'Implementamos medidas técnicas y organizativas apropiadas para proteger los datos personales de accesos no autorizados o destrucción accidental.'
            }
            fontSize="16px"
            className=" pb-8"
          />
          {/* Title 8 */}
          <BarlowText
            text={'8. Compartición de Datos Personales '}
            fontSize="24px"
            className=" pb-8"
          />
          {/* Content 8 */}
          <BarlowText
            text={
              'No compartimos datos personales con terceros, salvo cuando sea necesario para cumplir con obligaciones legales o para la prestación de servicios contratados por nuestros clientes.'
            }
            fontSize="16px"
            className=" pb-8"
          />
          {/* Title 9 */}
          <BarlowText
            text={'9. Transferencias Internacionales de Datos '}
            fontSize="24px"
            className=" pb-8"
          />
          {/* Content 9 */}
          <BarlowText
            text={
              'No realizamos transferencias internacionales de datos personales fuera del Espacio Económico Europeo.'
            }
            fontSize="16px"
            className=" pb-8"
          />
          {/* Title 10 */}
          <BarlowText
            text={'10. Cambios en la Política de Privacidad '}
            fontSize="24px"
            className=" pb-8"
          />
          {/* Content 10 */}
          <BarlowText
            text={
              'Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Cualquier cambio será comunicado a través de nuestro sitio web.'
            }
            fontSize="16px"
            className=" pb-8"
          />
        </div>
      </SectionLayout>
    </main>
  )
}
