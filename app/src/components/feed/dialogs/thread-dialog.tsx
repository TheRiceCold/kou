import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { 
  Avatar, 
  AvatarImage, 
  AvatarFallback,

  Input,
  Button
} from '@/components/shadcn-ui'

const ThreadDialog: FC = ({ data }) => {
  return (
    <>
      <div className='flex items-center'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@wolly' />
          <AvatarFallback>DW</AvatarFallback>
        </Avatar>
        <div className='flex flex-col ml-4'>
          <Link 
            href='/'
            className='text-md font-semibold hover:underline'
          >
            {data.name}
          </Link>
          <p className='text-sm text-gray-500'>
            1 d ago
          </p>
        </div>
      </div>

      <div className='mx-4 px-4 border-l'>
        <p>{data.text}</p>
        {data.image && (
          <div className='flex w-full pt-2 justify-center'>
          <Image src={data.image} alt='post image' />
          </div>
        )}
      </div>

      <div className='flex space-x-4'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@wolly' />
          <AvatarFallback>DW</AvatarFallback>
        </Avatar>
        <Input placeholder='Write a reply..' />
        <Button>Reply </Button>
      </div>
    </>
  )
}

export default ThreadDialog
