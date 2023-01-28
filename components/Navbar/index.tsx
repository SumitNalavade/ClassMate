import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <span className="text-primary">Class</span>
          <span className="text-secondary">Mate</span>
        </a>
      </div>
      <div className="flex-none">
        <div>
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://media.licdn.com/dms/image/D4E03AQGJ66ZMFbrBUQ/profile-displayphoto-shrink_800_800/0/1640471534135?e=2147483647&v=beta&t=xNRKGBbedok-Weng6hzBWgonm9szwVtbJHCFIyNQeBc" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
