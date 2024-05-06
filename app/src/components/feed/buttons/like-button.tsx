import { FC, useState } from 'react'
import clsx from 'clsx'
import { 
  AiOutlineFire,
  AiFillFire
} from 'react-icons/ai'
import { Button } from '@/components/shadcn-ui'
import AuthDialog from '@/components/auth/auth-dialog'

const LikeButton: FC = () => {
  const user = null
  const [isLiked, setIsLiked] = useState<boolean>(false)

  const handleClick = () => {
    if (!!user) {
      setIsLiked(!!user && !isLiked)
    }
  }

  const renderButton = () => (
    <Button variant='ghost' onClick={handleClick}>
      {isLiked ? <AiFillFire size={26} color='#EE8726' /> : (
        <AiOutlineFire size={26} />
      )}
      <p className={clsx('font-medium ml-2', isLiked && 'text-[#EE8726]')}>
        1k
      </p>
    </Button>
  )

  return !!user ? renderButton() : (
    <AuthDialog triggerComponent={renderButton} />
  )
}

export default LikeButton
