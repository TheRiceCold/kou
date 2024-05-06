'use client'
import './globals.css'

import { Toaster } from '@/components/shadcn-ui'

const AppLayout = ({ children }: {
  children: React.ReactElement
}) => (
  <html lang='en' className='dark'>
    <body>
      <main className='w-full'>
        {children}
      </main>
      <Toaster />
    </body>
  </html>
)

export default AppLayout
