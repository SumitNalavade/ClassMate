import { useRouter } from "next/router"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../config/firebase"

export const signIn = async () => {
    const provider = new GoogleAuthProvider()

    const { user } = await signInWithPopup(auth, provider)

    window.location.replace("/signup")

}

export const signOut =async () => {
    auth.signOut()

    window.location.replace("/home")
}
