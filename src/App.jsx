import { useEffect, useState, useContext, createContext } from 'react';
import './styles.css';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';

const TodosContext = createContext();

export function useTodos(){
  return useContext(TodosContext);
}

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
          return [
            ...currentTodos,
            { id: crypto.randomUUID(), title: title, completed: false}
          ]
        })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo;
      })
    }) 
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })

  }

  function removeAll() {
    setTodos([]);
  }
 
  return (
  <TodosContext.Provider value={{todos, addTodo, toggleTodo, deleteTodo, removeAll}} >
    <>
      <NewTodoForm onSubmit={addTodo} removeAll={removeAll}/>
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  </TodosContext.Provider>
  )
}