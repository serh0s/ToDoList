import { clsx } from 'clsx';
import './TodoCheckbox.css'

const TodoCheckbox = ({id, completed, toggleTodo, disabled}) => {
  return (
    <div
        className={clsx(
            'c-checkbox',
            disabled && 'c-checkbox--disabled'
        )}
    >
        <input
            id={'checkbox-' + id}
            className="c-checkbox__input"
            type="checkbox"
            onChange={() => toggleTodo(id)}
            checked={completed}
        />
        <label
            htmlFor={'checkbox-' + id}
            className="c-checkbox__label"
        ></label>
    </div>
  )
}

export default TodoCheckbox