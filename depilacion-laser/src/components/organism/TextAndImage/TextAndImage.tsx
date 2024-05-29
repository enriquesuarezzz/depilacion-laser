import Image from 'next/image'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  image: string
  reverse?: boolean
  alt?: string
}

export default function TextAndImage({ children, image, reverse, alt }: Props) {
  return (
    <>
      <section
        className={`flex justify-between gap-4 md:items-center md:gap-0  ${reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'}`}
      >
        {/* Text */}
        {children}
        {/* Image */}
        <Image
          src={image}
          alt={alt || 'Depilacion Laser image'}
          width={723}
          height={640}
          unoptimized
          className="aspect-square max-h-[400px] object-cover sm:max-h-[500px] md:max-h-[640px] md:w-full md:max-w-[50%]"
        />
      </section>
    </>
  )
}
