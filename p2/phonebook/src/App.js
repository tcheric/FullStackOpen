import { useState } from 'react'
import Filter from "./components/Filter"
import LabelInput from "./components/LabelInput"
import Person from "./components/Person"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('');
  const [filteredPersons, setFilteredPersons] = useState([    
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const addName = (e) => {
    e.preventDefault()

    var alreadyName = 0;
    for(let elem of persons) {
      if (elem.name === newName) {
        alreadyName = 1
      }
    }
    var alreadyNum = 0;
    for(let elem of persons) {
      if (elem.number === newNumber) {
        alreadyNum = 1
      }
    }

    if (alreadyName) {
      alert(`${newName} is already added to the phonebook`)
    } else if (alreadyNum) {
      alert(`${newNumber} is already in the phonebook`)
    } else {
    const newPersonsArray = persons.concat({ name: newName, number: newNumber })
    setPersons(newPersonsArray)
    setFilteredPersons(newPersonsArray)
    setNewName("")
    setNewNumber("")
    }
  }

  const editFiltered = ( value ) => {
    if (value === "") {
      setFilteredPersons(persons)
    }
    const newArr = persons.filter(obj => obj.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredPersons(newArr)
  }

  const addFormCallback = (value, text) => {
    if (text === "name") {
      setNewName(value)
      console.log("nameuodated")
    } else if (text === "number") {
      setNewNumber(value)
    }
  }

  const FilterFormCallback = value => {
    setFilter(value)
    editFiltered(value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={filter} handleStateChange={FilterFormCallback} />
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <LabelInput text="name" state={newName} handleStateChange={addFormCallback} />
        <LabelInput text="number" state={newNumber} handleStateChange={addFormCallback} />
        <button style={{"display": "block"}} type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person => <Person key={person.name} person={person}/>)}
    </div>
  )
}

export default App