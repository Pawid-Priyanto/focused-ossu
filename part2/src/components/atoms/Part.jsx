import React from "react";

const Part = ({ part }) => {
  return (
    <h4>
      {part.name} {part.exercises}
    </h4>
  );
};

export default Part;
