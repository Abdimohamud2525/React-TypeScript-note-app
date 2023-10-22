import React, { useState } from 'react';
import NoteList from './components/NoteList';


const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote) {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Simple Note App</h1>
      <div style={{ margin: '20px' }}>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          style={{ padding: '5px' }}
        />
        <button onClick={addNote} style={{ marginLeft: '10px' }}>
          Add Note
        </button>
      </div>
      <NoteList notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
};

export default App;
