import { FC } from 'react'

const EmptyState: FC = () => (
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
    <div className="text-center items-center flex flex-col">
      <h3 className="
        mt-2
        text-2xl
        font-semibold
      "> 
        Select a chat or start a new conversation
      </h3>
    </div>
  </div>
)

export default EmptyState
