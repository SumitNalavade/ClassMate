import { create } from 'zustand'

import { IUser } from '../utils/interfaces'

interface AppState {
  currentUser?: IUser
  setCurrentUser: (currentUser: IUser) => void
}

const useAppState = create<AppState>()((set) => ({
  currentUser: undefined,
  setCurrentUser: (user) => set((state) => ({ currentUser: user }))
}))

export default useAppState;