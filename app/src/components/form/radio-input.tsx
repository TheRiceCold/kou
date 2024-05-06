import { FC } from 'react'
import { 
  Label,
  RadioGroup,
  RadioGroupItem,
} from '@/components/shadcn-ui'

interface IProps {
  label: string
}

const RadioInput: FC<IProps> = ({ input, hook }) => { 
  const { id, options } = input

  return (
    <>
      <p className='text-sm'>{input.label}</p>
      <RadioGroup 
        className='!flex !mt-2 justify-around'
        onValueChange={val => hook.setValue(id, val)}
      >
        {options.map(({ value, label }, idx: number)=> (
          <div 
            key={`${label}-${idx}`}
            className='flex items-center gap-x-2'
          >
            <RadioGroupItem value={value} id={value} />
            <Label htmlFor={value}>{label}</Label>
          </div>
        ))}
      </RadioGroup>
    </>
  )
}

export default RadioInput
