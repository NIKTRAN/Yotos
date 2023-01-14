import React from 'react';

import ToDo from './ToDo';

export default function ToDoList( {ToDos, toggleToDo} ) {
  return (

    ToDos.map(todo => {
      return <ToDo key={todo} toggleToDo={toggleToDo} ToDo={todo} />
    })


  );
}

