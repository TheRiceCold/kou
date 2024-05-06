import { FC, useState } from 'react'
import clsx from 'clsx'
import { LuRepeat2 } from 'react-icons/lu'

import { 
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
} from '@/components/shadcn-ui'

import RepostDialog from '../dialogs/repost-dialog'
import AuthDialog from '@/components/auth/auth-dialog'

const RepostButton: FC = ({ data }) => {
  const user = {}
  const [isReposted, setIsReposted] = useState<boolean>(false)

  const handleClick = () => {
    if (!!user) {
      // setIsReposted(!isReposted)
    }
  }

  const renderButton = () => (
    <Button variant='ghost' onClick={handleClick}>
      <LuRepeat2 size={26} className={isReposted && 'stroke-primary'} />
      <p className={clsx(
        'font-medium ml-2', 
        isReposted && 'text-primary'
      )}>
        10
      </p>
    </Button>
  )

  return !!user ? (
    <Dialog>
      <DialogTrigger asChild>
        {renderButton()}
      </DialogTrigger>
      <DialogContent className="max-w-[900px] 2xl:max-w-[1000px]">
        <RepostDialog data={data} />
      </DialogContent>
    </Dialog>
  ) : (
    <AuthDialog triggerComponent={renderButton} />
  )
}

export default RepostButton
