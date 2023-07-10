import { clsx } from 'clsx';
import { useState, useRef, useEffect } from 'react';
import TodoCheckbox from '../TodoCheckbox/TodoCheckbox';
import TodoLabel from '../TodoLabel/TodoLabel';

import {
    FaTrashCan,
    FaPencil,
    FaSdCard,
    FaRegEyeSlash,
    FaRegEye,
} from 'react-icons/fa6';
import './TodoItem.css';

const TodoItem = ({
    id,
    title,
    completed,
    toggleTodo,
    deleteTodo,
    editTodo,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [priority, setPriority] = useState('normal');
    const [chooseStatus, setChooseStatus] = useState(false);

    const setNewPriority = (value) => {
        setChooseStatus((chooseStatus) => !chooseStatus);
        setPriority(value);
    };

    return (
        <li
            className={clsx(
                'c-list__item',
                completed && 'c-list__item--completed',
                expanded && 'c-list__item--expanded'
            )}
        >
            <TodoCheckbox
                id={id}
                completed={completed}
                toggleTodo={toggleTodo}
                disabled={isEditing}
            />

            <TodoLabel
                id={id}
                title={title}
                isEditing={isEditing}
                editTodo={editTodo}
            />

            <div className="c-list__item-controls">
                <button
                    className={clsx(
                        'c-button',
                        completed && 'c-button--disabled'
                    )}
                    onClick={() => setIsEditing((isEditing) => !isEditing)}
                >
                    {isEditing ? <FaSdCard /> : <FaPencil />}
                </button>

                <button
                    className={clsx(
                        'c-button',
                        isEditing && 'c-button--disabled'
                    )}
                    onClick={() => deleteTodo(id)}
                >
                    <FaTrashCan />
                </button>

                <button
                    className={clsx(
                        'c-button',
                        (isEditing || completed) && 'c-button--disabled'
                    )}
                    onClick={() =>
                        setChooseStatus((chooseStatus) => !chooseStatus)
                    }
                >
                    <span
                        className="c-priority"
                        data-priority={priority}
                    ></span>
                </button>

                <button
                    className={clsx(
                        'c-button',
                        isEditing && 'c-button--disabled'
                    )}
                    onClick={() => setExpanded((expanded) => !expanded)}
                >
                    {expanded ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>

                <div
                    className={clsx(
                        'c-priority-statuses',
                        chooseStatus && 'show'
                    )}
                >
                    <button
                        className="c-button"
                        onClick={() => setNewPriority('normal')}
                    >
                        <span
                            className="c-priority"
                            data-priority="normal"
                        ></span>
                    </button>

                    <button
                        className="c-button"
                        onClick={() => setNewPriority('important')}
                    >
                        <span
                            className="c-priority"
                            data-priority="important"
                        ></span>
                    </button>

                    <button
                        className="c-button"
                        onClick={() => setNewPriority('urgently')}
                    >
                        <span
                            className="c-priority"
                            data-priority="urgently"
                        ></span>
                    </button>
                </div>
            </div>
        </li>
    );
};

export default TodoItem;
