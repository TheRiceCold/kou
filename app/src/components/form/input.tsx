import { FC, useState } from 'react'
import { LuEye, LuEyeOff } from 'react-icons/lu'

import { Button, Input as InputUI } from '@/components/shadcn-ui'

const Input: FC = ({ input,  hook }) => {
  const { id, label, type, validation } = input
  const { register, formState: { errors } } = hook

  // Password Type
  const isPassword = (type.toLowerCase() === 'password')
  const [showPassword, setShowPassword] = useState<boolean>(!isPassword)

  const handleChange = (e) => {
    const value = (e.target as HTMLInputElement).value
    hook.setValue(id, value)
  }

  return (
    <div className='relative'>
      {/* Input */}
      <InputUI
        id={id}
        {...register(id, {...validation})} 
        placeholder={label} 
        onChange={handleChange}
        type={showPassword ? 'text' : 'password'}
        className={!!errors[id] && 'border-destructive'}
      />

      {/* Show Password Button */}
      {isPassword && (
        <Button className="
          p-2
          mr-2
          right-0 
          absolute 
          inset-y-0
          leading-5"
          size='sm' 
          type='button'
          variant='ghost' 
          onClick={() => setShowPassword(!showPassword)}
        >{isPassword ? <LuEye size={18} /> : <LuEyeOff size={18} />}
        </Button>
      )}

      {/* Error Message */}
      <p className='text-sm text-destructive'>
        {errors[id]?.message}
      </p>
    </div>
  )
}

export default Input
