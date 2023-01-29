import React, { useEffect } from "react";
import Head from "next/head";

import useAppState from "../hooks/useAppStores";

import Navbar from "./navbar";
import PostModal from "./postModal";

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

            <main className="h-screen container mx-auto">
                { children }
            </main>
        </div>
    )
}

export default Layout;