import React from 'react'
import { createRoot } from 'react-dom/client'
import PropTypes from 'prop-types'

import NewTaskForm from './components/new-task-form'
import TaskList from './components/task-list'
import Footer from './components/footer'

import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

let newID = 100

class TodoApp extends React.Component {
  static defaultProps = {
    tasks: [],
    filter: 'All',
  }

  static propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        created: PropTypes.instanceOf(Date).isRequired,
        completed: PropTypes.bool.isRequired,
      })
    ),
    filter: PropTypes.oneOf(['All', 'Active', 'Completed']),
  }

  state = {
    tasks: [],
    filter: 'All',
  }

  DeleteTask = (id) => {
    this.setState(({ tasks }) => {
      const indexDelete = tasks.findIndex((task) => task.id === id)
      return { tasks: [...tasks.slice(0, indexDelete), ...tasks.slice(indexDelete + 1)] }
    })
  }

  createNewTask = (newTaskValue) => {
    newID++
    return {
      id: newID,
      description: newTaskValue,
      created: new Date(),
      completed: false,
    }
  }

  addNewTask = (newTaskValue) => {
    this.setState(({ tasks }) => {
      const newTask = this.createNewTask(newTaskValue)
      return {
        tasks: [...tasks.slice(0), newTask],
      }
    })
  }

  toggleTaskCompleted = (id) => {
    this.setState(({ tasks }) => {
      const index = tasks.findIndex((task) => task.id === id)
      return {
        tasks: [
          ...tasks.slice(0, index),
          { ...tasks[index], completed: !tasks[index].completed },
          ...tasks.slice(index + 1),
        ],
      }
    })
  }

  filterChange = (filter) => {
    this.setState({
      filter: filter,
    })
  }

  filterTasks = (tasks, filter) => {
    if (filter === 'All') {
      return tasks
    } else if (filter === 'Active') {
      return tasks.filter((task) => !task.completed)
    } else if (filter === 'Completed') {
      return tasks.filter((task) => task.completed)
    }
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter((task) => !task.completed),
    })
  }

  render() {
    const { tasks, filter } = this.state
    const filteredTasks = this.filterTasks(tasks, filter)

    return (
      <>
        <NewTaskForm addNewTask={this.addNewTask} />
        <section className="main">
          <TaskList
            tasks={filteredTasks}
            onDeleteTask={this.DeleteTask}
            toggleTaskCompleted={this.toggleTaskCompleted}
          />
          <Footer
            onFilterChange={this.filterChange}
            countCompleted={tasks.filter((task) => task.completed).length}
            onClearCompleted={this.clearCompleted}
          />
        </section>
      </>
    )
  }
}

root.render(<TodoApp />)
