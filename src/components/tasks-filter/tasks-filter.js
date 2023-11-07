import React, { useState } from 'react'

const TasksFilter = (props) => {
  const [selectedFilter, setFilter] = useState('All')

  const selectFilter = (filter) => {
    setFilter(filter)
    props.onFilterChange(filter)
  }

  return (
    <ul className="filters">
      <li>
        <button className={selectedFilter === 'All' ? 'selected' : ''} onClick={() => selectFilter('All')}>
          All
        </button>
      </li>
      <li>
        <button className={selectedFilter === 'Active' ? 'selected' : ''} onClick={() => selectFilter('Active')}>
          Active
        </button>
      </li>
      <li>
        <button className={selectedFilter === 'Completed' ? 'selected' : ''} onClick={() => selectFilter('Completed')}>
          Completed
        </button>
      </li>
    </ul>
  )
}

export default TasksFilter
