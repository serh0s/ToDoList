import TodoItem from '../TodoItem/TodoItem';
import { FaListCheck } from "react-icons/fa6";
import "./TodoList.css"

const TodosList = ({ todos, toggleTodo, deleteTodo, editTodo}) => {
    return (
        <ul className="c-list">
            {!todos.length && <div className='c-list--empty'>
                <FaListCheck />
                <b>You do not have any tasks registered yet</b>
                <p>Create tasks and organize your to-do items</p>
            </div>}

            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            ))}
        </ul>
    );
}

export default TodosList
