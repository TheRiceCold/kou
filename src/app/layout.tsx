import type { Metadata } from 'next'
import AppRegistry from './AppRegistry'
import './globals.css'

export const metadata: Metadata = {
  title: 'Xed',
  description: 'Generated by create next app',
}

const AppLayout = ({ children }: {
  children: React.ReactNode
}) => (
  <html lang='en'>
    <body>
      <AppRegistry>{children}</AppRegistry>
    </body>
  </html>
)

export default AppLayout
