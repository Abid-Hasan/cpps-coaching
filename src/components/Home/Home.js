import React from "react";
import { NavLink } from "react-router-dom";
import useCourses from "../../hooks/useCourses";
import Course from "../Course/Course";
import Hero from "../Hero/Hero";

const Home = () => {
  const [courses, setCourses] = useCourses();
  return (
    <div>
      <Hero />
      <div className="container px-4 pb-5 my-5 border-bottom text-end">
        <div class="row row-cols-1 row-cols-md-3 g-4 pb-2 text-center">
          {courses.slice(0, 3).map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
        <NavLink to="/courses">
          <button type="button" className="btn btn-primary btn-lg px-4 mb-2">
            See more
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
