import { useParams } from 'next/navigation'
import { useMemo } from 'react'

export const useConversation = () => {
  const params = useParams()

  const conversationId = useMemo(() => {
    if (!params?.conversationdId) {
      return ''
    }

    return params.conversationdId as string
  }, [params?.conversationId])

  const isOpen = useMemo(() => !!conversationId, [conversationId])

  return useMemo(() => ({
    isOpen,
    conversationId
  }), [isOpen, conversationId])
}
