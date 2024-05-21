'use client'

import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { sendEmail } from '@/utils/send-email'

export type FormData = {
  name: string
  surname: string
  email: string
  phone: string
  message: string
}

const ContactForm: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const [isSending, setIsSending] = useState(false)
  const [sendError, setSendError] = useState<string | null>(null)
  const [sendSuccess, setSendSuccess] = useState<boolean | null>(null)

  const onSubmit = async (data: FormData) => {
    setIsSending(true)
    setSendError(null)
    setSendSuccess(null)

    try {
      await sendEmail(data)
      setSendSuccess(true)
      reset() // Clear the form
    } catch (error) {
      console.error('Error sending email:', error)
      setSendError('Failed to send email. Please try again later.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 lg:gap-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Nombre
              </label>
              <input
                type="text"
                className="block w-full  rounded-lg px-4 py-3 text-sm text-neutral-400 "
                {...register('name', { required: true })}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Apellidos
              </label>
              <input
                type="text"
                className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm  text-neutral-400 disabled:opacity-50"
                {...register('surname', { required: true })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Correo Electrónico
              </label>
              <input
                type="email"
                autoComplete="email"
                className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm  text-neutral-400 disabled:opacity-50"
                {...register('email', { required: true })}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Número de Teléfono
              </label>
              <input
                type="tel"
                className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm  text-neutral-400 disabled:opacity-50"
                {...register('phone', { required: true })}
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Escriba su consulta
            </label>
            <textarea
              rows={4}
              className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm  text-neutral-400 disabled:opacity-50"
              {...register('message', { required: true })}
            ></textarea>
          </div>
        </div>

        <div className="mt-6 grid">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700  disabled:opacity-50"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Enviar'}
          </button>
        </div>
        {sendError && <div className="mt-4 text-red-500">{sendError}</div>}
        {sendSuccess && (
          <div className="mt-4 text-green-500">Email sent successfully!</div>
        )}
      </form>
    </>
  )
}

export default ContactForm
