import { FC, useState } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

import { 
  LuX,
  LuMaximize2,
  LuChevronDown,
} from 'react-icons/lu'
import { BiMessageSquareEdit } from 'react-icons/bi'

import { Button, Input } from './shadcn-ui'

const ChatBox: FC = () => {
  const router = useRouter()
  const [show, setShow] = useState<boolean>(false)

  const handleToggle = () => setShow(!show)

  return (
    <>
      <div className='fixed bottom-0 right-0 mb-4 mr-4'>
        <Button className='rounded-full !p-4 h-14' onClick={handleToggle}>
          <BiMessageSquareEdit size={28} />
        </Button>
      </div>
      <div className={clsx(
        'fixed bottom-0 right-24 w-96',
        !show && 'hidden'
      )}>
        <div className="
          w-full
          border-2
          max-w-lg 
          shadow-md 
          rounded-md 
          bg-background/30
          backdrop-blur-2xl
        ">
          <div className='p-2 border-b bg-primary rounded-t-sm flex justify-between items-center'>
            <p className='text-base font-bold'>Some User</p>
            <div>
              <Button 
                className='rounded-full p-2'
                onClick={() => router.push('/chat')}
              >
                <LuMaximize2 size={20} />
              </Button>
              <Button className='rounded-full p-2' onClick={handleToggle}>
                <LuChevronDown size={20} />
              </Button>
              <Button className='rounded-full p-2' onClick={handleToggle}>
                <LuX size={20} />
              </Button>
            </div>
          </div>
          <div className="
            p-4 
            h-80 
            space-y-4
            no-scrollbar
            overflow-y-auto
          ">
            <div className='text-right'>
              <p className="bg-primary rounded-lg py-2 px-4 inline-block">hello</p>
            </div>
            <div className=''>
              <p className="bg-accent rounded-lg py-2 px-4 inline-block">This is a response from the chatbot.</p>
            </div>
            <div className="text-right">
              <p className="bg-primary rounded-lg py-2 px-4 inline-block">this example of chat</p>
            </div>
            <div className=''>
              <p className="bg-accent rounded-lg py-2 px-4 inline-block">This is a response from the chatbot.</p>
            </div>
            <div className='text-right'>
              <p className="bg-primary rounded-lg py-2 px-4 inline-block">design with tailwind</p>
            </div>
            <div className=''>
              <p className="bg-accent rounded-lg py-2 px-4 inline-block">This is a response from the chatbot.</p>
            </div>
            <div className='text-right'>
              <p className="bg-primary rounded-lg py-2 px-4 inline-block">design with tailwind</p>
            </div>
            <div className=''>
              <p className="bg-accent rounded-lg py-2 px-4 inline-block">This is a response from the chatbot.</p>
            </div>
          </div>
          <div className='p-2 flex'>
            <Input 
              className='border-white'
              placeholder='write a message...' 
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatBox
