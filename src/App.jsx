import "./App.css";

const Hello = (props) => {
  console.log(props, "props");
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="sabrang" age={19} />
      <Hello name="mowo" age={12 + 9} />
      <Hello name="damar" age={age} />
      <Hello name="panuluh" age={32} />
    </div>
  );
};

export default App;
