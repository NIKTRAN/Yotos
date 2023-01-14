import React from 'react'

export default function ToDo({ToDo, toggleToDo}) {
  function handleToDoClick(){
    toggleToDo(ToDo.id)
  }

  return (
    <div>
      <input type='checkbox' onChange={handleToDoClick} checked = {ToDo.complete} />
      {ToDo.name}
    </div>
  )
}
