import { useState } from "react";
import Button from '../Button/Button';

const NoteForm = ({ addNote }) => {
    const [content, setContent] = useState('');
    const [color, setColor] = useState('#ffffff');

    const handleClick = (e) => {
        e.preventDefault();
        if (!content) return;

        addNote({ id: Date.now(), content, color });
        setContent('');
        setColor('#ffffff');
    };

    return (
        <form style={{ backgroundColor: 'white', padding: '10px', borderRadius: '8px', minWidth: '500px' }}>
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Введите заметку"
                style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px' }}
            />
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{ marginBottom: '10px' }}
            />
            <Button onClick={handleClick} className="add">Добавить заметку</Button>
        </form>
    );
};

export default NoteForm;
