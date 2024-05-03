import React, { useState } from 'react';

function TodoList({ todos, completeTodo, deleteTodo, editTodo }) {
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSave = () => {
    if (editText.trim() && editId !== null) {
      editTodo(editId, editText);
      setEditId(null);
      setEditText('');
    }
  };

  const handleCancel = () => {
    setEditId(null);
    setEditText('');
  };

  const pendingTasks = todos.filter(todo => !todo.completed);
  const completedTasks = todos.filter(todo => todo.completed);

  return (
    <div style={{ display: 'flex', justifyContent: '' }}>
      <div style={{ marginRight: '20px' }}>
        <h3>Pending Tasks</h3>
        <ul style={{ listStyleType: 'none', padding: 0, paddingLeft: 1 }}>
          {pendingTasks.map((todo) => (
            <li key={todo.id} style={{ marginBottom: '0.5rem' }}>
              {editId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => completeTodo(todo.id)}
                  />
                  <span
                    style={{
                      marginLeft: '0.5rem',
                      textDecoration: todo.completed ? 'line-through' : 'none',
                    }}
                  >
                    {todo.text}
                  </span>
                  <button
                    style={{
                      marginLeft: '0.5rem',
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      padding: '0.3rem 0.5rem',
                      cursor: 'pointer',
                    }}
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                  <button onClick={() => handleEdit(todo.id, todo.text)}
                  style={{marginLeft: '0.5rem', backgroundColor: 'green', color:'white', border:'none', padding: '0.2rem 0.5rem' , cursor:'pointer'}}>Edit
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Completed Tasks</h3>
        <ul style={{ listStyleType: 'none', padding: 0, paddingLeft: 1 }}>
          {completedTasks.map((todo) => (
            <li key={todo.id} style={{ marginBottom: '0.5rem' }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => completeTodo(todo.id)}/>
              <span
                style={{
                  marginLeft: '0.5rem',
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </span>
              <button
                style={{
                  marginLeft: '0.5rem',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '0.2rem 0.5rem',
                  cursor: 'pointer',
                }}
                onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
