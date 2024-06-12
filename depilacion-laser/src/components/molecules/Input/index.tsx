import { ChangeEvent, ForwardedRef, forwardRef } from 'react'

interface InputProps {
  id?: string
  label?: string
  type?: 'text' | 'email' | 'tel' | 'checkbox'
  name: string
  value?: string
  textArea?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  className?: string
  register?: any
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ type = 'text', textArea = false, ...props }, ref) => {
    return (
      <div className={`relative ${props.className}`}>
        {textArea ? (
          <textarea
            ref={ref as ForwardedRef<HTMLTextAreaElement>}
            id={props.id}
            name={props.name}
            value={props.value}
            className="font-satoshi-regular focus: peer h-20 w-full pt-2 text-base placeholder-transparent focus:outline-none"
            placeholder=""
            onChange={props.onChange}
            {...props.register}
          />
        ) : (
          <input
            ref={ref as ForwardedRef<HTMLInputElement>}
            id={props.id}
            type={type}
            name={props.name}
            value={props.value}
            className="font-satoshi-regular focus: peer h-10 w-full rounded-none pt-2 text-base placeholder-transparent focus:outline-none"
            placeholder=""
            onChange={props.onChange}
            {...props.register}
          />
        )}
        <label
          htmlFor={props.id}
          className="font-satoshi-regular peer-focus:font-satoshi-regular peer-placeholder-shown:font-satoshi-regular pointer-events-none absolute -top-4 left-0 text-base transition-all peer-placeholder-shown:-top-0 peer-placeholder-shown:text-xl peer-focus:-top-4 peer-focus:text-base"
        >
          {props.label}
        </label>
      </div>
    )
  },
)

export default Input
