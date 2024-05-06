import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import { 
  SignUp, 
  LoginEmail, 
  ResetPassword, 
  LoginPassword 
} from '@/components/auth'

import { authStateEnum } from '.'

type TInputs = {
  email: string
  password: string
}

const ContentState: FC = ({ 
  currentState,
  setPrevState,
  setCurrentState,
}) => {
  const [loginEmail, setLoginEmail] = useState<string>('')
  const formHook = useForm<TInputs>()

  const changeState = (state: authStateEnum): void => {
    setPrevState(currentState)
    setCurrentState(state)
  }

  switch (currentState) {
    case authStateEnum.LOGIN_EMAIL:
      return (
        <LoginEmail 
          email={loginEmail} 
          setEmail={setLoginEmail} 
          changeState={changeState}
        />
      )

    case authStateEnum.LOGIN_PASSWORD:
      return (
        <LoginPassword 
          hook={formHook}
          email={loginEmail} 
          changeState={changeState}
        />
      )

    case authStateEnum.SIGNUP: 
      return <SignUp changeState={changeState} />

    case authStateEnum.FORGOT_PASSWORD: 
      return <ResetPassword changeState={changeState} />

    default:
      return null
  }
}

export default ContentState
