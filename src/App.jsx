import React, { useState } from "react";

const Statistic = ({ total, average, positive, netral, good, bad }) => {
  return (
    <>
      <h1>Statistic</h1>
      <div style={{ display: "flex", gap: 4 }}>
        <p style={{ padding: 16, border: "1px solid black", borderRadius: 5 }}>
          Good: {good}
        </p>
        <p style={{ padding: 16, border: "1px solid black", borderRadius: 5 }}>
          Netral: {netral}
        </p>
        <p style={{ padding: 16, border: "1px solid black", borderRadius: 5 }}>
          Bad: {bad}
        </p>

        <p style={{ padding: 16, border: "1px solid black", borderRadius: 5 }}>
          All: {total}
        </p>
        <p style={{ padding: 16, border: "1px solid black", borderRadius: 5 }}>
          Average: {average}
        </p>
        <p style={{ padding: 16, border: "1px solid black", borderRadius: 5 }}>
          Positive: {positive} %
        </p>
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
        <button
          onClick={() => handleVote("good")}
          style={{ borderRadius: 5, width: 100, height: 50 }}
        >
          good
        </button>
        <button
          onClick={() => handleVote("neutral")}
          style={{ borderRadius: 5, width: 100, height: 50 }}
        >
          neutral
        </button>
        <button
          onClick={() => handleVote("bad")}
          style={{ borderRadius: 5, width: 100, height: 50 }}
        >
          bad
        </button>
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
