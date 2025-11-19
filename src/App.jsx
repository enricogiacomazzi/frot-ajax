import { useEffect, useState } from 'react'
import './App.css'
import { TodoList } from './components/TodoList';




function App() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const res = await fetch('http://localhost:3000/todos');
    const data = await res.json();
    setTodos(data);
  } 

  useEffect(() => {
    getTodos();
  }, [])



  return (
    <>
    <div className="row col-10 offset-1 my-2">
      <TodoList todos={todos} />
    </div>
    </>
  )
}

export default App
