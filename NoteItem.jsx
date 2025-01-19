import { useState } from "react";
import Button from '../Button/Button';

function NoteItem({ note, deleteNote, editNote }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState(note.content);
    const [newColor, setNewColor] = useState(note.color); // Новое состояние для цвета

    const handleEdit = () => {
        editNote(note.id, { content: newContent, color: newColor }); // Передаем обновленный цвет
        setIsEditing(false);
    };

    return (
        <li style={{ backgroundColor: isEditing ? newColor : note.color, padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
            {isEditing ? (
                <div>
                    <textarea
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        style={{ width: '280px', padding: '8px', borderRadius: '4px', marginBottom: '10px' }}
                    />
                    <input
                        type="color"
                        value={newColor}
                        onChange={(e) => setNewColor(e.target.value)} // Изменение цвета
                        style={{ marginBottom: '10px', cursor: 'pointer' }}
                    />
                    <div className="buttons">
                        <Button onClick={handleEdit} className="save">Сохранить</Button>
                        <Button onClick={() => setIsEditing(false)} className="cancel">Отмена</Button>
                    </div>
                </div>
            ) : (
                <div>
                    <span>{note.content}</span>
                    <div className="buttons">
                        <Button onClick={() => setIsEditing(true)} className="edit">Редактировать</Button>
                        <Button onClick={() => deleteNote(note.id)} className="delete">Удалить</Button>
                    </div>
                </div>
            )}
        </li>
    );
}

export default NoteItem;
