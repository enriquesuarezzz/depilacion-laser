import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import ContactForm from '@/components/molecules/Contact/Contact'

export async function POST(request: NextRequest) {
  const { email, name, message, surname, phone } = await request.json()

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  })

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.DESTINY_EMAIL,
    subject: `Nuevo mensaje de: ${name} (${email})`,
    text: `Te ha escrito: \n ${name} ${surname} \n ${phone} \n ${email} \n ${message}`,
  }

  const email_sent = false

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent')
        } else {
          reject(err.message)
        }
      })
    })

  try {
    await sendMailPromise()
    return NextResponse.json({ email_sent })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ err })
  }
}
