import React from 'react'

export default function ToDo({ToDo}) {
  return (
    <div>
      <input type='checkbox' checked = {ToDo.complete} />
      {ToDo.name}
    </div>
  )
}
