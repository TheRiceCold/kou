import { FC } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

interface IProps {
  href: string
  icon: any
  active: boolean
  onClick: () => void
}

const MobileItem: FC<IProps> = ({
  href,
  icon: Icon,
  active,
  onClick
}) => (
  <Link
    onClick={onClick}
    href={href}
    className={clsx(`
      group
      flex
      gap-x-3
      text-sm
      leading-6
      font-semibold
      w-full
      justify-center
      p-4
      hover:text-black
      hover:bg-gray-100
    `,
      active && 'bg-gray-100 text-black'
    )}
  >
    <Icon className='h-6 w-6' />
  </Link>
)

export default MobileItem
