'use client'
import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Handle successful submission
        console.log('Form submitted successfully!')
      } else {
        // Handle error
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form', error)
    }

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-600"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-600"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
    </form>
  )
}

export default ContactForm
