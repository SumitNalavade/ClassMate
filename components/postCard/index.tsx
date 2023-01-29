import React from "react";

interface Props {
  course: any
}

const PostCard: React.FC<Props> = ({ course }) => {
  return (
        <div className="card w-72 bg-base-100 shadow-xl mx-4">
          <div className="card-body items-center">
            <h2 className="card-title items-center">
              {course.field} {course.level}
            </h2>
            <p className="text-center">Section {course.section}</p>
          </div>
        </div>
  );
};


export default PostCard