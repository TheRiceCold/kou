import { FC } from 'react'
import { AiOutlineRight } from 'react-icons/ai'

import { Input, Button } from '@/components/shadcn-ui'

import OAuthButtons from './oauth-buttons'

import { authStateEnum } from '..'

const LoginEmailContent: FC = ({ 
  email,
  setEmail, 
  changeState, 
}) => {

  const onContinue = () => {
    console.log(email)
    changeState(authStateEnum.LOGIN_PASSWORD)
  }

  return (
    <div className='flex items-center space-x-2'>
      <div className='grid flex-1 gap-4'>
        <OAuthButtons />

        <span className='text-sm'>Login with email</span>

        <Input 
          type='email' 
          placeholder='Email or username' 
          onChange={e => {
            setEmail((e.target as HTMLInputElement).value)
          }}
        />

        <Button className='font-bold' onClick={onContinue}>
          Continue 
          <AiOutlineRight className='h-4 w-4 ml-2'/>
        </Button>

        <Button 
          variant='link' 
          className='text-accent-foreground'
          onClick={() => changeState(authStateEnum.FORGOT_PASSWORD)}
        > Forgot Password?
        </Button>
      </div>
    </div>
  )
}

export default LoginEmailContent
