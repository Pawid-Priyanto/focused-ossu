import React, { useState } from "react";
import Note from "./components/Note";
const App = (props) => {
  const [newNote, setNewNote] = useState("");
  const [note, setNote] = useState(props.notes);
  const [showAll, setShowAll] = useState(true);

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
