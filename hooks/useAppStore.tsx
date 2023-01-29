import { create } from 'zustand'
import { ICourse } from '../utils/interface'

interface AppState {
  userCourses?: ICourse[]
  setUserCourses: (userCourses: ICourse[]) => void
}

const useAppStore = create<AppState>()((set) => ({
    userCourses: undefined,
    setUserCourses: (userCourses) => ({ userCourses })
}))

export default useAppStore