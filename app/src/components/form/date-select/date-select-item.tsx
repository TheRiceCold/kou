import { 
  FC, 
  Dispatch,
  SetStateAction,
} from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn-ui'
import { capitalize } from '@/lib/utils'

interface IProps {
  label: string
  options: Array<string|number>
  setValue: Dispatch<SetStateAction<number | string>>
}

const DateSelectItem: FC<IProps> = ({
  label,
  options, 
  setValue,
}) => (
  <Select onValueChange={(value: string) => setValue(value)}> 
    <SelectTrigger>
      <SelectValue placeholder={capitalize(label)} />
    </SelectTrigger>
    <SelectContent className='h-52'>
      <SelectGroup>
        {options.map((val: number, idx: number) => (
          <SelectItem 
            value={val.toString()} 
            key={`${val}-${idx}`}
          > {capitalize(val.toString())}
          </SelectItem>
        ))} 
      </SelectGroup>
    </SelectContent>
  </Select>
)

export default DateSelectItem
