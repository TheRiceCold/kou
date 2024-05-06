import { FC, useState } from 'react'
import clsx from 'clsx'
import { 
  AiFillStar,
  AiOutlineStar 
} from 'react-icons/ai'

import { Button } from '@/components/shadcn-ui'
import AuthDialog from '@/components/auth/auth-dialog'

const SaveButton: FC = ({ data }) => {
  const user = null
  const [isSaved, setIsSaved] = useState<boolean>(false)

  const handleClick = () => {
    if (!!user) {
      setIsSaved(!isSaved)
    }
  }

  const renderButton = () => (
    <Button variant='ghost' onClick={handleClick}>
      {isSaved ? <AiFillStar size={26} color='#F8E064' /> : (
        <AiOutlineStar size={26} />
      )}
      <p className={clsx(
        'font-medium ml-2',
        isSaved && 'text-[#F8E064]'
      )}>
        5
      </p>
    </Button>
  )

  return !!user ? renderButton() : (
    <AuthDialog triggerComponent={renderButton} />
  )
}

export default SaveButton
