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
            <div className="flex">
              <input
                type="text"
                id="name"
                placeholder="Nombre"
                className="w-full border-b border-black bg-transparent pb-2 text-white placeholder-black"
                required
                {...register('name', { required: true })}
              />
            </div>

            <div className="flex">
              <input
                type="text"
                id="surname"
                placeholder="Apellidos"
                className="w-full border-b border-black bg-transparent pb-2 text-white placeholder-black"
                required
                {...register('surname', { required: true })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            <div className="flex">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full border-b border-black bg-transparent pb-2 text-white placeholder-black"
                required
                {...register('email', { required: true })}
              />
            </div>

            <div className="flex">
              <input
                type="tel"
                id="phone"
                placeholder="Numero de Teléfono"
                className="w-full border-b border-black bg-transparent pb-2 text-white placeholder-black"
                required
                {...register('phone', { required: true })}
              />
            </div>
          </div>

          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Message"
            className="font-satoshi w-full border-b border-black bg-transparent pb-2 placeholder-black"
            required
          ></textarea>
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
