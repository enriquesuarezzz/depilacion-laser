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
  const { register, handleSubmit, reset } = useForm<FormData>()
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
            <div className="flex">
              <Input
                id="name"
                label="Nombre"
                {...register('name', { required: true })}
                className="w-full border-b border-black"
              />
            </div>
            <div className="flex">
              <Input
                id="surname"
                label="Apellidos"
                {...register('surname', { required: true })}
                className="w-full border-b border-black"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            <div className="flex">
              <Input
                id="email"
                label="Email"
                {...register('email', { required: true })}
                className="w-full border-b border-black"
              />
            </div>
            <div className="flex">
              <Input
                id="phone"
                label="Teléfono"
                {...register('phone')}
                className="w-full border-b border-black"
              />
            </div>
          </div>
          <Input
            textArea={true}
            id="message"
            label="Message"
            {...register('message', { required: true })}
            className="w-full border-b border-black"
          />
        </div>
        <div className="mb-4 flex items-center justify-center">
          <Input
            type="checkbox"
            id="checkbox"
            {...register('checkbox', { required: true })}
            className="pr-4"
          />
          <label htmlFor="checkbox">
            <BarlowText
              text={`Acepto el procesamiento de mis datos personales de acuerdo con nuestra <a href='/privacy-policy' class='underline hover:text-orange'> Política de Privacidad </a>`}
              fontSize="12px"
              className=""
            />
          </label>
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
