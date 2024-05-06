import { FC } from 'react'

import SidebarItem from './sidebar-item'
import SubNavItem from '@/types/side-nav-item'

import { SIDEBAR_ITEMS } from '@/constants/sidebar-items'

const Sidebar: FC = () => (
  <aside className="
    top-0
    pt-16
    hidden
    fixed
    h-screen
    space-y-2
    md:flex
    md:w-64
    md:px-2
    md:flex-col
    border-r
    bg-background
  ">
      {SIDEBAR_ITEMS.map((item: SubNavItem, idx: number) => (
        <SidebarItem key={`${item.label}-${idx}`} {...item} />
      ))}
      <span className="
        ml-2
        text-xs 
        absolute 
        bottom-4 
        cursor-pointer
        hover:underline
        text-muted-foreground
      ">
        Kou, Inc. ©2023 All rights reserved
      </span>
  </aside>
)

export default Sidebar
