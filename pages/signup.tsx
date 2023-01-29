import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import { NextPage } from "next";

import useAppState from "../hooks/useAppStores";
import supabase from "../config/supabase";
import Layout from "../components/layout";

interface AddCourseInput {
  addCourse: (field: string, number: number, section: number) => void;
}

const AddCourseInput: React.FC<AddCourseInput> = ({ addCourse }) => {
  const [field, setField] = useState("");
  const [course, setCourse] = useState<number>();
  const [section, setSection] = useState<number>();

  return (
    <div className="flex justify-content-evenly py-4">
      <div className="px-2">
        <input
          type="text"
          placeholder="MATH"
          className="input w-full max-w-lg"
          value={field}
          onChange={(evt) => setField(evt.target.value)}
        />
      </div>

      <div className="px-2">
        <input
          type="text"
          placeholder="151"
          className="input w-full max-w-lg"
          value={course}
          onChange={(evt) => setCourse(evt.target.value as unknown as number)}
        />
      </div>

      <div className="px-2">
        <input
          type="text"
          placeholder="531"
          className="input w-full max-w-lg"
          value={section}
          onChange={(evt) => setSection(evt.target.value as unknown as number)}
        />
      </div>

      <button
        className="btn btn-square btn-outline outline-green-800 mx-2"
        onClick={() => addCourse(field, course!, section!)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="green"
          className="bi bi-check-lg"
          viewBox="0 0 16 16"
        >
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
        </svg>
      </button>

      <button className="btn btn-square btn-outline outline-red-800 mx-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="red"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </button>
    </div>
  );
};

const Signup: NextPage = () => {
  const router = useRouter();
  const currentUser = useAppState((state) => state.currentUser);
  const [numClasses, setNumClasses] = useState(2);
  const [courses, setCourses] = useState<any[]>([]);

  const addCourse = (field: string, number: number, section: number) => {
    const newCourse = { field, number, section, user: currentUser?.id };

    setCourses([...courses, newCourse]);
  };

  const createSchedule = async () => {
    const { data, error } = await supabase
      .from("courses")
      .insert(courses);

    console.log(error);
  };

  return (
    <Layout>
      <div className="h-1/2 flex flex-col justify-between items-center">
        <h1 className="font-extrabold pt-12 text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-secondary">
          Add Your Course Schedule
        </h1>

        <div>
          {Array.from(Array(numClasses)).map((index) => (
            <AddCourseInput addCourse={addCourse} key={index} />
          ))}
        </div>

        <button
          className="bg-indigo-550 opacity-75 btn btn-active btn-primary w-1/3 mb-6 hover:bg-base-100 hover:text-indigo-500"
          onClick={() => setNumClasses(numClasses + 1)}
        >
          Add Another Course
        </button>

        <button
          className="bg-indigo-500 opacity-75 btn btn-active btn-primary w-1/3 hover:bg-base-100 hover:text-indigo-500"
          onClick={createSchedule}
        >
          Continue
        </button>
      </div>
    </Layout>
  );
};

export default Signup;