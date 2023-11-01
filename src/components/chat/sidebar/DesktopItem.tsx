import { FC } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

interface IProps {
  label: string
  icon: any
  href: string
  active: boolean
}

const DesktopItem: FC<IProps> = ({
  label,
  icon: Icon,
  href,
  active,
}) => (
  <li>
    <Link href={href}
      className={clsx(`
        group
        flex
        gap-x-3
        round-md
        p-3
        text-sm
        leading-6
        font-semibold
        text-gray-500
        hover:text-black
        hover:bg-gray-100`,
        active && 'bg-gray-100 text-black'
      )}
    >
      <Icon className='h-6 w-6 shrink-0' />
      <span className='sr-only'>{label}</span>
    </Link>
  </li>
)

export default DesktopItem
