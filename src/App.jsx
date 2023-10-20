import React, { useState } from "react";

const App = () => {
  // these are ok
  const [age, setAge] = useState(0);
  const [name, setName] = useState("Juha Tauriainen");

  if (age > 10) {
    // this does not work!
    const [foobar, setFoobar] = useState(null);
  }

  for (let i = 0; i < age; i++) {
    // also this is not good
    const [rightWay, setRightWay] = useState(false);
  }

  const notGood = () => {
    // and this is also illegal
    const [x, setX] = useState(-1000);
  };

  return (
    //...
    <div>
      Rules Of Hooks
      <p>
        my name {name}, i am {age} years old
      </p>
    </div>
  );
};

export default App;
