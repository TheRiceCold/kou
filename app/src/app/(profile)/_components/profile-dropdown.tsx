import { FC } from 'react'
import {
  Avatar, 
  AvatarImage, 
  AvatarFallback,

  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/shadcn-ui'

const ProfileDropdown: FC = () => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='h-8 w-8 cursor-pointer ml-4'>
          <AvatarImage src='https://github.com/shadcn.png' alt='@wolly' />
          <AvatarFallback>DW</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
           Account Settings
          </DropdownMenuItem>
        <DropdownMenuSeparator />
          <DropdownMenuItem>
           Create a Channel
          </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            Invite users
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <span>Email</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Message</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem disabled>
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileDropdown
