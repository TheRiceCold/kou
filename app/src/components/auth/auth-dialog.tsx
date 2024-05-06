'use client'
import { FC, ReactElement, useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/shadcn-ui'

import { authStateEnum } from '.'

import ContentState from './content-state'

interface IProps {
  triggerComponent: ReactElement
}

const AuthDialog: FC<IProps> = ({ triggerComponent }) => {
  const [prevState, setPrevState] = useState<authStateEnum|null>(null)
  const [currentState, setCurrentState] = useState<authStateEnum>(authStateEnum.LOGIN_EMAIL)

  return (
    <Dialog>

      {/* TRIGGER COMPONENT */}
      <DialogTrigger asChild>
        {triggerComponent()}
      </DialogTrigger>

      {/* CONTENT */}
      <DialogContent>
        {prevState && (
          <button
            className='absolute top-2 left-4 w-4 h-4'
            onClick={() => setCurrentState(prevState && prevState)}
          >
            <AiOutlineLeft className='absolute w-4 h-4'/>
          </button>
        )}

        {/* Content State */}
        <ContentState
          currentState={currentState}
          setPrevState={setPrevState}
          setCurrentState={setCurrentState}
        />

      </DialogContent>

    </Dialog>
  )
}

export default AuthDialog
