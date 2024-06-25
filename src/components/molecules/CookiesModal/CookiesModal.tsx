'use client'

import { COOKIE_CONSENT, CookieClient } from '@/utils/cookie'
import { useState } from 'react'
import { Open_Sans } from 'next/font/google'
import { BarlowText } from '@/components/atoms/BarlowText'

export const openSans = Open_Sans({ subsets: ['latin'] })

export interface CookiesModalProps {
  checked: boolean
}

export default function CookiesModal({ checked }: CookiesModalProps) {
  const [showModal, setShowModal] = useState(!checked)

  const handleAcceptCookie = () => {
    CookieClient.setCookie(COOKIE_CONSENT, 'true')
    setShowModal(false)
  }

  const handleCancelCookie = () => {
    CookieClient.deleteCookie(COOKIE_CONSENT)
    setShowModal(false)
  }
  return (
    showModal && (
      <div
        className={`fixed bottom-0 left-2 z-40 flex h-fit w-fit flex-col justify-between gap-6 bg-gray-800/40 px-6 py-10 font-bold text-white backdrop-blur-sm sm:left-4`}
      >
        <div className=" flex h-fit w-full max-w-[300px] flex-col gap-10 ">
          {/* Title + description */}
          <div className="flex h-fit w-full flex-col gap-5 text-center">
            {/* Title */}
            <BarlowText
              text={'Cookies'}
              fontSize="32px"
              className="text-center italic"
            />
            {/* Description */}
            <div className="flex h-fit w-full flex-col gap-4">
              <BarlowText
                text={
                  'En nuestro sitio web utilizamos cookies propias y de terceros para finalidades analíticas mediante el análisis del tráfico web.'
                }
                fontSize="16px"
                className=""
              />
              <BarlowText
                text={
                  'Para más información puede consultar nuestra política de cookies <a class="underline hover:text-blue-400" href="/politica-de-cookies"> Aquí.</a>Puedes aceptar toddas las cookies mediante el botón "Aceptar" o rechazar su uso pulsando en "Rechazar".'
                }
                fontSize="16px"
                className=""
              />
            </div>
          </div>
          {/* Buttons */}
          <div className="flex h-fit w-full flex-row justify-center gap-5">
            {/* Decline */}
            <button
              className="onHover hover:border-lighter-gray hover:bg-lighter-gray flex h-fit flex-col items-center justify-center border px-9 py-3 hover:text-white"
              onClick={() => handleCancelCookie()}
            >
              <BarlowText text={'Rechazar'} fontSize="14px" className="" />
            </button>
            {/* Accept */}
            <button
              className="onHover hover:border-light-gray hover:bg-light-gray flex h-fit flex-col items-center justify-center border bg-black px-9 py-3 hover:text-white"
              onClick={() => handleAcceptCookie()}
            >
              <BarlowText text={'Aceptar'} fontSize="14px" className="" />
            </button>
          </div>
        </div>
      </div>
    )
  )
}
