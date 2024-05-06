'use client'
import { FC, ReactElement } from 'react'

import { 
  LuHome,
  LuMessageCircle,
} from 'react-icons/lu'
import { BsBroadcast } from 'react-icons/bs'

import MobileFooter from './mobile-footer'
import DesktopSidebar from './desktop-sidebar'

interface IProps {
  children: ReactElement
}

const Sidebar: FC<IProps> = ({ children }) => {
  return (
    <div className='h-full'>
      <DesktopSidebar items={items} />
      <MobileFooter items={items} />
      <main className='lg:pl-16 h-full'>
        {children}
      </main>
    </div>
  ) 
}

export default Sidebar

const items = [
  {
    label: 'Home',
    href: '/',
    icon: LuHome,
  },
  {
    label: 'Chat',
    href: '/chat',
    icon: LuMessageCircle,
  },
  {
    label: 'Channels',
    href: '/channels',
    icon: BsBroadcast,
  },
]
