import React from "react";
import { Session } from "@supabase/supabase-js";

import supabase from "../config/supabase";

import Layout from "../components/layout";

const Profile = ({ session }: { session: Session }) => {
    async function signout() {
        const { error } = await supabase.auth.signOut()
    }

    return (
        <Layout>
            <h1>{session.user.user_metadata["avatar_url"]}</h1>
            <button onClick={signout}>Sign Out</button>
        </Layout>
    )
}

export default Profile