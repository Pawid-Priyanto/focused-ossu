import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div>
      {value}
      <button onClick={() => setValue(0)}>reset to zero</button>
    </div>
  );
}

export default App;
