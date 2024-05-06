'use client'
import { FC, useMemo } from 'react'
import { LuMic, LuInfo } from 'react-icons/lu'

import {
  Button,
  Avatar, 
  AvatarImage, 
  AvatarFallback,
} from '@/components/shadcn-ui'

const Header: FC = ({ conversation }) => {
  const otherUser = {
    name: 'Other user name', 
    email: 'otheruser@email.com', 
    createdAt: '2022-05-05T02:57:31Z'
  }

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`
    }

    return 'Online'
  }, [conversation])

  return (
    <>
      <div className="
        flex
        w-full
        py-1.5
        items-center
        border-b-[1px]
        justify-between
      ">
        <Button 
          size={1}
          variant='ghost' 
          className='px-2 py-1 ml-2'>
          <Avatar className='h-6 md:h-8 w-6 md:w-8'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@wolly' />
            <AvatarFallback>DW</AvatarFallback>
          </Avatar>
          <div className='flex-col text-left ml-2'>
            <h4 className='font-bold text-lg'>
              {conversation.name || otherUser.name}
            </h4>
          </div>
        </Button>
        <div className='flex gap-3 mr-2'>
          <Button size={1} variant='outline' className='p-2'>
            <LuMic size={18} />
          </Button>
          <Button size={1} variant='outline' className='p-2'>
            <LuInfo size={18} />
          </Button>
        </div>
      </div>
    </>
  )
}

export default Header
