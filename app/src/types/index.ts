type Conversation = {
  id: string,
  createdAt: string,
  lastMessageAt: Date
  name: string
  isGroup: boolean
  messages: Message[]
}

type Message = {
  id: string,
  body: string
  image: string,
  createdAt: Date
  seen: boolean
  conversation: Conversation
}
