import React, { useState } from 'react'
import './new-task-form.css'

export default function NewTaskForm({ addNewTask }) {
  const [newTaskValue, setNewTaskValue] = useState('')

  const onLabelChange = (e) => {
    setNewTaskValue(e.target.value)
  }

  const onLabelSubmit = (e) => {
    e.preventDefault()
    addNewTask(newTaskValue)
    setNewTaskValue('')
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        onChange={onLabelChange}
        value={newTaskValue}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onLabelSubmit(e)
          }
        }}
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  )
}
