import React, { useState } from "react";
import { nanoid } from "nanoid";
import SearchBar from "../Components/SearchBar/SearchBar";
import NotesList from "../Components/NotesList/NotesList";
import Footer from "../Components/Footer/Footer";


import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is a note",
      date: "21/05/2021",
    },
    {
      id: nanoid(),
      text: "This is an example note",
      date: "21/05/2024",
    }
  ]);
  
  const [searchText, setSearchText] = useState("")

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div>
      <h1>Notes App</h1>
      <SearchBar handleSearchNote={setSearchText}/>
      <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
      <Footer />
    </div>
  );
};

export default App;
