import React, { useState } from "react";

const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      style={{ borderRadius: 5, width: 100, height: 50 }}
    >
      {text}
    </button>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <p style={{ padding: 16, border: "1px solid black", borderRadius: 5 }}>
      {text} : {value}
    </p>
  );
};

const Statistic = ({ total, average, positive, netral, good, bad }) => {
  return (
    <>
      <h1>Statistic</h1>
      <div style={{ display: "flex", gap: 4 }}>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={netral} />
        <StatisticLine text="bad" value={bad} />

        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </div>
    </>
  );
};
function App() {
  const [good, setGood] = useState(0);
  const [netral, setNetral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleVote = (vote) => {
    if (vote === "good") {
      setGood(good + 1);
    } else if (vote === "neutral") {
      setNetral(netral + 1);
    } else setBad(bad + 1);
  };

  const total = good + netral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  return (
    <div
      style={{
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Give Us Feedback</h1>

      <div style={{ display: "flex", gap: 4 }}>
        <Button onClick={() => handleVote("good")} text="good" />
        <Button onClick={() => handleVote("netral")} text="netral" />
        <Button onClick={() => handleVote("bad")} text="bad" />
      </div>
      {good === 0 && netral === 0 && bad === 0 ? (
        <h1>No feedback given</h1>
      ) : (
        <Statistic
          good={good}
          netral={netral}
          bad={bad}
          total={total}
          average={average}
          positive={positive}
        />
      )}
    </div>
  );
}

export default App;
