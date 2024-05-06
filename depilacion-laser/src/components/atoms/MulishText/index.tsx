'use client'
import { forwardRef, useEffect, useRef } from 'react'
import { Mulish } from 'next/font/google'

export interface MulishTextProps {
  text: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  style?: 'regular' | 'medium'
  fontSize?: '14px' | `16px` | '16px|14px' | '40px|30px|20px' | '70px|50px|25px'
  className?: string
}

export const MulishText = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  MulishTextProps
>(
  ({
    text,
    tag = 'p',
    style = 'regular',
    fontSize = '12px',
    className = 'text-black',
  }) => {
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
        case '16px|14px':
          return 'text-sm sm:text-base'
        case '70px|50px|25px':
          return 'text-[25px] md:text[50px] lg:text-[70px]'
        case '40px|30px|20px':
          return 'text-[20px] md:text[30px] lg:text-[40px]'
      }
    }

    function getStyle() {
      switch (style) {
        case 'regular':
          return 'font-mulish-regular'
        case 'medium':
          return 'font-mulish-medium'
      }
    }

    let globalStyle = ` ${getSize()} leading-normal ${getStyle()} antialiased`

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

MulishText.displayName = 'MulishText'
