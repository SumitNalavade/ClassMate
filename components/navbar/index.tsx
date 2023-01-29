import React, { useState } from "react";
import Link from "next/link";
import { User } from "@supabase/supabase-js";

import supabase from "../../config/supabase";


const Navbar: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User>()

  useState(async() => {
    const getCurrentUser = async() => {
      const currentUser = (await supabase.auth.getUser()).data.user!

      setCurrentUser(currentUser);
    }

    getCurrentUser();
  })

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/home" className="btn btn-ghost normal-case text-xl">
          <span className="text-primary">Class</span>
          <span className="text-secondary">Mate</span>
        </Link>
      </div>
      <div className="flex-none">
        <div>
          <label tabIndex={0} className="btn btn-ghost btn-circle" htmlFor="postModal">
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
        </div>
        <div>
          <Link href={"/profile"}>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={currentUser ? currentUser.user_metadata["avatar_url"] : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} />
              </div>
            </label>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
