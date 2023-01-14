
import ToDoList from './ToDoList';
import React, {useState, useRef, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';


const LOCAL_STORAGE_KEY = 'todoApp';



function App() {
  

  const [ToDos, setToDos] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
  const ToDoName = useRef();

  
  useEffect( () => {
    const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log(storedToDos)
    if (storedToDos) {setToDos(storedToDos);}
  }, [])
  
  function toggleToDo(id){
    const newToDos =[...ToDos]
    const ToDo = newToDos.find(ToDo => ToDo.id === id)
    ToDo.complete = !ToDo.complete
    setToDos(newToDos)
  }
  
  
  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ToDos) );
    console.log(LOCAL_STORAGE_KEY)
  }, [ToDos])

  function handleAddToDo(e) {

    const name = ToDoName.current.value;

    if(name === '') return;

    setToDos(prevToDos => {
      return[...prevToDos, {id: uuidv4(), name: name , complete: false }]
    
    });


    ToDoName.current.value = null;

  }

  
  function handleClearToDos(){
    const newToDos = ToDos.filter(ToDo => !ToDo.complete);
    setToDos(newToDos)

  }

  
  return ( 
    <>

      

      <ToDoList ToDos = {ToDos} toggleToDo= {toggleToDo}  />
      <input ref = {ToDoName} type='text'/>
      <button onClick={handleAddToDo}> Add Todo</button>
      <button onClick={handleClearToDos}> Clear Todo</button>
      
    </>
  );
}

export default App;
