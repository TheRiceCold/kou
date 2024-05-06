'use client'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import {
  Button,
  Avatar, 
  AvatarImage, 
  AvatarFallback,
} from '@/components/shadcn-ui'
import { useConversation } from '@/hooks'

const DesktopSidebar = ({ items }) => {
  const { conversationId } = useConversation()
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleClick = (href: string) => {
    router.push(href)
    setIsActive(pathname === href)
  }

  return (
    <nav className="
      px-2
      flex
      fixed
      left-0
      justify-between
      lg:z-40
      lg:pb-4
      lg:flex-col
      lg:inset-y-0
      lg:border-r-[1px] 
      lg:overflow-y-auto
    ">
      <div className="
        mt-4
        flex 
        flex-col 
        space-y-2
        items-center 
      ">
        {items.map(({ icon: Icon, href }, idx) => (
          <Button 
            variant='ghost'
            className='p-3' 
            key={`${href}-${idx}`}
            onClick={() => handleClick(href)}
          >
            <Icon size={22} />
          </Button>
        ))}
      </div>
      <Button 
        size={1}
        variant='ghost' 
        className='p-0 rounded-full'
      >
        <div className="
          h-8
          w-8
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
      </Button>
    </nav>
  )
}

export default DesktopSidebar
