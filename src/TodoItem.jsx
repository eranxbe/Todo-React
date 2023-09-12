import { useTodos } from "./App";

export function TodoItem({completed, id, title}) {
    const { toggleTodo, deleteTodo } = useTodos();
    return (
        <li key={id}>
            <label>
                <input 
                type='checkbox' 
                checked={completed} 
                onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button 
            className='btn btn-danger'
            onClick={() => deleteTodo(id)}
            >
                Delete
            </button>
        </li>
    )
}