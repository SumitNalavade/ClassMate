import React from "react";
import { NextPage } from "next";

import Layout from "../components/layout";

const Popup: NextPage = () => {
    return (
        <Layout>

            <div className="bg-indigo-500 ...">

                <div className="inline-block pb-8 ...">
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

                <div className="inline-block pb-8 ...">
                    <span className="flex place-content-center pt-6 pb-3 text-2xl font-bold">
                        <label className="text-base-100">I'm Looking For:</label>
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

                <div className="px-20">
                    <div className="inline-block px-16 ...">
                        <button className="bg-base-100 hover:text-indigo-500 text-info font-bold py-2 px-4 rounded-full">Add Class</button>
                    </div>

                    <div className="inline-block pt-2 px-20 ... ">
                        <button className="bg-base-100 hover:text-indigo-500 text-info font-bold py-2 px-4 rounded-full">Swap Class</button>
                    </div>

                </div>

                <div className="pt-5">
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Button
</button>
                </div>



            </div>




        </Layout>
    )
}

export default Popup