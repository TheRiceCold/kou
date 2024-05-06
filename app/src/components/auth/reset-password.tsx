import { FC } from 'react'
import {
  Input,
  Button,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from '@/components/shadcn-ui'

import { authStateEnum } from '.'

interface IProps {
  changeState: (state: authStateEnum) => void
}

const ForgotPassword: FC<IProps> = ({ changeState }) => {
  return (
    <>
      <DialogHeader className='mt-4'>
        <DialogTitle className='text-2xl'>
          Reset Password
        </DialogTitle>
        <DialogDescription>
          {"Tell us the email address associated with your account, and we’ll send you an email with a link to reset your password."}
        </DialogDescription>
      </DialogHeader>
      <div className='flex items-center space-x-2'>
        <div className='grid flex-1 gap-4'>
          <Input type='email' placeholder='Email' />
          <Input placeholder='Verify Code' />
          <Input type='password' placeholder='Password' />
        </div>
      </div>
      <DialogFooter>
        <Button>Reset password</Button>
        <Button variant='outline'>Reset password and Login</Button>
      </DialogFooter>
    </>
  )
}

export default ForgotPassword
