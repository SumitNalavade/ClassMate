import supabase from "../config/supabase";

export async function signInWithGoogle() {
  const { data } = await supabase.auth.signInWithOAuth(
    {
      provider: "google",
    }
  );
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
}
