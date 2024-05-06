'use client'
import { 
  FC, 
  useRef,
  useState, 
  useEffect,
} from 'react'
import { appleAppStore } from '@/constants/images'

import MessageBox from './message-box'

const Body: FC = () => {
  const [messages, setMessages] = useState([
    {
      sender: {
        email: 'sender@email.com',
        name: 'Sender Name'
      },
      body: 'This is a message',
      image: appleAppStore,
      createdAt: '2022-05-05T02:57:31Z'
    } 
  ])

  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
     
  }, [])

  return (
    <div className='flex-1 overflow-y-auto'>
      {messages.map((message, idx) => (
        <MessageBox 
          data={message} 
          key={`${message.id}-${idx}`}
          isLast={idx === messages.length - 1} 
        />
      ))}
      <div ref={bottomRef} className='pt-24' />
    </div>
  )
}

export default Body
