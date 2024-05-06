import Link from 'next/link'
import Image from 'next/image'
import { LuDownload } from 'react-icons/lu'

import { Dialog } from '@/components'
import { Button } from '@/components/shadcn-ui'
import { appleAppStore, googlePlayStore } from '@/constants/images'

const GetAppDialog = () => (
  <Dialog 
    title='Get Kou App'
    description='Download and install our application'
    triggerComponent={() => (
      <Button variant='outline' className='h-8'>
        <LuDownload size={16} className='mr-2' />
        {'Get app'}
      </Button>
    )}
    contentStyle='rm:max-w-md'
    contentComponent={() => (
      <div className='flex items-center space-x-2'>
        <Link href='/' className='grid flex-1 gap-4'>
          <Image alt='Apple App Store' src={appleAppStore} />
        </Link>
        <Link href='/' className='grid flex-1 gap-4'>
          <Image alt='Google Play Store' src={googlePlayStore} />
        </Link>
      </div>
    )}
  />
)

export default GetAppDialog
