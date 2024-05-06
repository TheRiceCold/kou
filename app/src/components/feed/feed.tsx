'use client'
import { FC, useState } from 'react'
import Link from 'next/link'
import Post from './post'
import { 
  appleAppStore, 
  googlePlayStore, 
} from '@/constants/images'
import { Button } from '@/components/shadcn-ui'

const Feed: FC = ({ data, id }) => {
  const [posts, setPosts] = useState([
    {
      id: '1234',
      data: {
        name: 'Wolly',
        username: 'kaizen_dw',
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

  const hashtags: Array<string> = [
    'kou', 'ufc295', 'nba2k',
    'halloween', 'november', 'elonmusk',
    'nextjs', 'mongodb', 'rubyonrails',
    'philippines', 'flutter', 'hunterxhunter',
    'github', 'flutter', 'berserk',
  ]

  return (
    <div className='w-full md:pl-64 mt-[50px]'>
      <div className="
        flex 
        px-8
        py-2
        border 
        space-x-4
        items-center 
        no-scrollbar
        overflow-auto
      ">
        {hashtags.map((tag, idx) => (
          <Button 
            asChild
            key={`${tag}-${idx}`} 
            className='bg-accent rounded-full'
          > 
            <Link href={`hashtag?query=${tag}`}>
              #{tag}
            </Link>
          </Button>
        ))}
      </div>
      {posts.map(post => (
        <Post key={post.id} id={post.id} data={post.data} />
      ))}
    </div>
  )
}

export default Feed
