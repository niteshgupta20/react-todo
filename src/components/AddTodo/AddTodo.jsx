import { useContext, useState } from 'react';
import TodoContext from '../../context/TodoContext';

function AddTodo() {
  const { dispatch } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  function addTodo(todoText) {
    dispatch({ type: 'add_todo', payload: { todoText } });
  }

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
          addTodo(todoText);
          setTodoText('');
        }}
      >
        Submit
      </button>
    </>
  );
}

export default AddTodo;
