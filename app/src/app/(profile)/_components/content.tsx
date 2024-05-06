import { FC, useState } from 'react'

import { Button } from '@/components/shadcn-ui'

import Post from '@/components/feed/post'
import CreatePost from './create-post'
import Details from './details'

import { 
  appleAppStore, 
  googlePlayStore, 
} from '@/constants/images'

const Content: FC = () => {
  const [posts, setPosts] = useState([
    {
      id: '1234',
      data: {
        name: 'Name 1',
        username: 'Username 1',
        text: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mauris diam, mollis et quam nec, placerat ornare nisl. In non porta turpis. 
          Aliquam congue erat et nisi suscipit, sit amet porttitor mi dignissim. Aenean eleifend sodales massa vitae dictum. Ut ligula nisl, 
          condimentum sed convallis vel, vulputate vitae tellus. Quisque nisl elit, rhoncus a sagittis sollicitudin, iaculis porttitor ex. Praesent in purus 
          volutpat, ornare lacus non, facilisis mi. Sed a nunc hendrerit, cursus magna vel, interdum ex. Cras justo ex, laoreet laoreet ligula vitae, 
          porta vestibulum dui. Quisque dignissim sed arcu vitae pharetra. Fusce non ante gravida, aliquet ex eget, finibus mi. Duis rhoncus 
          scelerisque enim, id egestas metus pulvinar sed. Vestibulum commodo in est sed bibendum. Duis gravida orci et justo dignissim feugiat. 
          Nunc accumsan euismod nulla. Maecenas laoreet orci pellentesque hendrerit tempus.
        `
      },
    },
    {
      id: '3456',
      data: {
        name: 'Name 3',
        username: 'Username 3',
        text: 'Post 3',
        image: appleAppStore
      }, 
    },
    {
      id: '6789',
      data: {
        name: 'Name 4',
        username: 'Username 4',
        text: 'Post 4',
        image: googlePlayStore
      },
    },
  ])

  return (
    <div className="
      z-5
      top-72
      left-0
      right-0
      ml-auto
      mr-auto
      w-[90%]
      absolute
      flex-col 
      shadow-xl
      rounded-xl
      bg-accent/30
      backdrop-blur-2xl
    ">
      <Details />
      <hr className='my-4' />
      <div className='flex justify-center'>
        <div className='w-2/5'>
          <CreatePost />
          {posts.map(post => (
            <Post key={post.id} id={post.id} data={post.data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Content
