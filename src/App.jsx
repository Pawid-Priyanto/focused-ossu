import "./App.css";
import React from "react";

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  // return (
  //   <div>
  //     <p>Hello world, it is {now.toString()}</p>
  //     {a} plus {b} is {a + b}{" "}
  //   </div>
  // );
  return React.createElement(
    "div",
    null,
    React.createElement("p", null, "Hello World ", now.toDateString()),
    React.createElement("p", null, a, " plus ", b, " is ", a + b)
  );
};

export default App;
