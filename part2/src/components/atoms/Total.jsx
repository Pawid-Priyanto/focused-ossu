import React from "react";

const Total = ({ parts }) => {
  return (
    <h3 strong>
      total of {parts.reduce((a, b) => a + b.exercises, 0)} exercises
    </h3>
  );
};

export default Total;
