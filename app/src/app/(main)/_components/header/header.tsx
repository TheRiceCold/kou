import { FC, useRef } from 'react'
import { Button } from '@/components/shadcn-ui'

import MoreMenu from './more-menu'
import GetAppDialog from '../get-app-dialog'
import AuthDialog from '@/components/auth/auth-dialog'

import { Header } from '@/components'

const RootHeader: FC = () => {
  const loginRef = useRef()

  return (
    <Header leftContent={() => (
      <div className='hidden sm:flex items-center gap-3'>
        <AuthDialog triggerComponent={() => (
          <Button className='h-8' ref={loginRef}>
            Log In
          </Button>
        )}/>
        <GetAppDialog />
        <MoreMenu loginRef={loginRef} />
      </div>
    )}/>
  )
}

export default RootHeader
