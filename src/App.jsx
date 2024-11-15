import React, { useState } from 'react';
import './App.css';
import './bootstrap.css'

const styles = {
  todoList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottom: '1px solid #ccc'
  },
  checkbox: {
    marginRight: 10
  },
  todoText: {
    flex: 1,
    textDecoration: 'none'
  },
  todomain: {
    color: "black",
    flex: 1,
    textDecoration: 'none'
  },
  completed: {
    textDecoration: 'line-through'
  }
};

function TodoApp ()  {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = event => {
    event.preventDefault();
    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };
    
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const handleRemoveTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='main-app'>
      <h1 className='title'>Todo App</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={event => setNewTodo(event.target.value)}
          style={styles.todomain}
        />
        <button type="submit" className='btn btn-outline-success'>Add Todo</button>
      </form>
      <ul style={styles.todoList}>
        {todos.map(todo => (
          <li key={todo.id} style={styles.todoItem}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleRemoveTodo(todo.id)}
              style={styles.checkbox}
            />
            <span
              style={{
                textDecoration: todo.completed ? styles.completed : null,
                ...styles.todoText
              }}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;