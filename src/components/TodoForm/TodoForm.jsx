import { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ onSubmit }) => {
    const [newItem, setNewItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newItem === '') return;
        onSubmit(newItem);

        setNewItem('');
    };

    return (
        <form className="f-form" onSubmit={handleSubmit}>
            <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                className="f-input"
                id="toDoInput"
                type="text"
                autoComplete="off"
                placeholder='What needs to be done?'
            />

            <button className="f-btn" type="submit">
                Add
                <img src="./src/assets/plus.svg" alt="" />
            </button>
        </form>
    );
};

export default TodoForm;
