import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import PropTypes from 'prop-types'

import NewTaskForm from './components/new-task-form'
import TaskList from './components/task-list'
import Footer from './components/footer'

import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

let newID = 100

const TodoApp = ({ initialTasks = [], initialFilter = 'All' }) => {
  const [state, setState] = useState({ tasks: initialTasks, filter: initialFilter })

  const DeleteTask = (id) => {
    setState((prevState) => {
      const tasks = prevState.tasks.filter((task) => task.id !== id)
      return { ...prevState, tasks }
    })
  }

  const createNewTask = (newTaskValue) => {
    newID++
    return {
      id: newID,
      description: newTaskValue,
      created: new Date(),
      completed: false,
    }
  }

  const addNewTask = (newTaskValue) => {
    setState((prevState) => {
      const newTask = createNewTask(newTaskValue)
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      }
    })
  }

  const toggleTaskCompleted = (id) => {
    setState(({ tasks, filter }) => {
      const index = tasks.findIndex((task) => task.id === id)
      const updatedTasks = [
        ...tasks.slice(0, index),
        { ...tasks[index], completed: !tasks[index].completed },
        ...tasks.slice(index + 1),
      ]

      return {
        tasks: updatedTasks,
        filter,
      }
    })
  }

  const filterChange = (filter) => {
    setState((prevState) => ({
      ...prevState,
      filter: filter,
    }))
  }

  const filterTasks = (tasks, filter) => {
    if (filter === 'All') {
      return tasks
    } else if (filter === 'Active') {
      return tasks.filter((task) => !task.completed)
    } else if (filter === 'Completed') {
      console.log(tasks.filter((task) => task.completed))
      return tasks.filter((task) => task.completed)
    }
  }

  const clearCompleted = () => {
    setState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => !task.completed),
    }))
  }

  console.log(state.tasks, state.filter)
  const filteredTasks = filterTasks(state.tasks, state.filter)

  return (
    <>
      <NewTaskForm addNewTask={addNewTask} />
      <section className="main">
        <TaskList tasks={filteredTasks} onDeleteTask={DeleteTask} toggleTaskCompleted={toggleTaskCompleted} />
        <Footer
          onFilterChange={filterChange}
          countCompleted={state.tasks.filter((task) => task.completed).length}
          onClearCompleted={clearCompleted}
        />
      </section>
    </>
  )
}

TodoApp.propTypes = {
  initialTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      created: PropTypes.instanceOf(Date).isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
  initialFilter: PropTypes.oneOf(['All', 'Active', 'Completed']),
}

root.render(<TodoApp />)
