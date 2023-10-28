import { useState, useEffect } from "react";
import axios from "axios";
import personService from "./services";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const [personsServer, setPersonsServer] = useState([]);

  const handleNameChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);

  const addPersons = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    const existingPerson = personsServer.find(
      (item) => item.name === newName || item.number === newNumber
    );

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to phonebook. Do you want to modify the existing persons?`
      );

      if (confirmUpdate) {
        const updatedPerson = {
          ...existingPerson,
          name: newName,
          number: newNumber,
        };

        // Use the update function to modify the existing entry
        personService
          .update(existingPerson.id, updatedPerson)
          .then((response) => {
            // Update the state with the modified entry
            setPersonsServer(
              personsServer.map((person) =>
                person.id === existingPerson.id ? response.data : person
              )
            );
            setNewName(""); // Clear the input field
            setNewNumber(""); // Clear the input field
          });
      }
    } else {
      personService.create(newPerson).then((response) => {
        setPersonsServer(personsServer.concat(response.data));
        setNewName(""); // Clear the input field
        setNewNumber(""); // Clear the input field
      });
    }
  };

  const filteredPersons = personsServer.filter((person) =>
    person?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDelete = (id, name) => {
    if (window.confirm(`Do you really want to delete ${name}?`)) {
      personService.deleteNote(id).then(() => {
        setPersonsServer(personsServer.filter((person) => person.id !== id));
      });
    }
  };

  useEffect(() => {
    personService.getAll().then((response) => {
      console.log(response.data);
      setPersonsServer(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with{" "}
        <input
          name="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <form onSubmit={addPersons}>
        <h3>Add new</h3>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>{" "}
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number} &nbsp;
            <button onClick={() => onDelete(person.id, person.name)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
