import { 
  LuHome, 
  LuBoxes,
  LuCode2,
  LuPalette,
  LuCompass,
  LuLineChart,
} from 'react-icons/lu'
import { FaChessPawn } from 'react-icons/fa'
import { TbBrandAppleArcade } from 'react-icons/tb'

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: LuHome
  }, 
  {
    label: 'Trends',
    href: '/trends',
    icon: LuLineChart
  },
  {
    label: 'Explore',
    icon: LuCompass,
    subMenu: true,
    subMenuItems: [
      { subLabel: 'Gaming', path: '/gaming' },
      { subLabel: 'Sports', path: '/sports' },
      { subLabel: 'Art', path: '/art' },
      { subLabel: 'Technology', path: '/technology' },
    ]
  },
  {
    label: 'Clusters',
    icon: LuBoxes,
    subMenu: true,
    subMenuItems: [
      { subLabel: 'C++ Enthusiasts', path: '/c++-enthusiasts' },
      { subLabel: 'NextJS Developers', path: '/nextjs-developers' },
    ]
  },
  {
    label: 'Games',
    icon: TbBrandAppleArcade,
    subMenu: true,
    subMenuItems: [
      { subLabel: 'Coding Challenges' },
      { subLabel: 'Chess' },
      { subLabel: 'Tetris' },
    ]
  },
  {
    label: 'Themes',
    icon: LuPalette,
    subMenu: true,
    subMenuItems: [
      { label: 'Dark Mode'  },
      { label: 'Dracula' },
      { label: 'Nord' },
      { label: 'Gruvbox' },
    ]
  },
]

type SidebarItem = {
  label: string
  icon?: JSX.Element
  path?: string
  subMenu?: boolean
  subMenuItems?: SidebarItem[]
}
