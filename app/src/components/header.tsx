import { FC, ReactElement } from 'react'
import Link from 'next/link'

import { LuSearch } from 'react-icons/lu'
import { 
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  
  Input, Button 
} from './shadcn-ui'

import SearchInput from './search-input'

interface IProps {
  leftContent: ReactElement
}

const Header: FC<IProps> = ({ leftContent }) => (
  <header className="
    flex
    px-8
    z-10
    top-0
    fixed
    w-full
    h-[50px] 
    border-b
    items-center
    bg-background
    justify-between
  ">
    <div className="
      ml-8
      flex 
      font-bold
      items-center 
      justify-between
    ">
      <Link href='/'>Kou</Link>
    </div>
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant='outline' 
          className="
            fixed
            left-[45%]
            w-[256px]
            
            flex
            gap-2 
            justify-end
            items-center
            justify-start"
          >
          <LuSearch size={16} />
          <p className='text-base'>Search</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className='w-full'>
          <Input placeholder='search' />
        </DialogHeader>
      </DialogContent>
    </Dialog>
    {leftContent()}
  </header>
)

export default Header
