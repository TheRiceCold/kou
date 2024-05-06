'use client'
import { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'

const HashtagPage: NextPage = () => {
  const query = useSearchParams().get('query')

  return (
    <h1>{`Hashtag Page: ${query}`}</h1>
  )
}

export default HashtagPage
