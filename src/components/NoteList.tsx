// NoteList.tsx
import React from 'react';
interface Note {
  id: number;
  text: string;
}

interface NoteListProps {
  notes: Note[];
  onNoteDelete: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onNoteDelete }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id} className="mb-2 flex items-center">
            <span className="mr-2">{note.text}</span>
            <button
              onClick={() => onNoteDelete(note.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
