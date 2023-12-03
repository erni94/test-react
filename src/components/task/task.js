import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../timer'
import './task.css'

const Task = ({ description = '', created = new Date(), completed = false, onDeleteTask, toggleTaskCompleted }) => {
  const [editing, setEditing] = useState(false)

  const editTask = () => {
    setEditing(true)
  }

  let classList = ''

  if (editing) {
    classList += ' editing'
  }
  if (completed) {
    classList += ' completed'
  }

  return (
    <li className={classList}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={toggleTaskCompleted} />
        <label>
          <span className="title" onClick={toggleTaskCompleted}>
            {description}
          </span>
          <Timer />
          <span className="description">{formatDistanceToNow(created, { includeSeconds: true })}</span>
        </label>
        <button className="icon icon-edit" onClick={editTask}></button>
        <button className="icon icon-destroy" onClick={onDeleteTask}></button>
      </div>
      {/* {editing ? <input type="text" className="edit" value={description}/> : null}*/}
    </li>
  )
}

Task.propTypes = {
  description: PropTypes.string,
  created: PropTypes.instanceOf(Date),
  completed: PropTypes.bool,
  onDeleteTask: PropTypes.func.isRequired,
  toggleTaskCompleted: PropTypes.func.isRequired,
}

export default Task
