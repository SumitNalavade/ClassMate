import type { AppProps } from "next/app";
import { collection, getDocs, where, query } from "firebase/firestore";
import useAppStore from "../hooks/useAppStore";
import { db } from "../config/firebase";

import "../styles/globals.css";

import { ICourse } from "../utils/interface";
import { auth } from "../config/firebase";

export default function App({ Component, pageProps }: AppProps) {
  const setUserCourses = useAppStore((state) => state.setUserCourses)

  const getUserCourses = async(userid: string) => {
    const q = query(collection(db, "courses"), where("user", "==", userid));
    const querySnapshot = (await getDocs(q)).docs.map((doc) => doc.data())

    return querySnapshot
  }

  auth.onAuthStateChanged(async (user) => {
    if(user) {
      const courses = await getUserCourses(user.uid) as ICourse[]

      setUserCourses(courses)
    }
  })

  return <Component {...pageProps} />;
}
