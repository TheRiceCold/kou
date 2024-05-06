import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { GoFileMedia, GoBook } from 'react-icons/go'
import { Textarea, Button } from '@/components/shadcn-ui'

const CreatePost: FC = () => {
  const router = useRouter()

  return (
    <>
      <div className='px-4'>
        <Textarea 
          className='max-h-[314px] mb-4 text-base'
          placeholder='Write something' 
        />
        {/* <Tiptap /> */}
        <div className="
          flex 
          pb-4 
          border-b 
          space-x-4
          border-accent
        ">
          <Button variant='ghost' className='w-1/3 gap-2'>
            <GoFileMedia size={20} />
            <p className='font-bold'>Upload a File</p>
          </Button>
          <Button 
            variant='ghost' 
            className='w-1/3 gap-2'
            onClick={() => router.push('/new-story')}
          >
            <GoBook size={20} />
            <p className='font-bold'>Write a Story</p>
          </Button>
          <Button className='font-bold w-1/3'>
            Post
          </Button>
        </div>
      </div>
    </>
  )
}
export default CreatePost
