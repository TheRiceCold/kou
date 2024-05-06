'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { format } from 'date-fns'

import {
  Avatar, 
  AvatarImage, 
  AvatarFallback,
} from '@/components/shadcn-ui'

const MessageBox = ({ data, isLast }) => {
  const isOwn = true

  const seenList = (data.seen || [])
    .filter(user => user.email !== data?.sender?.email)
    .map(user => user.name)
    .join('. ')

  const container = clsx('flex gap-3 p-4', isOwn && 'justify-end')

  const avatar = clsx(isOwn && 'order-2')

  const body = clsx(
    'flex flex-col gap-2',
    isOwn && 'items-end'
  )

  const message = clsx(
    'text-sm w-fit overflow-hidden',
    isOwn ? 'bg-black text-white' : 'bg-gray-100',
    data.image ? 'rounded-md p-0' : 'rounded-lg py-2 px-3'
  )

  return (
    <div className={container}>
      <div className={avatar}>
        <div className='relative hover:bg-accent cursor-pointer'>
          <div className="
            h-9 
            md:h-11 
            w-9
            md:w-11 
            relative 
            inline-block 
            rounded-full
            overflow-hidden 
          ">
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@wolly' />
              <AvatarFallback>DW</AvatarFallback>
            </Avatar>
          </div>
          <span className="
            block 
            absolute 
            rounded-full 
            bg-green-500
            top-0 
            right-0
            h-2 
            w-2 
            md:h-3 
            md:w-3 
            ring-2 
            ring-background 
          "/>
        </div>
      </div>
      <div className={body}>
        <div className='flex items-center gap-1'>
          <div className='text-sm text-gray-500'>
            {data.sender.name}
          </div>
          <div className='text-xs text-gray-400'>
            {format(new Date(data.createdAt), 'p')}
          </div>
        </div>
        <div className={message}>
          {data.image ? (
            <Image
              alt='Image'
              height='288'
              width='288'
              src={data.image}
              className="
                object-cover
                cursor-pointer
                hover:scale-110
                transition
                translate
              "
            />
          ) : (
            <div>{data.body}</div>
          )}
        </div>
        {isLast && isOwn && !!seenList.length && (
          <div className="
            text-xs
            font-light
            text-gray-500
          ">
            {`Seen by ${seenList}`}
          </div>
        )}
      </div>
    </div>
  )
}

export default MessageBox
