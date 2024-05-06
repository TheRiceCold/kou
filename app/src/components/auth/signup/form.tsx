import { FC, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Auth } from 'aws-amplify'
import { useForm } from 'react-hook-form'

import { FormMap } from '@/components/form'

import { useToast } from '@/hooks'
import { signUpFields } from '@/constants/input-fields'

type TInputs = {
  email: string
  name: string
  password: string
  confirmPassword: string
  birthdate: string
  gender: 'male' | 'female' | 'other'
}

const SignUpForm: FC = () => {
  const router = useRouter()
  const { toast } = useToast()
  const formHook = useForm<TInputs>()
  const [showVerificationCode, setShowVerificationCode] = useState<boolean>(false)

  // Watch Form data in the console
  // console.log(formHook.watch())

  const onSignUp = async (data) => {
    const { password, attributes } = data
    try {
      const { user } = Auth.signUp({
        username: data.email, 
        password, 
        attributes
      })
      console.log('Signed up a user', user)
    } catch (err) {
      throw err
    }
  }

  const onConfirmSignUp = async (data) => {
    const { email, password, verificationCode } = data
    try {
      await Auth.confirmSignUp(email, verificationCode)
      const amplifyUser = await Auth.signIn(email, password)
      if (amplifyUser) {
        router.push('')
      } else {
        throw new Error('Something went wrong:')
      } 
    } catch (err) {
      console.log('Error confirming sign up', err) 
    }
  }

  const onSubmit = async (data) => {
    toast({
      variant: 'destructive',
      title: 'onSubmitkresult',
      description: `Data: ${data}`
    })

    console.log('onSubmit', data)
    try {
      if (!showVerificationCode) {
        console.log('onSignUp', data)
        onSignUp(data)
      } else {
        await onConfirmSignUp(data)
        setShowVerificationCode(true)
      }
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  return (
      <FormMap
        hook={formHook}
        onSubmit={onSubmit}
        inputFields={() => signUpFields(formHook.watch)}
        submitLabel={showVerificationCode ? 'Verify Code' : 'Sign up'}
      />
  )
}

export default SignUpForm
