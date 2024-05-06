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
      <div className='flex'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@wolly' />
          <AvatarFallback>DW</AvatarFallback>
        </Avatar>
        <div className='flex-col w-full ml-2'>
          <span className='font-bold'>{data.name}</span>
          <div className='flex space-x-4'>
            <Input placeholder='Share your thoughts' />
            <Button>Reply</Button>
          </div>
        </div>
      </div>
      <div className='border p-4 rounded-lg ml-12'>
        <div className='flex items-center'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@wolly' />
            <AvatarFallback>DW</AvatarFallback>
          </Avatar>
          <div className='w-full flex ml-2 justify-between'>
            <Link 
              href='/'
              className='font-semibold hover:underline'
            >
              {data.name}
            </Link>
            <p className='text-gray-500 cursor-pointer'>
              1d
            </p>
          </div>
        </div>

        <div className='mx-6 px-4'>
          <p>{data.text}</p>
          {data.image && (
            <div className='flex w-full pt-2 justify-center'>
            <Image src={data.image} alt='post image' />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ThreadDialog
