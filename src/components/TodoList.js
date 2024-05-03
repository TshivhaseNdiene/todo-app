// src/components/TodoList.js

import React from 'react';

function TodoList({ todos, completeTodo, deleteTodo }) {
  return (
    <div style={{display: 'flex', justifyContent:''}}>
      <ul style={{ listStyleType: 'none', padding: 0, paddingLeft: 16}}>
    {todos.map((todo) => (
      <li key={todo.id} style={{ marginBottom: '0.5rem' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}/>
        <span style={{
            marginLeft: '0.5rem',
            textDecoration: todo.completed ? 'line-through' : 'none',}}>{todo.text}
        </span>
        <button style={{ marginLeft: '0.5rem', backgroundColor: 'red', color: 'white', border: 'none', padding: '0.3rem 0.5rem', borderRadius: '4px', cursor: 'pointer' }}
        onClick={() => deleteTodo(todo.id)}> Delete
        </button>
      </li>
    ))}
  </ul>
  </div>
    
  );
}

export default TodoList;
