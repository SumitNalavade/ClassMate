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
                <div className="h-1/2 bg-primary">
                    <div className="text-white text-5xl pl-8 pt-28 font-semibold flex">Ansh Patel</div>
                <div className="text-white pl-8 pt-2 text-lg font-semibold flex">anshpatel@utexas.edu</div>
                <div className="underline underline-offset-1 pl-8 pt-8 text-md text-white font-semibold flex">Edit Profile Details</div>
            </div>
            <div className="h-1/2 bg-gradient-to-br from-base-100 via-purple-300 to-primary">
                <div className="text-purple-600 font-semibold">
                    <button className="opacity-100 pl-10 pt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#933AFF" className="bi bi-pencil-fill inline-block" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>Edit Course Details
                    </button>
                </div>
                <div className="text-purple-600 font-semibold">
                    <button className="opacity-100 pl-10 pt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#933AFF" className="bi bi-pencil-fill inline-block" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>Edit User Details
                    </button> 
                </div>
                <div className="pl-8 pt-6">
                    <button className="rounded-lg bg-accent text-white px-5 opacity-90">Delete Account</button>
                </div>
            </div>
        </Layout>
    )
}

export default Profile