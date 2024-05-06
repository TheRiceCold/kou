import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { 
  Avatar, 
  AvatarImage, 
  AvatarFallback,
} from '@/components/shadcn-ui'
import OptionsMenu from './options-menu'

const PostContent: FC = ({ data }) => {
  const [isReply, setIsReply] = useState<boolean>(false)

  return (
    <> 
      <div className='px-4 flex justify-between items-center'>
        <div className='flex gap-2 justify-center'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@wolly' />
            <AvatarFallback>DW</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <Link className="
              text-sm
              font-semibold
              hover:underline" 
              href={`/${data.username}`}
            > {data.name}
            </Link>
            <p className='text-sm text-gray-500'>
              1 d ago
            </p>
          </div>
        </div>
        <OptionsMenu />
      </div>

      <p className={clsx(
        'mx-8 mt-[15px] font-normal',
        isReply && 'px-4 border-l'
      )}>
        {data.text}
      </p>

      <div className='flex justify-center mt-[15px] cursor-pointer'>
        {data.image && <Image src={data.image} alt='post image' />} 
      </div>
    </>
  )
}

export default PostContent
