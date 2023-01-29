import type { AppProps } from "next/app";
import "../styles/globals.css";

import supabase from "../config/supabase";
import useAppState from "../hooks/useAppStores";

export default function App({ Component, pageProps }: AppProps) {
  const setCurrentUser = useAppState((state) => state.setCurrentUser);

  supabase.auth.onAuthStateChange(async (event, session) => {
    setCurrentUser(session?.user!);
  },);

  return <Component {...pageProps} />;
}
