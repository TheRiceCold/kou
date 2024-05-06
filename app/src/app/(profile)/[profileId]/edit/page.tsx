'use client'
import type { NextPage } from 'next'

import { 
  Header, 
  Content,
  UserPhoto,
  CoverPhoto,
} from '@/components/profile'

const ProfileEditPage: NextPage = () => {

  return (
    <main className='flex h-screen w-full'>
      <Header />
      <div className='h-screen w-full'>
        <CoverPhoto />
        <UserPhoto />
        {/* <Content /> */}
      </div>
    </main>
  )
}

export default ProfileEditPage
