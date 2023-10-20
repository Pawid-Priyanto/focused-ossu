import React, { useState } from "react";

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
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {right}
      <p>{allClick.join(" ")}</p>
      <p>total is {total}</p>
    </div>
  );
}

export default App;
