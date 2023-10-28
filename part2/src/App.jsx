import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from "./services/apiUrl";
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

    noteService.create(noteObject).then((returnedNote) => {
      setNote(note.concat(returnedNote));
      setNewNote("");
    });
  };

  const toggleImportanceOf = (id) => {
    const noted = note.find((n) => n.id === id);
    const changedNote = { ...noted, important: !noted.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNote(note.map((n) => (n.id !== id ? n : returnedNote)));
      })
      .catch((error) => {
        alert(`the note ${note.content} was already delted from server`);
        setNote(note.filter((n) => n.id !== id));
      });
  };

  const handleChangeNote = (e) => {
    console.log(e.target.value);
    console.log("=================");
    setNewNote(e.target.value);
  };

  useEffect(() => {
    noteService.getAll().then((initialNotes) => setNote(initialNotes));
  }, []);

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
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
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
