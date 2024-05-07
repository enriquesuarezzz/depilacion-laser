// api/contact.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    // Send email with the form data
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      // Your email configuration
      // For example, using Gmail SMTP:
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com', // Your email
        pass: 'your-email-password', // Your email password or app password
      },
    })

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'enriquesuarezmartin@gmail', // Recipient's email
      subject: 'New Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email', error)
        res.status(500).json({ error: 'Internal Server Error' })
      } else {
        console.log('Email sent: ' + info.response)
        res.status(200).json({ message: 'Email sent successfully' })
      }
    })
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
