import {
  FC, 
  Dispatch, 
  SetStateAction,
} from 'react'

import {
  DialogHeader, 
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/shadcn-ui'

import { authStateEnum } from '..'

import Content from './login-email-content'

interface IProps {
  setEmail: Dispatch<SetStateAction<string>>
  changeState: (state: authStateEnum) => void
}

const LoginEmail: FC<IProps> = (props) => {
  const goToSignUp = () => {
    props.changeState(authStateEnum.SIGNUP)
  }

  return (
    <>
      {/* HEADER */}
      <DialogHeader className='mt-4'>
        <DialogTitle className='text-2xl'>XED</DialogTitle>
      </DialogHeader>

      {/* DESCRIPTION */}
      <DialogDescription>
        {"Welcome to your corner of the internet. You'll never be bored again."}
      </DialogDescription>

      {/* CONTENT */}
      <Content {...props} />

      {/* FOOTER */}
      <DialogFooter className='sm:justify-normal text-sm'>
        {"Don't have an account?"}
        <span 
          onClick={goToSignUp}
          className='ml-2 hover:underline cursor-pointer text-primary'> 
          Sign up
        </span>
      </DialogFooter>
    </>
  )
}

export default LoginEmail
