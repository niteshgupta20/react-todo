import './App.css';
import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'todo1', isFinished: true },
    { id: 2, text: 'todo2', isFinished: false },
  ]);

  function addTodos(todoText) {
    let nextId = todos.length + 1;
    setTodos([
      ...todos,
      {
        id: nextId,
        isFinished: false,
        text: todoText,
      },
    ]);
  }

  useEffect(() => {
    console.log(todos);
  });

  return (
    <>
      <AddTodo addTodos={addTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
