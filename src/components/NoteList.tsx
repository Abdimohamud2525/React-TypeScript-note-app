import React from 'react';

const NoteList = ({ notes, onDeleteNote }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index} style={{ marginBottom: '10px' }}>
          {note}
          <button
            onClick={() => onDeleteNote(index)}
            style={{
              marginLeft: '10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              cursor: 'pointer',
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
