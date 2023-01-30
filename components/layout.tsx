import React, { useEffect } from "react";
import Head from "next/head";

import Navbar from "./navbar";
import PostModal from "./postModal";
import ProfileModal from "./postModal";

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="bg-primary bg-opacity-20">
            <Head>
                <html data-theme="cupcake"></html>
            </Head>

            <Navbar />

            <PostModal />

            <ProfileModal />

            <main className="h-screen">
                {children}
            </main>
        </div>
    )
}

export default Layout;