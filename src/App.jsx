import React, { useState } from "react";

function App() {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeft = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right,
    };
    setClicks(newClicks);
  };
  const handleRight = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeft}>left</button>
      <button onClick={handleRight}>right</button>
      {clicks.right}
    </div>
  );
}

export default App;
