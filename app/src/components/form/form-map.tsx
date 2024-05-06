'use client'
import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'

import { Button } from '@/components/shadcn-ui'

import MultiForm from './multi-form'
import SingleForm from './single-form'

interface IProps {
  hook: UseFormReturn<{
    name: string,
    password: string,
    email: string,
    attributes: {
      email: string,
      birthdate: string,
      gender: 'male' | 'female'
    }
  }>
}

const FormMap: FC<IProps> = ({
  hook,
  onSubmit,
  inputFields,
  submitLabel,
}) => {
  const inputs = (
    typeof inputFields === 'function'
  ) ? inputFields() : inputFields

  const isMultiForm = inputs[0]?.hasOwnProperty('inputs')

  return (
    <form 
      className='space-y-4'
      onSubmit={hook.handleSubmit(onSubmit)} 
    > 
      {isMultiForm 
        ? <MultiForm />
        : <SingleForm hook={hook} inputs={inputs} />
      }
      {!isMultiForm && (
        <Button className='w-full !mt-8'>
          {submitLabel}
        </Button>
      )}
    </form>
  )
}

export default FormMap
