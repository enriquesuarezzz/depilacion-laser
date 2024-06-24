import { ChangeEvent, ForwardedRef, forwardRef } from 'react'

interface InputProps {
  id?: string
  label?: string
  type?: 'text' | 'email' | 'tel' | 'checkbox' // Specify possible input types
  name: string
  value?: string
  textArea?: boolean // Flag to determine if textarea should be rendered
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void // onChange event handler
  className?: string
  register?: any // For registering input fields with React Hook Form or similar libraries
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ type = 'text', textArea = false, ...props }, ref) => {
    return (
      <div className={`relative ${props.className}`}>
        {textArea ? (
          <textarea
            ref={ref as ForwardedRef<HTMLTextAreaElement>} // Forwarding ref to textarea element
            id={props.id}
            name={props.name}
            value={props.value}
            className="font-satoshi-regular focus:peer h-20 w-full pt-2 text-base placeholder-transparent focus:outline-none"
            placeholder=""
            onChange={props.onChange}
            {...props.register} // Spread additional props for integration with form libraries
          />
        ) : (
          <input
            ref={ref as ForwardedRef<HTMLInputElement>} // Forwarding ref to input element
            id={props.id}
            type={type}
            name={props.name}
            value={props.value}
            className="font-satoshi-regular focus:peer h-10 w-full rounded-none pt-2 text-base placeholder-transparent focus:outline-none"
            placeholder=""
            onChange={props.onChange}
            {...props.register} // Spread additional props for integration with form libraries
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
