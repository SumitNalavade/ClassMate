import { create } from 'zustand'

import { User } from '@supabase/supabase-js'

interface AppState {
  currentUser?: User
  setCurrentUser: (currentUser: User) => void
}

const useAppState = create<AppState>()((set) => ({
  currentUser: undefined,
  setCurrentUser: (user) => set((state) => ({ currentUser: user }))
}))

export default useAppState;