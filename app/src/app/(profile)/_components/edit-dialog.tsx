import { FC } from 'react'

import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/shadcn-ui'

const EditDialog: FC = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className='font-bold ml-24'>
        Edit Profile
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-lg'>
          Edit Profile
        </DialogTitle>
      </DialogHeader>

    </DialogContent>
  </Dialog>
)

export default EditDialog
