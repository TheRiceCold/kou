'use client'
import type { NextPage } from 'next'

import { Feed } from '@/components/feed'
import { Header, Sidebar } from './_components'

const RootPage: NextPage = () => (
  <>
    <Header/>
    <Sidebar />
    <Feed />
  </>
)

export default RootPage
