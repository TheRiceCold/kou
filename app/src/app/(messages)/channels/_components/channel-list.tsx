'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { LuPlus } from 'react-icons/lu'

import { Button } from '@/components/shadcn-ui'

import ChannelBox from './channel-box'
import SearchDialog from './search-dialog'
import CreateDialog from './create-dialog'
import { useConversation } from '@/hooks'

interface IProps {
  initialItems: {
    id: string,
    name: string
  }[]
}

const ChannelList: FC<IProps> = ({ initialItems }) => {
  const router = useRouter()
  const [items, setItems] = useState(initialItems)
  const { conversationId, isOpen } = useConversation()

  return (
    <aside className={clsx(`
      fixed
      pb-20
      inset-y-0
      lg:pb-0
      lg:w-80
      lg:block
      lg:left-16
      border-r
      overflow-y-auto`, 
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
        <p className='text-lg font-bold'>Channels</p>
        <CreateDialog 
          triggerComponent={() => (
            <Button size={1} variant='outline' className='p-2'>
              <LuPlus size={18} />
            </Button>
          )}
        />
      </div>
      <SearchDialog />
      {initialItems.map((data, idx) => (
        <ChannelBox key={`${data.id}-${idx}`} data={data} />
      ))}
    </aside>
  )
}

export default ChannelList
