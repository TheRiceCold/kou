import { 
  AiOutlineFire,
  AiFillFire
} from 'react-icons/ai'
import { FC } from 'react'

const Post: FC = () => (
  <div className="shadow mt-4 rounded-lg h-max">
    <div className="flex items-center justify-between px-4 py-2">
      <div className='w-full flex justify-between'>
        <div className="font-semibold">Wolly</div>
        <span className="text-sm text-gray-500">10h</span>
      </div>
    </div>

    <p className='text-justify px-4 py-2'> {`
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
    `} </p>

    <div className="px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-row-reverse items-center">
        <span className="ml-2 text-gray-500"> 55 </span>
      </div>
        <div className="text-gray-500">
          <span style={{ cursor: 'pointer' }}>10 comments</span>
        </div>
      </div>
    </div>

    <div className='py-2 px-4'>
      <div className='flex space-x-2'>
        <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 text-xl py-2 rounded-lg cursor-pointer text-gray-500">
          {/* <AiOutlineFire size={26} /> */}
          <AiFillFire size={26} color='#EE8726' />
          <span className="text-sm font-semibold">Fire</span>
        </div>
        <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 text-xl py-2 rounded-lg cursor-pointer text-gray-500">
          <i className='bx bx-comment'></i>
          <span className="text-sm font-semibold">Comment</span>
        </div>
        <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 text-xl py-2 rounded-lg cursor-pointer text-gray-500">
          <i className='bx bx-share bx-flip-horizontal'></i>
          <span className="text-sm font-semibold">Repost</span>
        </div>
      </div>
    </div>
  </div>
)

export default Post
