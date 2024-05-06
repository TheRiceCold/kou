import create from 'zustand'

type TStore = {
  user: {
    name: string
    email: string 
    birthdate: string
    gender: 'male' | 'female' | 'other'
  }
  // checkUser: () => Promise<void>
}

export const useUserStore = create<TStore>()
(
  set => ({
    user: {},

  })
)
