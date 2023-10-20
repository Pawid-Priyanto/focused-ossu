import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const setToValue = (val) => () => {
    setValue(val);
  };
  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>zero</button>
      <button onClick={setToValue(value + 1)}>plus 1</button>
    </div>
  );
}

export default App;
