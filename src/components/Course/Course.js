import React from "react";
import { Card, Col } from "react-bootstrap";

const Course = (props) => {
  const { name, fee, image } = props.course;
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Fee: &#2547;{fee} only</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Course;
