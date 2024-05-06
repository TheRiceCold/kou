import { FC } from 'react'
import { 
  GoLink,
  GoShareAndroid,
} from 'react-icons/go'

import {
  Button, 
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/shadcn-ui'

const ShareButton: FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          <GoShareAndroid size={26} />
        </Button>
      </DropdownMenuTrigger> 
      <DropdownMenuContent className='w-56'>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <GoLink size={20} />
            <span className='ml-2'>
              Copy Link
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ShareButton
