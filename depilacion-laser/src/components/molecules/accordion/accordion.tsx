'use client'
import React, { useState } from 'react'

interface AccordionItemProps {
  title: string
  content: string
  isOpen: boolean
  onClick: () => void
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    //title and open and closed icon
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between p-4 text-left"
        onClick={onClick}
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="bg-gray-100 p-4">{content}</div>}
    </div>
  )
}

interface AccordionProps {
  items: {
    title: string
    content: string
  }[]
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  //handle open and closed with useState
  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  //accordion content
  return (
    <div className="mx-auto w-full max-w-md rounded-md border border-gray-200">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  )
}

export default Accordion
