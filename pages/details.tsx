import React from "react";
import Layout from "../components/layout";

const Details: React.FC = () => {
    return (
        <Layout>
            <div className="h-1/2 flex flex-col justify-between items-center">
                <h1 className="font-extrabold pt-12 text-5xl text-indigo-500">Introduction to Computing</h1>

                <div className="grid grid-cols-2 gap-12 pt-12">
                <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500 uppercase">
                        DEPARTMENT:
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500">
                        CSCE
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500 uppercase">
                        Course #:
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500 ">
                        181
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500 uppercase">
                        SECTION #:
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500">
                        700
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500 uppercase">
                        TIMINGS:
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500">
                        T/Th 12:45-1:35
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500 uppercase">
                        LOCATION:
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500 ">
                        ZACH 210
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500 uppercase">
                        GPA DISTRIBUTION:
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500 ">
                        3.98/4.00
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500 uppercase">
                        SEATS LEFT:
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500 ">
                        2
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500 uppercase">
                        PROFESSOR:
                    </div>
                    <div className="text-l font-semibold inline-block py-1 px-2 pb-4 uppercase rounded text-base-100 bg-indigo-500 ">
                        Tyagi, Aakash
                    </div>
                </div>    
                <div className="text-7xl">
               <button className="bg-indigo-550   opacity-75 btn btn-active btn-primary w-1/3 mb-6 hover:bg-base-100 hover:text-indigo-500"
                >Swap
                </button>
                </div>
            </div>
        </Layout>
    )
}

export default Details;