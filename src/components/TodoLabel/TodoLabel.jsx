import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import './TodoLabel.css';

const TodoLabel = ({ id, title, isEditing, editTodo }) => {
    const textarea = useRef(null);

    useEffect(() => {
        isEditing && textarea.current.focus();
    }, [isEditing]);

    return (
        <div
            className={clsx('c-task', isEditing && 'c-task--editing')}
            data-value={title}
        >
            {isEditing ? (
                <textarea
                    ref={textarea}
                    rows="2"
                    value={title}
                    className="c-task__textarea"
                    onChange={(e) => editTodo(id, e.target.value)}
                    onFocus={(e) =>
                        e.currentTarget.setSelectionRange(
                            e.currentTarget.value.length,
                            e.currentTarget.value.length
                        )
                    }
                />
            ) : (
                <p className="c-task__title">{title}</p>
            )}
        </div>
    );
};

export default TodoLabel;
