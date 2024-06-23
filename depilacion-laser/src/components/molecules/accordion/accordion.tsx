'use client'
import React, { ReactNode, useState, useRef } from 'react'

interface AccordionProps {
  items: {
    title: string
    content: ReactNode
  }[]
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const getContentHeight = (index: number) => {
    const content = contentRefs.current[index]
    return content ? content.scrollHeight : 0
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-md border border-gray-200">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="flex w-full items-center justify-between p-4 text-left"
            onClick={() => handleItemClick(index)}
          >
            <span>{item.title}</span>
            <span>{openIndex === index ? '-' : '+'}</span>
          </button>
          <div
            ref={(el) => {
              contentRefs.current[index] = el
            }}
            className={`transition-max-height overflow-hidden duration-300 ease-out`}
            style={{
              maxHeight:
                openIndex === index ? `${getContentHeight(index)}px` : '0px',
            }}
          >
            <div className="bg-gray-100 p-4">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
