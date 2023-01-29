import React, { useState } from "react";
import { v4 as uuid } from "uuid"
import { setDoc, doc } from "firebase/firestore";
import { db, auth } from "../../config/firebase";

import useAppStore from "../../hooks/useAppStore";

const PostModal: React.FC = () => {
  const currentUser = auth.currentUser
  const userCourses = useAppStore((state) => state.userCourses)

  const [field, setField] = useState("");
  const [level, setLevel] = useState<number>();
  const [section, setSection] = useState<number>();
  const [postSuccessful, setPostSuccessful] = useState(false);

  const createPost = async() => {
    await setDoc(doc(db, "posts", uuid()), {
      field,
      level,
      section,
      user: currentUser?.uid
    });

    setPostSuccessful(true)
  }

  return (
    <>
      <input type="checkbox" id="postModal" className="modal-toggle" />
      <label htmlFor="postModal" className="modal cursor-pointer">
        <label
          className="modal-box relative p-20 flex flex-col items-center"
          htmlFor=""
        >
          { !postSuccessful ? (
                <>
                    <h3 className="text-xl font-bold text-neutral mb-4">
            What Course Are You Looking For?
          </h3>
            
            { userCourses?.forEach(course => (
              <button className="btn btn-success">{course.field} {course.level} {course.section}</button>
            )) }

          <div className="grid grid-cols-3">
            <div className="p-2">
              <input
                value={field}
                onChange={(evt) => setField(evt.target.value)}
                type="text"
                placeholder="CHEM"
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div className="p-2">
              <input
                value={level}
                onChange={(evt) =>
                  setLevel(evt.target.value as unknown as number)
                }
                type="text"
                placeholder="117"
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div className="p-2">
              <input
                value={section}
                onChange={(evt) =>
                  setSection(evt.target.value as unknown as number)
                }
                type="text"
                placeholder="561"
                className="input input-bordered w-full max-w-md"
              />
            </div>
          </div>
          <button className="btn btn-active btn-primary w-full my-4 bg-opacity-20" onClick={createPost} >
            Post
          </button>
                </>
          ) : (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="75" fill="green" className="bi bi-check-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                </svg>

                <h3 className="text-xl font-bold text-neutral mt-4">
                    Thank You For Posting
                </h3>

                <p>We'll let you know when a course is avaliable</p>
            </>
          ) }
        </label>
      </label>
    </>
  );
};

export default PostModal;
