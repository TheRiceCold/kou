import { FC } from 'react'

import { Separator } from '@/components/shadcn-ui'

import Input from './input'
import RadioGroup from './radio-input'
import DateSelect from './date-select/date-select'

const Form: FC = ({ hook, inputs }) => inputs.map(
  (input, idx: number) => (!!input.id) ? (
    <InputType 
      hook={hook}
      input={input} 
      key={`${input.type}-${idx}`} 
    />
    ) : (
      <div key={`${input.type}-${idx}`}> 
        <InputType hook={hook} input={input} />
    </div>
  )
)

export default Form

const InputType: FC = (props) => {
  switch (props.input.type) {
    case 'separator':
      return <Separator />

    case 'date':
      return <DateSelect {...props} />
    
    case 'radio':
      return <RadioGroup {...props} />

    default:
      return <Input {...props} />
  }
}
