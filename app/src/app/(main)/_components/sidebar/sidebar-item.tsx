import { FC, useState } from 'react'
import { useRouter } from 'next/navigation'

import { LuChevronDown } from 'react-icons/lu'
import { Button } from '@/components/shadcn-ui'

const SidebarItem: FC = ({ 
  label,
  href,
  icon: Icon,
  subMenu,
  subMenuItems
}) => {
  const router = useRouter()
  const [subMenuOpen, setSubMenuOpen] = useState(false)

  const renderButton = () => (
    <Button className="
      w-full
      text-md
      justify-start
      hover:bg-accent" 
      variant='ghost'
      onClick={() => router.push(href)}
    >
      <div className='flex'>
        <Icon size={20} className='mr-4' />
        <span>{label}</span>
      </div>
      {subMenu && ( <LuChevronDown 
          size={20} 
          className={subMenuOpen ? 'rotate-180 transition' : ''} 
        />
      )}
    </Button>
  )

  return (
    <div>
      {subMenu ? (
        <>
          <Button className="
            w-full 
            text-md 
            justify-between
            hover:bg-accent" 
            variant='ghost'
            onClick={() => setSubMenuOpen(!subMenuOpen)}
          >
            <div className='flex'>
              <Icon size={20} className='mr-4'/>
              <span>{label}</span>
            </div>
            <LuChevronDown 
              size={20} 
              className={subMenuOpen ? 'rotate-180 transition' : ''} 
            />
          </Button>
          {subMenuOpen && (
            <div className='my-2 ml-6 flex flex-col border-l'>
              {subMenuItems?.map(({ subLabel }, idx: number) => (
                  <Button
                    key={idx}
                    variant='ghost'
                    className='text-sm justify-start'
                    onClick={() => router.push(
                      `/${label}/${subLabel.replace(' ', '-')}`.toLowerCase()
                    )}
                  >
                    <span>{subLabel}</span>
                  </Button>
                )
              )}
            </div>
          )}
        </>
      ) : renderButton()}
    </div>
  )
}

export default SidebarItem
