'use client'
import type { NextPage } from 'next'

import { TooltipProvider } from '@/components/shadcn-ui'
import { ChatBox } from '@/components'
import { 
  Header,
  Content,
  UserPhoto,
  CoverPhoto,
} from '../_components'

import { testWallpaper } from '@/constants/images'

const ProfilePage: NextPage = () => {
  const user = {
    name: 'Wolly',
    profile: {
      coverPhoto: testWallpaper,
      avatar: 'https://github.com/shadcn.png',
    }
  }

  return (
    <TooltipProvider>
      <Header />
      <div className='h-screen w-full'>
        <UserPhoto 
          name={user.name}
          data={user.profile.avatar}
        />
        <CoverPhoto data={user.profile.coverPhoto} />
        <Content />
        <ChatBox />
      </div>
    </TooltipProvider>
  )
}

export default ProfilePage
