'use client'
import type { NextPage } from 'next'
import { LuPlusCircle } from 'react-icons/lu'
import clsx from 'clsx'

import { Button } from '@/components/shadcn-ui'
import { EmptyState } from '../_components'
import { CreateDialog } from './_components'
import { useConversation } from '@/hooks'

const ChannelPage: NextPage = () => {
  const { isOpen } = useConversation()

  return (
    <div className={clsx(
      'lg:pl-80 h-screen lg:block',
      isOpen ? 'block': 'hidden'
    )}>
      <EmptyState content={() => (
        <div className="
          flex 
          flex-col 
          gap-y-4
          text-center 
          items-center 
        ">
          <h3 className='text-2xl font-bold'> 
            Select a channel or create a new channel
          </h3>
          <CreateDialog
            triggerComponent={() => (
              <Button>
                <LuPlusCircle size={24} />
                <p className='text-lg ml-2'>
                  Create a channel
                </p>
              </Button>
            )}
          />
        </div>
      )}/>
    </div>
  )
}

export default ChannelPage
