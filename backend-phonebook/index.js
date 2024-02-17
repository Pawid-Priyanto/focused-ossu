import http from "http";
import express from "express";
import morgan from "morgan";

const persons = [
  {
    id: 12,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 32,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 53,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 45,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

const app = express();
app.use(express.json());
app.use(requestLogger);
app.use(morgan("tiny"));

const unknowEndpoint = (re, res) => {
  res.status(404).send({
    error: "unknown endpoint",
  });
};

app.get("/", (req, res) => {
  res.send(`<h3>Hello Api</h3>`);
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;

  const personDetail = persons.find((person) => person.id == id);

  if (personDetail) {
    res.json(personDetail);
  } else {
    res.send(`Person with id ${id} not found`);
  }
});

app.delete("/api/person/:id", (req, res) => {
  const id = Number(req.params.id);

  const person = persons.filter((person) => person.id !== id);

  console.log(person);

  // res.send(`Person with id ${id} deleted`);
  res.json(person);
  res.status(204).end();
});

app.post("/api/person", (req, res) => {
  const personBodyRequest = req.body;

  console.log(personBodyRequest, "=====");

  if (!personBodyRequest.name) {
    return res.status(400).json({
      error: "name missing",
    });
  }
  if (!personBodyRequest.number) {
    return res.status(400).json({
      error: "number missing",
    });
  }
  if (persons.find((person) => person.name === personBodyRequest.name)) {
    return res.status(400).json({
      error: "name must be unique",
    });
  }

  const personBody = {
    id: Math.floor(Math.random() * 100),
    // id: persons.length + 1,
    name: personBodyRequest.name,
    number: personBodyRequest.number,
  };

  // console.log(personBodyRequest, "==");

  persons.concat(personBody);

  res.json(personBody);
});

app.get("/api/info", (req, res) => {
  res.send(
    `<p>Phonebook has info for ${persons.length} people </p>` +
      `<br/>` +
      new Date()
  );
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
