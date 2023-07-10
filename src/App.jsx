import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodosList from './components/TodoList/TodoList';
import RocketImg from './assets/rocket.svg';
import './style.css';

export default function App() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title) => {
        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                {
                    id: currentTodos.length + 1,
                    title,
                    completed: false
                },
            ];
        });
    };

    const toggleTodo = (id) => {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        });
    };

    const deleteTodo = (id) => {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id);
        });
    }

    const editTodo = (id, title) => {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, title };
                }
                return todo;
            })
        });
    }

    return (
        <>
            <header className="c-header">
                <img className="c-header__logo" src={RocketImg} />
                <span className="c-header__title">
                    to<span>do</span>
                </span>
            </header>

            <div className="l-container">
                <TodoForm onSubmit={addTodo} />

                <div className="c-controls">
                    <div className="c-counter" data-color='blue'>
                        Created
                        <span className="c-counter__number">{todos.length}</span>
                    </div>

                    <div className="c-counter" data-color='purple'>
                        Finished
                        <span className="c-counter__number">{todos.filter(todo => todo.completed === true).length} / {todos.length}</span>
                    </div>
                </div>

                <TodosList
                    todos={todos}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            </div>
        </>
    );
}
