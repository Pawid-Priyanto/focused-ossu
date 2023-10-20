import React, { useState } from "react";

const History = ({ allClick }) => {
  if (allClick.length === 0) {
    return <div>this app is used by pressing the buttons </div>;
  }
  return <div>button presed history: {allClick.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClick, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClickLeft = () => {
    setAll([...allClick, "left"]);
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleClickRight = () => {
    setAll([...allClick, "right"]);
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(updatedRight + left);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleClickLeft} text="left" />
      <Button handleClick={handleClickRight} text="right" />
      {right}
      <History allClick={allClick} />
    </div>
  );
}

export default App;
