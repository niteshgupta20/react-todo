import './App.css';
import { useReducer } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import TodoContext from './context/TodoContext';
import TodoReducer from './reducers/Todoreducer';

function App() {
  const initialState = [
    { id: 1, text: 'todo1', isFinished: true },
    { id: 2, text: 'todo2', isFinished: false },
  ];

  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  // useEffect(() => {
  //   console.log(todos);
  // });

  return (
    <>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
