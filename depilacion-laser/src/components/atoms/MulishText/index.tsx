'use client'
import { forwardRef, useEffect, useRef } from 'react'
import { Mulish } from 'next/font/google'

export interface MulishTextProps {
  text: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  style?: 'w400' | 'w500' | 'w700'
  fontSize?: '14px' | '16px' | '18px' | '30px' | '40px' | '70px'
  className?: string
}

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const MulishText = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  MulishTextProps
>(
  (
    { text, tag = 'p', style = 'w500', fontSize = '16px', className = '' },
    ref,
  ) => {
    const textContent = useRef<HTMLParagraphElement>(null)
    useEffect(() => {
      if (textContent.current) {
        textContent.current.innerHTML = text
      }
    }, [text])

    function getSize() {
      switch (fontSize) {
        case '14px':
          return 'text-sm'
        case '16px':
          return 'text-base'
        case '18px':
          return 'text-lg'
        case '30px':
          return 'text-[20px] md:text-[30px]'
        case '40px':
          return 'text-[20px] md:text-[30px] lg:text-[40px]'
        case '70px':
          return 'text-[25px] md:text-[50px] lg:text-[70px]'
      }
    }

    function getStyle() {
      switch (style) {
        case 'w400':
          return 'font-normal'
        case 'w500':
          return 'font-medium'
        case 'w700':
          return 'font-bold'
      }
    }

    const globalStyle = `${mulish.className} ${getSize()} leading-normal ${getStyle()} antialiased ${className}`

    const Tag = tag

    return (
      <Tag ref={ref} className={globalStyle}>
        {text}
      </Tag>
    )
  },
)

MulishText.displayName = 'MulishText'
