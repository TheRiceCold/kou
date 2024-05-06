'use client'
import type { NextPage } from 'next'
import clsx from 'clsx'

import { useConversation } from '@/hooks'
import { EmptyState } from '../_components'

const ChatPage: NextPage = () => {
  const { isOpen } = useConversation()

  return (
    <div className={clsx(
      'lg:pl-80 h-screen lg:block',
      isOpen ? 'block': 'hidden'
    )}>
      <EmptyState content={() => (
        <div className="text-center items-center flex flex-col">
          <h3 className='mt-2 text-2xl font-bold'> 
            Select a chat or start a new conversation
          </h3>
        </div>
      )} />
    </div>
  )
}

export default ChatPage
