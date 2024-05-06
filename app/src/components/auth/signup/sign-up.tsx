'use client'
import { FC } from 'react'
import Link from 'next/link'

import {
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/shadcn-ui'

import SignUpForm from './form'
import { authStateEnum } from '..'

interface IProps {
  changeState: (state: authStateEnum) => void
}

const SignUp: FC<IProps> = ({ changeState }) => {

  return (
    <>
      {/* HEADER */}
      <DialogHeader className='mt-4'>
        <DialogTitle className='text-2xl'>Sign Up</DialogTitle>
        <DialogDescription>
          {'Sign up to see photos and videos from your friends.'}
        </DialogDescription>
      </DialogHeader>

      {/* FORM */}
      <SignUpForm />

      {/* DESCRIPTION */}
      <div className='flex items-center space-x-2'>
        <DialogDescription>
          {'By continuing, you agree to our '}
          <Link href='/' className='hover:underline font-bold'>
            {'User Agreement'}
          </Link> 
            {' and acknowledge that you understand the '}
          <Link href='/' className='hover:underline font-bold'>
            {'Privacy Policy.'}
          </Link>
        </DialogDescription>
      </div>

      {/* FOOTER */}
      <DialogFooter className='sm:justify-normal text-sm'>
        {'Have an account?'}
        <span 
          className="
          ml-2
          text-primary
          cursor-pointer 
          hover:underline"
          onClick={() => changeState(authStateEnum.LOGIN_EMAIL)}
        > Log In
        </span>
      </DialogFooter>
    </>
  )
}

export default SignUp
