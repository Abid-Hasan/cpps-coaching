import React from "react";

const Course = (props) => {
  const { name, fee, image } = props.course;
  return (
    <div>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>Fee: {fee}</p>
    </div>
  );
};

export default Course;
