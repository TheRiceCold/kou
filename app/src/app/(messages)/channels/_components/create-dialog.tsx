'use client'
import { FC, ReactElement } from 'react'

import {
  Input,

  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/shadcn-ui'

interface IProps {
  triggerComponent: ReactElement
}

const CreateDialog: FC<IProps> = ({ triggerComponent }) => (
  <Dialog>
    <DialogTrigger asChild>
      {triggerComponent()}
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-lg'>
          Create a Channel
        </DialogTitle>
      </DialogHeader>
      <Input />
    </DialogContent>
  </Dialog>
)

export default CreateDialog
