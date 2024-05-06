'use client'
import { FC } from 'react'
import { LuImage, LuSendHorizontal } from 'react-icons/lu'

import { Input } from '@/components/shadcn-ui'
import { useConversation } from '@/hooks'

const Form: FC = () => {
  const { conversationId } = useConversation()

  return (
    <div className="
      flex
      w-full
      py-4
      px-4
      gap-2
      lg:gap-4
      items-center
    ">
      <form className='flex items-center gap-2 lg:gap-4 w-full'>
        <Input placeholder='Write a message to User' />
      </form>
    </div>
  )
}

export default Form
