import { FC, ReactElement } from 'react'
import {
  Dialog as DialogUI,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/shadcn-ui'

interface IProps {
  title: string
  description: string
  triggerComponent: ReactElement
  contentString: string
  contentComponent: ReactElement
}

const Dialog: FC<IProps> = ({ 
  title,
  description,
  triggerComponent,
  contentStyle,
  contentComponent,
}) => (
  <DialogUI>
    <DialogTrigger asChild>
      {triggerComponent()}
    </DialogTrigger>
    <DialogContent className={contentStyle}>
      <DialogHeader>
        {!!title && (
          <DialogTitle className='text-2xl'>
            {title}
          </DialogTitle>
        )}
        <DialogDescription>
          {description}
        </DialogDescription>
      </DialogHeader>
      {contentComponent()}
    </DialogContent>
  </DialogUI>
)

export default Dialog
