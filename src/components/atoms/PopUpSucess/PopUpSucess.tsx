import React from 'react'
import { Toaster, toast } from 'sonner'

const ToastComponent = () => {
  toast.success('Event has been created')

  return (
    <div>
      <Toaster />
    </div>
  )
}

export default ToastComponent
