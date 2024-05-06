'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LuPenLine } from 'react-icons/lu'
import clsx from 'clsx'

import { Button } from '@/components/shadcn-ui'
import { useConversation } from '@/hooks'
import ChatBox from './chat-box'

const ChatList: FC = ({
  initialItems
}) => {
  const router = useRouter()
  const [items, setItems] = useState(initialItems)
  const { conversationId, isOpen } = useConversation()

  return (
    <aside className={clsx(`
      fixed
      inset-y-0
      pb-20
      lg:pb-0
      lg:left-16
      lg:w-80
      lg:block
      overflow-y-auto
      border-r`, 
      isOpen ? 'hidden' : 'block w-full left-0'
    )}>
      <div className="
        flex 
        mb-2
        py-2
        pl-4
        pr-2
        border-b 
        items-center 
        justify-between 
      ">
        <p className='text-lg font-bold'>Messages</p>
        <Button size={1} variant='outline' className='p-2'>
          <LuPenLine size={18} />
        </Button>
      </div>
      {initialItems.map((data, idx) => (
        <ChatBox key={`${data.id}-${idx}`} data={data} />
      ))}
    </aside>
  )
}

export default ChatList
