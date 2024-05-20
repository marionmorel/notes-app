import { useState } from 'react';

import "../Note/Note.css";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 300;

    const handleTextChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    }

    const handleSaveClick = () => {
        handleAddNote(noteText);
        setNoteText("");
    }

    return(
        <div className="note new">
            <div className="note-infos">
                <textarea 
                    rows="8" 
                    cols="10" 
                    placeholder="Type note here..."
                    value={noteText}
                    onChange={handleTextChange}
                ></textarea>
            </div>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button onClick={handleSaveClick}>
                    Add Note
                </button>
            </div>
        </div>
    )
}

export default AddNote;