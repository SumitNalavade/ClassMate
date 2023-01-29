import React from "react";
import { NextPage } from "next";

import Layout from "../components/layout";

const Popup: NextPage = () => {
    return (
        <Layout>

            <div className="bg-indigo-500 ...">

                <div className="pl-32">
                    <div className="inline-block pb-8 pl-14">
                        <span className="flex place-content-center pt-6 pb-3 text-2xl font-bold">
                            <label className="text-base-100">I Have:</label>
                        </span>
                        <div className=" inline-block px-8 ..." >
                            <input type="text" placeholder="Field" className="input input-bordered input-md w-full max-w-sm" />
                        </div>
                        <div className="inline-block px-8 ...">
                            <input type="text" placeholder="Course #" className="input input-bordered input-md w-full max-w-sm" />
                        </div>
                        <div className="inline-block px-8 ...">
                            <input type="text" placeholder="Section" className="input input-bordered input-md w-full max-w-sm" />
                        </div>
                    </div>

                    <div className="inline-block pb-8 pl-14 ...">
                        <span className="flex place-content-center pt-6 pb-3 text-2xl font-bold">
                            <label className="text-base-100">Looking For:</label>
                        </span>
                        <div className=" inline-block px-8 ..." >
                            <input type="text" placeholder="Field" className="input input-bordered input-md w-full max-w-sm" />
                        </div>
                        <div className="inline-block px-8 ...">
                            <input type="text" placeholder="Course #" className="input input-bordered input-md w-full max-w-sm" />
                        </div>
                        <div className="inline-block px-8 ...">
                            <input type="text" placeholder="Section" className="input input-bordered input-md w-full max-w-sm" />
                        </div>
                    </div>



                    <div className="pl-64">
                        <div className="inline-block pl-8 ...">
                            <button className="bg-base-100 hover:text-indigo-500 text-secondary text-info font-bold py-2 px-4 rounded-full">Add Class</button>
                        </div>
                        <div className="inline-block pb-56 pl-48 ... ">
                            <button className="bg-base-100 hover:text-indigo-500 text-secondary text-info font-bold py-2 px-4 rounded-full">Swap Class</button>
                        </div>

                    </div>
                </div>

                <div className="pt-5 pb-5">
                    <button className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-success">Post!</button>
                    {/* <button className="bg-base-100  hover:bg-success text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">POST</button> */}
                </div>



            </div>




        </Layout>
    )
}

export default Popup