import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <html data-theme="cupcake"></html>
            </Head>

            <Navbar />

            <main className="h-screen container mx-auto">
                { children }
            </main>
        </>
    )
}

export default Layout;