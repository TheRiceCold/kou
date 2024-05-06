import { FC } from 'react'
import { 
  UilCommentAltQuestion,
} from '@iconscout/react-unicons'
import { 
  LuInfo,
  LuLogIn,
  LuLanguages,
  LuHelpCircle,
  LuMoreVertical,
} from 'react-icons/lu'
import {
  Button, 
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/shadcn-ui'

const MoreMenu: FC = ({ loginRef }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant='outline' className='h-8'>
        <LuMoreVertical size={18} />
      </Button>
    </DropdownMenuTrigger> 
    <DropdownMenuContent className='w-56'>
      <DropdownMenuGroup>
        <DropdownMenuItem 
          className='cursor-pointer'
          onClick={() => loginRef.current.click()}
        >
          <LuLogIn size={18} />
          <span className='ml-2'>Login / Sign Up</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer'>
          <LuLanguages size={18} />
          <span className='ml-2'>Language</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer'>
          <LuHelpCircle size={18} />
          <span className='ml-2'>Help and feedback</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer'>
          <LuInfo size={20} />
          <span className='ml-2'>About Xed</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
)

export default MoreMenu
