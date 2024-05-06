
import create from 'zustand'

type TStore = {
  post: {
    text: string
    image: string
  }
  // checkUser: () => Promise<void>
}

export const usePostStore = create<TStore>()
(
  set => ({
    post: {},
    createPost: () => {

    },
  })
)
