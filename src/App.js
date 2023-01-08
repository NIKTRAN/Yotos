
import ToDoList from './ToDoList';
import React, {useState, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [ToDos, setToDos] = useState([ ]);
  const ToDoName = useRef();
  function handleAddToDo(e) {

    const name = ToDoName.current.value;
    if(name === '') return;
    setToDos(prevToDos => {
      return[...prevToDos, {id: uuidv4(), name: name , complete: false }]
      
    });
    ToDoName.current.value = null;

  }
  
  
  return (
    <>




      <ToDoList ToDos = {ToDos} />
      <input ref = {ToDoName} type='text'/>
      <button onClick={handleAddToDo}> Add Todo</button>
      <button> Clear Todo</button>
      
    </>
  );
}

export default App;
