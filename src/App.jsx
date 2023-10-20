import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);

  return (
    <>
      <div>{counter}</div>
      <button onClick={handleIncrease}>plus</button>
      <button onClick={setToZero}>zero</button>
    </>
  );
};

export default App;
