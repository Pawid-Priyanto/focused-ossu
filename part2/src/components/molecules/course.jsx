import React from "react";
import Header from "../atoms/Header";
import Content from "../atoms/Content";
import Total from "../atoms/Total";

const Course = ({ course }) => {
  return (
    <div>
      <Header heading={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
