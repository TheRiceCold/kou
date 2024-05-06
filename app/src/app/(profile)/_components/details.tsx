import { FC } from 'react'
import { Button } from '@/components/shadcn-ui'

import EditDialog from './edit-dialog'

const Details: FC = () => {
  const isUser = false 

  return (
    <div className="
      mt-6
      flex 
      justify-between

      sm:mx-8
      md:mx-16
      lg:mx-32
      xl:mx-64
    ">
      <div className='flex gap-x-8'>
        <div className='flex-col text-center'>
          <h4 className='font-bold cursor-pointer'>10</h4>
          <p className='text-sm hover:underline cursor-pointer'>
            Posts
          </p>
        </div>
        <div className='flex-col text-center'>
          <h4 className='font-bold cursor-pointer'>100</h4>
          <p className='text-sm hover:underline cursor-pointer'>
            Followers
          </p>
        </div>
        <div className='flex-col text-center'>
          <h4 className='font-bold cursor-pointer'>25</h4>
          <p className='text-sm hover:underline cursor-pointer'>
            Replies
          </p>
        </div>
      </div>
      <div className='flex-col mt-32 gap-y-4'>
        <h1 className='text-center font-bold text-3xl'>
          Wolly
        </h1>
        <p className='text-center text-sm text-gray-300'>
          @kaizen_dw
        </p>
        <p className='w-fit text-sm mt-4 break-normal'>
          {`He who has a sword, and knows how to use it, 
          but keeps it sheathed shall inherit the earth.`}
        </p>
      </div>
      {isUser ? <EditDialog /> : (
        <Button className='font-bold ml-32'>Follow</Button>
      )}
    </div>
  )
}

export default Details
