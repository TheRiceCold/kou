import { FC, useState } from 'react'
import { Input } from '@/components/shadcn-ui'

import SearchList from './search-list'

const SearchInput: FC = () => {
  const [input, setInput] = useState<string>('')

  const handleChange = (e: InputEvent) => {
    setInput(e.target.value)
  }

  return (
    <div className="
      md:mx-8
      sm:mx-4
      flex 
      w-full
      relative 
      justify-end
      items-center 
      max-w-[516px] 
    ">
      <Input 
        className='h-8' 
        placeholder='Search...' 
        onChange={handleChange}
      />
      {!!input &&
        <SearchList data={[
          {
            href: '/profile/1',
            name: 'Dale Wolly',
            img: 'https://github.com/shadcn.png'
          },
          {
            href: '/profile/2',
            name: 'Kaize DW',
            img: 'https://github.com/shadcn.png'
          },
        ]} />
      }
    </div>
  )
}

export default SearchInput
