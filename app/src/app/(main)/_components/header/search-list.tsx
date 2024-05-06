import { FC } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { 
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback
} from '@/components/shadcn-ui'

const SearchList: FC = ({ data }) => (
  <div className="
    z-20
    top-11
    left-0 
    h-auto 
    w-full 
    border 
    absolute 
    rounded-md
    max-w-[910px] 
    bg-background
  ">
    {data.map(({ href, img, name }, idx)=> (
      <Button 
        asChild
        variant='ghost'
        key={`${img}-${href}-${idx}`}
        className={clsx(
          idx === 0 && 'mt-2',
          'h-14 w-full justify-start rounded-none'
        )}
      >
        <Link href={href}>
          <Avatar>
            <AvatarImage src={img} alt='@wolly' />
            <AvatarFallback>DW</AvatarFallback>
          </Avatar>
          <p className='ml-2'>{name}</p>
        </Link>
      </Button>
    ))}
  </div>
)

export default SearchList
