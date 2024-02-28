import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.end(JSON.stringify(notes));
// });

app.get("/", (req, res) => {
  res.send("<h3>Hello World!</h3>");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// get details note

app.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find((note) => note.id == id);
  console.log(note, id, "atomic habbits ===", notes);
  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id !== id);
  res.status(204).end();
});

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/notes", (req, res) => {
  const note = req.body;

  if (!note.content) {
    return res.status(400).json({
      error: "content is null",
    });
  }

  const noteBody = {
    content: note.content,
    important: note.important || false,
    id: generateId(),
  };
  console.log(noteBody);
  notes = notes.concat(noteBody);
  res.json(noteBody);
});

const port = 3001;
app.listen(port);
console.log(`Server running on port ${port}`);
