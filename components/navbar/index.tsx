import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { auth } from "../../config/firebase";
import { signIn } from "../../utils/auth";

const Navbar: React.FC = () => {
  const router = useRouter();

  const currentUser = auth.currentUser

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/home" className="btn btn-ghost normal-case text-xl">
          <span className="text-primary">Class</span>
          <span className="text-secondary">Mate</span>
        </Link>
      </div>
      <div className="flex-none">

        { currentUser ? (<div>
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            htmlFor="postModal"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
            </div>
          </label>
        </div>) : "" }

        <div>
          <div>
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
