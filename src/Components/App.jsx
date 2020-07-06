import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note){
    note.key = notes.length + 1;
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function removeNote(id){
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.key !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map((note) => {
        return (<Note 
        key={note.key}
        id={note.key} 
        title={note.title} 
        content={note.content}
        onDelete={removeNote} />);
      })}
      <Footer />
    </div>
  );
}

export default App;
