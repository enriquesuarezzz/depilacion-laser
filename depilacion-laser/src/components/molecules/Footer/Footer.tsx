import { BarlowText } from '@/components/atoms/BarlowText'
import { IInstagram } from '@/components/atoms/Svg/IInstagram'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bottom-0 flex w-full items-center bg-white shadow dark:bg-gray-900">
      <div className="mx-auto  max-w-screen-xl items-center p-4 md:py-8">
        <div className="flex items-center justify-between">
          <div className=" mb-2 mt-2 flex w-full items-center  justify-center font-medium text-gray-500 sm:mb-0 md:mt-0 dark:text-gray-400">
            <Link href="/contacto" className="me-4 hover:underline md:me-6">
              Contacto
            </Link>
            <Link
              href="/politica-de-privacidad"
              className="me-4 hover:underline md:me-6"
            >
              Política de Privacidad
            </Link>
            <Link href="/cookies" className="me-4 hover:underline md:me-6">
              Cookies
            </Link>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <BarlowText
          text="© 2024 Valeria Garritano. Todos los derechos reservados."
          fontSize="16px"
          className="block text-gray-500 sm:text-center dark:text-gray-400"
        />
        <div className="flex justify-start gap-2  pt-2 md:justify-center">
          <BarlowText
            text="Created by"
            fontSize="16px"
            className="block  text-gray-500  dark:text-gray-400"
          />
          <Link
            href="https://www.instagram.com/enriquesuarezzz/"
            className="my-auto flex justify-center "
          >
            <BarlowText
              text="enriquesuarezzz"
              fontSize="16px"
              className="block text-gray-500 sm:text-center dark:text-gray-400"
            />
            <IInstagram color="white" className="my-auto ml-1" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
