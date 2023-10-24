import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";
const App = (props) => {
  const [newNote, setNewNote] = useState("");
  const [note, setNote] = useState([]);
  const [showAll, setShowAll] = useState(true);

  // const hook = () => {
  //   axios.get("http://localhost:3001/notes").then((response) => {
  //     setNote(response.data);
  //   });
  // };

  // useEffect(hook, []);

  // useEffect(() => {
  //   console.log("effect");

  //   const eventHandler = (response) => {
  //     console.log("[promise fulfilled]");

  //     setNote(response.data);
  //   };

  //   const promise = axios.get("http://localhost:3001/notes");
  //   promise.then(eventHandler);
  // }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((response) => {
      setNote(response.data);
    });
  });
  const notesToShow = showAll ? note : note.filter((note) => note.important);
  const addNotes = (e) => {
    e.preventDefault();

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: note.length + 1,
    };

    setNote(note.concat(noteObject));
    setNewNote("");
  };

  const handleChangeNote = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNotes}>
        <input value={newNote} onChange={handleChangeNote} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
