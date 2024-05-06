import { FC } from 'react'
import { TbMessage } from 'react-icons/tb'
import { AiOutlineStar } from 'react-icons/ai'
import { LuBell, LuBook } from 'react-icons/lu'
import { TbBrandAppleArcade } from 'react-icons/tb'

import { Header } from '@/components'
import { 
  Button,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/shadcn-ui'

import ProfileDropdown from './profile-dropdown'

const ProfileHeader: FC = () => {
  const buttons = [
    { 
      icon: LuBook,
      tooltip: 'Stories'
    },
    { 
      icon: TbMessage,
      tooltip: 'Messages'
    },
    { 
      icon: LuBell,
      tooltip: 'Notifications'
    },
    { 
      icon: AiOutlineStar,
      tooltip: 'Stars'
    },
  ]

  return (
    <Header leftContent={() => (
      <div className='flex items-center gap-x-2'>
        {buttons.map(({ icon: Icon, tooltip }, idx) => (
          <Tooltip key={`${tooltip}-${idx}`}>
            <TooltipTrigger asChild>
              <Button 
                size='sm' 
                variant='ghost' 
                className='rounded-full p-2'
              > 
                <Icon size={20} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <ProfileDropdown />
      </div>
    )}/>
  )
}

export default ProfileHeader
