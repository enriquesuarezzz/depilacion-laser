'use client'

import { FC, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { sendEmail } from '@/utils/send-email'
import Input from '../Input'
import { BarlowText } from '@/components/atoms/BarlowText'

export type FormData = {
  name: string
  surname: string
  email: string
  phone: string
  message: string
  checkbox: boolean
}

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()
  const [isSending, setIsSending] = useState(false)
  const [sendError, setSendError] = useState<string | null>(null)
  const [sendSuccess, setSendSuccess] = useState<boolean | null>(null)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSending(true)
    setSendError(null)
    setSendSuccess(null)

    try {
      await sendEmail(data)
      setSendSuccess(true)
      reset() // Clear the form fields
    } catch (error) {
      console.error('Error sending email:', error)
      setSendError('Failed to send email. Please try again later.')
    } finally {
      setIsSending(false)
    }
  }

  // Clear success message after 3 seconds
  if (sendSuccess) {
    setTimeout(() => {
      setSendSuccess(null)
    }, 3000)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 lg:gap-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            <div className="flex flex-col">
              <Input
                id="name"
                label="Nombre"
                {...register('name', {
                  required: 'Introduce tu nombre',
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: 'Nombre solo debe contener letras',
                  },
                })}
                className="w-full border-b border-black"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="flex flex-col">
              <Input
                id="surname"
                label="Apellidos"
                {...register('surname', { required: false })}
                className="w-full border-b border-black"
              />
              {errors.surname && (
                <span className="text-red-500">{errors.surname.message}</span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            <div className="flex flex-col">
              <Input
                id="email"
                label="Email"
                {...register('email', {
                  required: 'Introduce tu email',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Email no es válido',
                  },
                })}
                className="w-full border-b border-black"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="flex flex-col">
              <Input
                id="phone"
                label="Teléfono"
                {...register('phone', {
                  required: 'Introduce tu teléfono',
                  pattern: {
                    value: /^[0-9]{9}$/,
                    message: 'Teléfono debe ser un número de 9 dígitos',
                  },
                })}
                className="w-full border-b border-black"
              />
              {errors.phone && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <Input
              textArea={true}
              id="message"
              label="Mensaje"
              {...register('message', {
                required: 'Escribe tu consulta',
              })}
              className="w-full border-b border-black"
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>
        </div>
        <div className="mb-4 flex flex-col items-start">
          <div className="flex items-center">
            <Input
              type="checkbox"
              id="checkbox"
              className="mr-2"
              {...register('checkbox', {
                required: 'Debes aceptar la política de privacidad',
              })}
            />
            <label htmlFor="checkbox">
              <BarlowText
                text={`Acepto el procesamiento de mis datos personales de acuerdo con nuestra <a href='/privacy-policy' class='underline hover:text-orange'> Política de Privacidad </a>`}
                fontSize="12px"
                className=""
              />
            </label>
          </div>
          {errors.checkbox && (
            <span className="mt-2 text-red-500">{errors.checkbox.message}</span>
          )}
        </div>
        <div className="mt-6 grid">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700  disabled:opacity-50"
            disabled={isSending}
          >
            {isSending ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
        {sendError && <div className="mt-4 text-red-500">{sendError}</div>}
        {sendSuccess && (
          <div className="mt-4 text-green-500">
            ¡Hemos recibido tu consulta!
          </div>
        )}
      </form>
    </>
  )
}

export default ContactForm
