import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import useCourses from "../../hooks/useCourses";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useCourses();
  return (
    <div className="container px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold text-secondary">Courses</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-5">
          Real-time LIVE and Self-Paced Courses carefully crafted for students
          by Industry Leading Programmers. Contact us to buy any of them. You
          will get zoom meeting ID and password via email.
        </p>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4 pb-5">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
