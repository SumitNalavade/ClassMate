import React from "react";
import { NextPage } from "next";

import { signInWithGoogle } from "../utils/auth";

const Landing: NextPage = () => {
  return (
    <>
      <div className="h-screen bg-gradient-to-br from-base-100 via-purple-300 to-primary">
        <span className="flex place-content-center pt-14 text-8xl font-bold">
          <h1 className="inline text-primary">Class</h1>
          <h1 className="inline text-secondary">Mate</h1>
        </span>
        <div className="flex place-content-center text-3xl pt-8 text-bold">
          Introducing a{" "}
          <span className="text-secondary pl-2 text-bold">community</span>
        </div>
        <div className="flex place-content-center text-3xl pt-2 text-bold">
          <span className="text-secondary pr-2 text-bold">platform</span> for{" "}
          <span className="pl-1.5 text-primary text-bold">
            class registration
          </span>
        </div>

        <button onClick={signInWithGoogle}>Sign In</button>

        <div className="card w-48 bg-primary text-primary-content ml-28">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
