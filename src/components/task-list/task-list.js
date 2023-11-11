import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Task from '../task'
import './task-list.css'

export default class TaskList extends Component {
  static defaultProps = {
    tasks: [],
  }

  static propTypes = {
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

  render() {
    const { tasks, onDeleteTask, toggleTaskCompleted } = this.props
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
}
