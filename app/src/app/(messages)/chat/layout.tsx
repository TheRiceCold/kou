import { FC, ReactNode } from 'react'

import { Sidebar } from '../_components'
import ChatList from './_components/chat-list'

interface IProps {
  children: ReactNode
}

const ChatLayout: FC<IProps> = ({ children }) => (
  <Sidebar>
    <div className='h-full'>
      <ChatList
        initialItems={[
          {
            id: '1',
            name: 'Name 1'
          },
          {
            id: '2',
            name: 'Name 2'
          }
        ]}
      />
      {children}
    </div>
  </Sidebar>
)

export default ChatLayout
