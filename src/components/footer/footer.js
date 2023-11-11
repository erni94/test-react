import React from 'react'

import TasksFilter from '../tasks-filter'
import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer">
      <span className="todo-count">{props.countCompleted} items left</span>
      <TasksFilter onFilterChange={props.onFilterChange} />
      <button className="clear-completed" onClick={props.onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
