import React, { useState } from "react";

function App() {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeft = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
  };
  const handleRight = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
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
