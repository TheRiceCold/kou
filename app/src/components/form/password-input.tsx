import { FC, useState } from 'react'
import { LuEye, LuEyeOff } from 'react-icons/lu'
import { Input, Button } from '@/components/shadcn-ui'

interface IProps {
  // input?
  // hook?: any
}

const PasswordInput: FC<IProps> = ({ 
  hook,
  validate,
  input: { id, label },
}) => {
  const { register, formState: { errors } } = hook

  const [show, setShow] = useState<boolean>(false)

  const handleChange = (e) => {
    const value = (e.target as HTMLInputElement).value
    hook.setValue(id, value)
  }

  return (
    <div className='relative'>
      <Input
        {...register(id)}
        placeholder={label}
        onChange={handleChange}
        type={show ? `text` : 'password'}
        className={!!errors[id] && 'border-destructive'}
      />
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
        onClick={() => setShow(!show)}
      >{show ? <LuEye size={18} /> : <LuEyeOff size={18} />}
      </Button>
      <p className='text-sm text-destructive'>
        {errors[id]?.message}
      </p>
    </div>
  )
}

export default PasswordInput
