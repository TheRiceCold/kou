import { FC } from 'react'
import Image from 'next/image'

const CoverPhoto: FC = ({ data }) => (
  <div className=" 
    flex
    mt-12
    w-full
    bg-accent
    justify-center
    cursor-pointer"
  >
    <Image 
      src={data} 
      alt='cover photo'
      className='h-[348px] object-cover' 
    />
  </div>
)

export default CoverPhoto
