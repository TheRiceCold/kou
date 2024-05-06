import { FC, ReactElement } from 'react'

interface IProps {
  content: ReactElement
}

const EmptyState: FC<IProps> = ({ content }) => (
  <div className="
    flex
    px-4 
    py-10 
    sm:px-6 
    lg:px-8
    h-full
    justify-center
    items-center
  ">
    {content()}
  </div>
)

export default EmptyState
