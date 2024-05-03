import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
    <div style={{display: 'flex', paddingLeft:1 }}>
    <input
        type="text"
        placeholder="Add todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginRight: '0.5rem', padding: '0.5rem', borderRadius: '6px', border: '2px solid #ccc' }}
      />
      <button
        type="submit"
        style={{ padding: '0.3rem 0.5rem', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Add
      </button>
    </div>
      
    </form>
  );
}

export default TodoForm;
