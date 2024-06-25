import { BarlowText } from '@/components/atoms/BarlowText'
import { IInstagram } from '@/components/atoms/Svg/IInstagram'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bottom-0 w-full items-center bg-white shadow dark:bg-gray-900">
      <div className=" mx-auto max-w-screen-xl items-center p-4 md:py-8">
        {/* Navigation Links */}
        <div className="flex items-center justify-between">
          <div className="mb-2 mt-2 flex w-full items-center justify-center font-medium sm:mb-0 md:mt-0">
            {/* Contact Link */}
            <Link href="/contacto">
              <BarlowText
                text="Contacto"
                fontSize="16px"
                className="me-4 pl-4 text-gray-500 hover:underline md:me-6 dark:text-gray-400"
              />
            </Link>
            {/* Privacy Policy Link */}
            <Link href="/politica-de-privacidad">
              <BarlowText
                text="Política de Privacidad"
                fontSize="16px"
                className="me-4 pl-4 text-gray-500 hover:underline md:me-6 dark:text-gray-400"
              />
            </Link>
            {/* Aviso Legal Link */}
            <Link href="/aviso-legal">
              <BarlowText
                text="Aviso Legal"
                fontSize="16px"
                className="me-4 text-gray-500 hover:underline md:me-6 dark:text-gray-400"
              />
            </Link>
            {/* Cookies Link */}
            <Link href="/politica-de-cookies">
              <BarlowText
                text="Política de Cookies"
                fontSize="16px"
                className="me-4 text-gray-500 hover:underline md:me-6 dark:text-gray-400"
              />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />

        {/* Social Media Links */}
        <div className="flex justify-center gap-2 pt-0">
          {/* "Created by" Text */}
          <BarlowText
            text="Created by"
            fontSize="16px"
            className="block text-gray-500 dark:text-gray-400"
          />
          {/* Instagram Link */}
          <Link
            href="https://www.instagram.com/enriquesuarezzz/"
            className="my-auto flex h-6  justify-center md:h-5"
          >
            <BarlowText
              text="enriquesuarezzz"
              fontSize="16px"
              className="mr-2 block pb-1 text-gray-500 sm:text-center md:pb-0 dark:text-gray-400"
            />
            {/* Instagram Icon */}
            <IInstagram color="white" className="my-auto h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
