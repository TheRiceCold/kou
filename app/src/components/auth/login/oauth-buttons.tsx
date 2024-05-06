import { FC } from 'react'
import Image from 'next/image'
import { Auth } from 'aws-amplify'

import { Button } from '@/components/shadcn-ui'
import { gmailIcon, facebookIcon } from '@/constants/images'

const OAuthButtons: FC = () => {
  return (
    <>
      <Button 
        variant='outline'
        onClick={() => Auth.federatedSignIn({ provider: "Google" })}
      >
        <Image 
          src={gmailIcon}
          alt='gmail icon'
          className='mr-2 h-4 w-4'
        /> Login with Gmail
      </Button>
      <Button 
        variant='outline'
        onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}
      >
        <Image 
          src={facebookIcon}
          alt='facebook icon'
          className='mr-2 h-4 w-4'
        /> Login with Facebook
      </Button>

      <span className='flex justify-center'>
        OR
      </span>

    </>
  )
}

export default OAuthButtons
