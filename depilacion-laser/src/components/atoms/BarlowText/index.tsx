'use client'
import { Barlow } from 'next/font/google'
import { forwardRef, useEffect, useRef } from 'react'

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
})

export interface BarlowTextProps {
  text: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  style?: 'light' | 'normal' | 'semibold' | 'bold'
  fontSize?:
    | '100px'
    | '64px'
    | '40px'
    | '26px'
    | '24px'
    | '20px'
    | '16px'
    | '12px'
  leading?: 'normal' | 'none' | 'tight' | 'snug' | 'relaxed' | 'loose'
  className?: string
}

export const BarlowText = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  BarlowTextProps
>(
  ({
    text,
    tag = 'p',
    style = 'regular',
    fontSize = '16px',
    className = 'text-black',
    leading = 'normal',
  }) => {
    const textContent = useRef<HTMLParagraphElement>(null)
    useEffect(() => {
      if (textContent.current) {
        textContent.current.innerHTML = text
      }
    }, [text])

    function getSize() {
      switch (fontSize) {
        case '100px':
          return 'text-[40px] lg:text-[74px] xl:text-[100px]'
        case '64px':
          return 'text-[32px] lg:text-[55px] xl:text-[64px]'
        case '40px':
          return 'text-[24px] lg:text-[40px]'
        case '26px':
          return 'text-[10px] md:text-[20px] lg:text-[26px]'
        case '24px':
          return 'text-[18px] lg:text-[24px]'
        case '20px':
          return 'text-base lg:text-[20px]'
        case '16px':
          return 'text-[14px]'
        case '12px':
          return 'text-[12px]'
      }
    }

    function getStyle() {
      switch (style) {
        case 'light':
          return 'font-light'
        case 'normal':
          return 'font-normal'
        case 'semibold':
          return 'font-semibold'
        case 'bold':
          return 'font-bold'
      }
    }

    function getLeading() {
      switch (leading) {
        case 'normal':
          return 'leading-normal'
        case 'none':
          return 'leading-none'
        case 'tight':
          return 'leading-tight'
        case 'snug':
          return 'leading-snug'
        case 'relaxed':
          return 'leading-relaxed'
        case 'loose':
          return 'leading-loose'
      }
    }

    let globalStyle = `${barlow.className} ${getSize()} ${getLeading()} ${getStyle()} antialiased`

    function getTag() {
      switch (tag) {
        case 'h1':
          return (
            <h1 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h1>
          )
        case 'h2':
          return (
            <h2 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h2>
          )
        case 'h3':
          return (
            <h3 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h3>
          )
        case 'h4':
          return (
            <h4 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h4>
          )
        case 'h5':
          return (
            <h5 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h5>
          )
        case 'h6':
          return (
            <h6 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h6>
          )
        case 'p':
          return (
            <p ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </p>
          )
      }
    }

    return <>{getTag()}</>
  },
)

BarlowText.displayName = 'BarlowText'
