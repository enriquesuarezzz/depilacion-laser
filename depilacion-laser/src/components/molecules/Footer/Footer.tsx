import { MulishText } from '@/components/atoms/MulishText'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="w-full items-center bg-white shadow dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl items-center p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <Link href="#" className="me-4 hover:underline md:me-6">
              About
            </Link>

            <Link href="#" className="me-4 hover:underline md:me-6">
              Privacy Policy
            </Link>

            <Link href="#" className="me-4 hover:underline md:me-6">
              Licensing
            </Link>

            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <MulishText
          text="© 2024 Valeria Garritano. Todos los derechos reservados."
          fontSize="14px"
          className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        />
      </div>
    </div>
  )
}
