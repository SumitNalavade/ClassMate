import React from "react";
import { NextPage } from "next";

import Layout from "../components/layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="h-screen">
                <button>
                    <div className="flex-wrap">
                        <div className="font-bold text-5xl text-secondary">Recent</div>
                        <div className="card w-72 bg-base-100 shadow-xl">
                            <div className="card-body items-center">
                                <h2 className="card-title items-center">CSCE-181-700</h2>
                                <p className="text-center">Tyagi, Aakash</p>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </Layout>
    )
}

export default Home;