import { useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [selectedId, setSelectedId]= useState(1);

  return (
   <>
   <button onClick={function() {
    setSelectedId(1);
   }}>1</button>
   <button onClick={function() {
    setSelectedId(2);
   }}>2</button>
   <button onClick={function() {
    setSelectedId(3);
   }}>3</button>
   <button onClick={function() {
    setSelectedId(4);
   }}>4</button>
   <Todo id={selectedId}></Todo> 
   </>
  )
}

function Todo({ id }) {
  const [todos, setTodos]= useState({});

  useEffect(() => {
    axios.get("https://dummyjson.com/todos/"+id)
    .then(function(response) {
      setTodos(response.data);
    })
  }, [id]);

  return (
    <div>
      <h2>{todos.todo}</h2>
      <p>Status: {todos.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}
export default App
