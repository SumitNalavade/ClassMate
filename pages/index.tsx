import React from "react";
import { NextPage } from "next";

import supabase from "../config/supabase";

const Landing: NextPage = () => {
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  return (
    <>
      <button onClick={signInWithGoogle}>Get Started</button>
    </>
  )
};

export default Landing;