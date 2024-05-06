'use client'
import { FC, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import clsx from 'clsx'

import { Button } from './shadcn-ui'

const ScrollButton: FC = () => { 
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop
    setVisible(scrolled > 300) 
  } 
  
  const scrollToTop = () => scrollTo({ top: 0,  behavior: 'smooth' })
  
  addEventListener('scroll', toggleVisible)
  
  return ( 
    <Button
      className={clsx(`
        p-2
        !fixed 
        bottom-5 
        right-5 
        rounded-full 
        leading-tight 
        shadow-md`,
        !visible && 'hidden'
      )} onClick={scrollToTop}
    >
      <AiOutlineArrowUp />
    </Button>
  )
} 
  
export default ScrollButton 
