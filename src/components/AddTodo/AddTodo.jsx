import { useState } from 'react';

function AddTodo({ addTodos }) {
  const [todoText, setTodoText] = useState('');

  return (
    <>
      <input
        type="text"
        placeholder="add your next todo...."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        onClick={() => {
          addTodos(todoText);
          setTodoText('');
        }}
      >
        Submit
      </button>
    </>
  );
}

export default AddTodo;
