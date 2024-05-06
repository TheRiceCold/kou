'use client'
import { 
  FC, 
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'
import { range } from '@/lib/utils'
import DateSelectItem from './date-select-item'

interface IProps {

}

const DateSelect: FC<IProps> = ({ input, hook }) => {
  const { id, label } = input

  const MIN_AGE: number = 7
  const MAX_AGE: number = 100

  const [month, setMonth] = useState<number| string>('')
  const [day, setDay] = useState<number | string>('')
  const [year, setYear] = useState<number| string>('')

  const months: Array<string> = [ 
    'january', 'february', 'march',
    'april', 'may', 'june',
    'july', 'august', 'september',
    'october', 'november', 'december'
  ]

  useEffect(() => {
    if (!!month && !!day && !!year) {
      const dayValue = (Number(day) < 10) ? '0'+day : day

      const monthNum = months.findIndex(val => val === month) + 1
      const monthValue = (monthNum < 10) ? `0${monthNum}` : monthNum

      hook.setValue(id, `${monthValue}-${dayValue}-${year}`)
    }
  }, [month, day, year])

  const numOfDays: number = daysInMonth(Number(year), Number(month))
  const days: Array<number> = range(1, numOfDays)

  const currentYear: number = new Date().getFullYear()
  const minYear: number = currentYear - MAX_AGE
  const maxYear: number = currentYear - MIN_AGE
  const years: Array<number> = range(minYear, maxYear).reverse()

  function daysInMonth( year: number, month: number) {
    switch (month) {
      case 2:
        const leapYear = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
        return leapYear ? 29 : 28

      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        return 31

      default:
        return 30
    }
  }

  return (
    <div>
      <p className='text-sm mb-2'>{label}</p>
      <div className='flex gap-x-4 !mb-4'>
        <DateSelectItem 
          label='month'
          options={months}
          setValue={setMonth}
        />
        <DateSelectItem 
          label='day'
          options={days}
          setValue={setDay}
        />
        <DateSelectItem 
          label='year'
          options={years}
          setValue={setYear}
        />
      </div>
      {/* <p className='text-sm text-destructive'> */}
      {/*   {hook.errors[id]?.message} */}
      {/* </p> */}
    </div>
  )
}

export default DateSelect
