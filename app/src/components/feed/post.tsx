import { FC } from 'react'

import PostContent from './post-content'

import { 
  LikeButton,
  ReplyButton,
  RepostButton,
  SaveButton,
  ShareButton
} from './buttons'

const Post: FC = ({ data }) => {

  return (
    <article className="
      py-4 
      border
      mx-auto
      max-w-[900px] 
      2xl:max-w-[1000px]
    ">
      <PostContent data={data} />
      <div className="
        flex 
        mx-4
        mt-[7px] 
        items-center 
        text-gray-500
        justify-between
      ">
        <div className='flex gap-2 justify-evenly'> 
          <LikeButton />
          <ReplyButton data={data} />
          <RepostButton data={data} />
        </div>
        <div className='flex gap-2 justify-evenly'> 
          <SaveButton data={data} />
          <ShareButton data={data} />
        </div>
      </div>
    </article>
  )
}

export default Post
