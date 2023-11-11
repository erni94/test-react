import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './task.css'

export default class Task extends Component {
  static defaultProps = {
    description: '',
    created: new Date(),
    completed: false,
  }

  static propTypes = {
    description: PropTypes.string,
    created: PropTypes.instanceOf(Date),
    completed: PropTypes.bool,
    onDeleteTask: PropTypes.func.isRequired,
    toggleTaskCompleted: PropTypes.func.isRequired,
  }

  state = {
    editing: false,
  }

  editTask = () => {
    this.setState({ editing: true })
  }

  render() {
    const { description, created, completed, onDeleteTask, toggleTaskCompleted } = this.props

    let classList = ''

    if (this.state.editing) {
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
            <span className="description" onClick={toggleTaskCompleted}>
              {description}
            </span>
            <span className="created">{formatDistanceToNow(created, { includeSeconds: true })}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleteTask}></button>
        </div>
        {/* {this.state.editing ? <input type="text" className="edit" value={description}/> : null}*/}
      </li>
    )
  }
}
