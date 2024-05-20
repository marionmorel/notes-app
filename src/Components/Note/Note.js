import "./Note.css";

const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className="note">
            <div className="note-infos">
                <p>{text}</p>
            </div>
            <div className="note-footer">
                <i class="fa-solid fa-trash-can" onClick={() => handleDeleteNote(id)}></i>
                <small>{date}</small>
            </div>
        </div>
    )
}

export default Note;

