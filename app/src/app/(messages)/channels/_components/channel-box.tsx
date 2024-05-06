'use client'
import { FC, useMemo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { LuX } from 'react-icons/lu'
import { format } from 'date-fns'
import clsx from 'clsx'

import {
  Button,
  Avatar, 
  AvatarImage, 
  AvatarFallback,
} from '@/components/shadcn-ui'

const ChannelBox: FC = ({ data, selected }) => {
  const router = useRouter()
  const otherUser = {
    name: data.name
  }

  const handleClick = useCallback(() => {
    router.push(`/channels/${data.id}`)
  }, [data.id, router])

  const lastMessage = useMemo(() => {
    const messages = data.message || []

    return messages[messages.length - 1]
  }, [data.messages])

  const userEmail = useMemo(() => {
    
  }, [])

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false
    }

    const seenArray = lastMessage.seen || []

    if (!userEmail) {
      return false
    }
    
    return seenArray.filter(user => user.email === userEmail).length !== 0
  }, [userEmail, lastMessage])

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return 'Sent an image'
    }

    if (lastMessage?.body) {
      return lastMessage.body
    }

    return 'Started a conversation'
  }, [lastMessage])

  return (
    <Button 
      size={1}
      variant='ghost'
      className={clsx(`
        h-12
        flex
        w-full
        space-x-3
        items-center
        rounded-none
        justify-start`
      )} onClick={handleClick} 
    >
      <div className='ml-4 relative'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://github.com/shadcn.png' alt='@wolly' />
          <AvatarFallback>DW</AvatarFallback>
        </Avatar>
        <span className="
          block 
          absolute 
          rounded-sm
          bg-green-500
          top-0 
          right-0
          h-2.5
          w-2.5
          ring-1
          ring-background 
        "/>
      </div>
      <div className='flex w-full justify-between items-center'>
        <p className='text-start text-md font-bold'>
          {data.name || otherUser.name}
        </p>
        <Button 
          size={1} 
          variant='ghost' 
          className='hover:bg-background p-2 rounded-full mr-2'
        >
          <LuX />
        </Button>
      </div>
    </Button>
  )
}

export default ChannelBox
