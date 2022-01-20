import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="container px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold text-secondary">Courses</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id sapiente
          consectetur, necessitatibus nulla quo iure dolores architecto
          accusantium recusandae qui! Dicta adipisci delectus consectetur
          consequuntur quas, error aliquid autem hic ex tempore esse, assumenda
          odit omnis quaerat cupiditate dolore. Reprehenderit optio quos sed
          nostrum dolorum quia voluptates maiores explicabo possimus.
        </p>
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
