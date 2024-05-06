import { FC, ReactNode } from 'react'
import { Sidebar } from '../_components'
import { ChannelList } from './_components'

interface IProps {
  children: ReactNode
}

const ChannelLayout: FC<IProps> = ({ children }) => (
  <Sidebar>
    <div className='h-full'>
      <ChannelList
        initialItems={[
          {
            id: '1',
            name: 'Channel 1'
          },
          {
            id: '2',
            name: 'Code with Wolly'
          }
        ]}
      />
      {children}
    </div>
  </Sidebar>
)

export default ChannelLayout
