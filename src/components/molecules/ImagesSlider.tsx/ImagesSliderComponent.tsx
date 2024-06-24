'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { ImagesSlider } from './ImagesSliderLogic'
import Link from 'next/link'
import { BarlowText } from '@/components/atoms/BarlowText'

export function ImagesSliderComponent() {
  // Array of image paths, using environment variables for dynamic paths
  const images = [
    process.env.NEXT_PUBLIC_IMAGES_PATH +
      '/images/prices_cards_section/depilation_example1.jpg',
    process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/cards_section/card2.jpg',
    process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/cards_section/card4.jpg',
  ]

  return (
    // ImagesSlider component wraps the content with a slider functionality
    <ImagesSlider className="h-screen" images={images}>
      {/* Motion div for animated content */}
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col items-center justify-center"
      >
        {/* Animated heading with gradient text */}
        <motion.h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
          {/* BarlowText component for styled text */}
          <BarlowText
            text="Depilación Laser SHR </br> Lanzarote"
            fontSize="64px"
            className="text-white"
          />
        </motion.h1>

        {/* Link to Contact page */}
        <Link href={'/contacto'}>
          {/* Button with styled text and gradient line */}
          <button className="relative mx-auto mt-4 rounded-full border border-gray-600/40 bg-gray-600/20 px-4 py-2 text-center text-white backdrop-blur-sm">
            <BarlowText
              text="Reserva tu cita →"
              fontSize="16px"
              className="text-white"
            />
            {/* Gradient line effect */}
            <div className="via-black-600 absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent to-transparent" />
          </button>
        </Link>
      </motion.div>
    </ImagesSlider>
  )
}
