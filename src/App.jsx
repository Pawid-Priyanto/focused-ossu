const Headers = (props) => {
  const { course } = props;
  return <h1>{course.name}</h1>;
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Total = ({ course }) => {
  const total = course.parts.reduce((total, part) => total + part.exercises, 0);
  return <p>Number of exercises {total}</p>;
};

const Part = ({ part }) => {
  return (
    <div>
      {part.name}, {part.exercises}
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Headers course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
