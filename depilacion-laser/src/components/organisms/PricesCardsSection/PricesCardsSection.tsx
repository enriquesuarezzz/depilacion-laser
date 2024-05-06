'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { DirectionAwareHover } from './PricesCardsSectionLogic'

export function PricesCardsSection() {
  const imageUrl =
    process.env.NEXT_PUBLIC_IMAGES_PATH +
    '/images/prices_cards_section/depilation_example1.jpg'
  return (
    <div className="flex flex-wrap gap-20">
      <div className="relative flex h-[40rem] items-center justify-center">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="text-xl font-bold">In the mountains</p>
          <p className="text-sm font-normal">$1299 / night</p>
        </DirectionAwareHover>
      </div>
      <div className="relative flex  h-[40rem] items-center justify-center">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="text-xl font-bold">In the mountains</p>
          <p className="text-sm font-normal">$1299 / night</p>
        </DirectionAwareHover>
      </div>

      <div className="relative flex  h-[40rem] items-center justify-center">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="text-xl font-bold">In the mountains</p>
          <p className="text-sm font-normal">$1299 / night</p>
        </DirectionAwareHover>
      </div>
    </div>
  )
}
