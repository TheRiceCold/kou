import { FC } from 'react'
import { GoComment } from 'react-icons/go'

import { 
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
} from '@/components/shadcn-ui'
import ThreadDialog from '../dialogs/thread-dialog'
import AuthDialog from '@/components/auth/auth-dialog'

const ReplyButton: FC = ({ data }) => {
  const user = {}

  const renderButton = () => (
    <Button variant='ghost'>
      <GoComment size={26} />
      <p className='font-medium ml-2'>
        100
      </p>
    </Button>
  )

  return !!user ? (
    <Dialog>
      <DialogTrigger asChild>
        {renderButton()}
      </DialogTrigger>
      <DialogContent className="
        md:max-w-[700px]
        lg:max-w-[900px] 
        2xl:max-w-[1000px]
      ">
        <ThreadDialog data={data} />
      </DialogContent>
    </Dialog>
  ) : (
    <AuthDialog triggerComponent={renderButton} />
  )
}

export default ReplyButton
