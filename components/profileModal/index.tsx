import React from "react";

const ProfileModal: React.FC = () => {
  return (
    <>
      <input type="checkbox" id="profileModal" className="modal-toggle" />
      <label htmlFor="profileModal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="profileModal">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
    </>
  );
};

export default ProfileModal
