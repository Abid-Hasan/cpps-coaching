import React from "react";
import { Card, Col } from "react-bootstrap";

const Course = (props) => {
  const { name, fee, image } = props.course;
  return (
    <div class="col">
      <div class="card h-100">
        <img src={image} class="card-img-top border-bottom" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text"></p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Fee: &#2547;{fee} only</small>
        </div>
      </div>
    </div>
  );
};

export default Course;
