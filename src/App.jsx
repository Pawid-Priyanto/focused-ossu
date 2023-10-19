import React from "react";

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };
  return (
    <>
      <h3>
        Hello, I am {props.name} {props.age} years old
      </h3>
      <h2>I am propbably born on {bornYear()}</h2>
    </>
  );
};

function App() {
  const name = "Peter";
  const age = 43;
  return (
    <div>
      <h1>Grettings</h1>
      <Hello name="John" age={30} />
      {/* <Hello name={name} age={age} /> */}
    </div>
  );
}

export default App;
