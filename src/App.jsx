import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

function App() {
  const [value, setValue] = useState(0);
  const setToValue = (newValue) => () => {
    setValue(newValue);
  };
  return (
    <div>
      {value}
      <Button handleClick={() => setValue(1000)} text="thousand" />
      <Button handleClick={() => setValue(0)} text="set to zero" />
      <Button handleClick={() => setValue(value + 1)} text={"plus 1"} />
    </div>
  );
}

export default App;
