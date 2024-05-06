import { FC } from 'react'
import { 
  LuFlag,
  LuMoreHorizontal
} from 'react-icons/lu'
import { 
  Button,

  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/shadcn-ui'

const OptionsMenu: FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="
          p-2
          flex 
          text-[26px] 
          rounded-full
          text-gray-500 
          cursor-pointer"
          variant='ghost'
        >
          <LuMoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LuFlag size={20} />
            <span className='ml-2'>
              Report
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default OptionsMenu
