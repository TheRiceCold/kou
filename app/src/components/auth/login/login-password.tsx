import { FC, useEffect } from 'react'
import { AiOutlineRight } from 'react-icons/ai'

import {
  Input,
  Button,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/shadcn-ui'

import { PasswordInput } from '@/components/form'
import { authStateEnum } from '..'

interface IProps {
  email: string
  changeState: (state: authStateEnum) => void
}

const LoginPassword: FC<IProps> = ({ 
  hook,
  email, 
  changeState, 
}) => {
  console.log('Login data: ', hook.watch())

  useEffect(() => {
    hook.setValue('email', email)
  }, [])

  const onSubmit = () => {

  }

  return (
    <>
      <DialogHeader className='mt-4'>
        <DialogTitle className='text-2xl'>
          Log in
        </DialogTitle>
      </DialogHeader>
      <div className='flex items-center space-x-2'>
        <div className='grid flex-1 gap-4'>
          <Input type='email' placeholder={email} readOnly />
          <PasswordInput 
            input={{
              id: 'password',
              label: 'Password'
            }}
            hook={hook}
          />
          <Button 
            className='font-bold'
            onClick={() => hook.submitHandler(onSubmit)}
          >
            Log in
            <AiOutlineRight className='h-4 w-4 ml-2'/>
          </Button>
          <Button 
            variant='link' 
            className='text-accent-foreground'
            onClick={() => changeState(authStateEnum.FORGOT_PASSWORD)}
          >
          </Button>
        </div>
      </div>
      <DialogFooter className='sm:justify-normal text-sm'>
        {"Don't have an account?"}
        <span 
          className='ml-2 hover:underline cursor-pointer' 
          onClick={() => changeState(authStateEnum.SIGNUP)}
        > Sign up
        </span>
      </DialogFooter>
    </>
  )
}

export default LoginPassword
