import type { NextPage } from 'next'

import { 
  Form, 
  Body, 
  Header,
  EmptyState,
} from '../../_components'

const ChatId: NextPage = () => {
  const conversation = {
    id: '32',
    name: 'Conversation name',
    isGroup: false
  }

  if (!conversation) {
    return (
      <div className='lg:pl-80 h-screen'>
        <div className='h-full flex flex-col'>
          <EmptyState />
        </div>
      </div>
    )
  }

  return (
    <div className='lg:pl-80 h-screen'>
      <div className='h-full flex flex-col'>
        {/* <Header conversation={conversation} /> */}
        {/* <Body /> */}
        {/* <Form /> */}
      </div>
    </div>
  )
}

export default ChatId
