import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

import useAppState from "../hooks/useAppStores";

import Layout from "../components/layout";
import { signOut } from "../utils/auth";

const Profile: NextPage = () => {
    const router = useRouter()
    const currentUser = useAppState((state) => state.currentUser)

    return (
        <Layout>
            <div className="h-1/2 bg-primary w-screen">
                <div className="text-base-100 text-5xl pl-8 pt-28 font-semibold flex">{currentUser?.user_metadata["full_name"]}</div>
                <div className="text-base-100 pl-8 pt-2 text-lg font-semibold flex">{currentUser?.email}</div>
                <div className="underline underline-offset-1 pl-8 pt-10 text-md text-base-100 font-semibold flex">
                    <button>Edit Profile Details</button>
                </div>
                <div className="translate-x-3/4 scale-150">
                    <img className="rounded-full" src={currentUser?.user_metadata["avatar_url"]} alt="profile pic" />
                </div>
            </div>
            <div className="h-1/2 bg-gradient-to-br from-base-100 via-purple-300 to-primary">
                <div className="text-primary font-semibold">
                    <button className="opacity-100 pl-12 pt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#933AFF" className="bi bi-pencil-fill inline-block" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>Edit Course Details
                    </button>
                </div>
                <div className="text-primary font-semibold">
                    <button className="opacity-100 pl-12 pt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#933AFF" className="bi bi-pencil-fill inline-block" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>Edit User Details
                    </button> 
                </div>
                <div className="pl-12 pt-10">
                    <button onClick={signOut} className="rounded-lg bg-accent text-base-100 px-5 py-1 opacity-90">Sign Out</button>
                </div>
            </div>
        </Layout>
    )
}

export default Profile