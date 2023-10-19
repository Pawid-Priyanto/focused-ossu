const Headers = (props) => {
  const { course } = props;
  return <h1>{course}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0);
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
  const course = "Half Stack application development";

  const parts = [
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
  ];

  return (
    <div>
      <Headers course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
