import React from 'react'
import PropTypes from 'prop-types'

import Task from '../task'
import './task-list.css'

const TaskList = ({ tasks = [], onDeleteTask, toggleTaskCompleted }) => {
  const tasksHtml = tasks.map((item) => {
    return (
      <Task
        key={item.id}
        description={item.description}
        created={item.created}
        completed={item.completed}
        onDeleteTask={() => onDeleteTask(item.id)}
        toggleTaskCompleted={() => toggleTaskCompleted(item.id)}
      />
    )
  })

  return <ul className="todo-list">{tasksHtml}</ul>
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      created: PropTypes.instanceOf(Date).isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  toggleTaskCompleted: PropTypes.func.isRequired,
}

export default TaskList
