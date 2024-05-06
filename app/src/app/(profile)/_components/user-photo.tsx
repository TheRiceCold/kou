import  { FC } from 'react'
import {
  Avatar, 
  AvatarImage, 
  AvatarFallback,
} from '@/components/shadcn-ui'

interface IProps {
  data: string,
  name: string
}

const UserPhoto: FC<IProps> = ({ data, name }) => (
  <Avatar className="
    z-10
    absolute
    left-0
    right-0
    ml-auto
    mr-auto

    top-60
    sm:top-56
    md:top-52

    h-24
    xs:h-32
    sm:h-36
    md:h-48

    w-24
    xs:w-32
    sm:w-36
    md:w-48

    border-4
    border-accent"
  >
    <AvatarImage src={data} alt='@wolly' />
    <AvatarFallback>
      {'DW'}
    </AvatarFallback>
  </Avatar>
)

export default UserPhoto
