import React from "react";
import { createRoot} from "react-dom/client";
import NewTaskForm from "./components/new-task-form";
import TaskList from "./components/task-list";
import Footer from "./components/footer";


const container = document.getElementById("root");
const root = createRoot(container);

let newID = 100;

class TodoApp extends React.Component {


    state = {
        tasks : [
            {
                id: 1,
                description: 'Completed task',
                created: 'created 17 seconds ago',
                completed: true,

            },
            {
                id: 2,
                description: 'Editing task',
                created: 'created 5 minutes ago',
                //className:'editing',
                completed: false,

            },
            {
                id: 3,
                description: 'Active task',
                created: 'created 5 minutes ago',
                completed: false,
            }
        ],
        filter: 'All',
    }

    DeleteTask = (id) =>{
        this.setState( ({tasks}) =>{
            const indexDelete = tasks.findIndex(task => task.id === id)
            return {tasks:[
                ...tasks.slice(0, indexDelete),
                ...tasks.slice(indexDelete+ 1)
            ]}

        })
    }

    createNewTask = (newTaskValue) =>{
        newID++;
        return{
            id: newID,
            description: newTaskValue,
            created: 'now',
            completed: false,
        }
    }

    addNewTask = (newTaskValue) =>{
        this.setState( ({tasks})=>{
            const newTask = this.createNewTask(newTaskValue);
            return {
                tasks:
                    [...(tasks.slice(0)), newTask]
            }
        })
    }

    toggleTaskCompleted = (id) =>{
        this.setState( ({tasks}) =>{
            const index = tasks.findIndex(task => task.id === id)
            return {tasks:[
                ...tasks.slice(0, index),
                {...tasks[index], completed: !tasks[index].completed},
                ...tasks.slice(index+ 1)
            ]}
    })
    }

    filterChange = (filter) =>{
        this.setState({
            filter: filter
        });
    }

    filterTasks = (tasks, filter) => {
        if (filter === 'All') {
            console.log(tasks)
            return tasks; // Отображаем все задачи
        } else if (filter === 'Active') {
            return tasks.filter(task => !task.completed); // Отображаем незавершенные задачи
        } else if (filter === 'Completed') {
            return tasks.filter(task => task.completed); // Отображаем завершенные задачи
        }

    }



    render() {
        const { tasks, filter } = this.state;
        const filteredTasks = this.filterTasks(tasks, filter);

        return (
            <>
            <NewTaskForm
            addNewTask={this.addNewTask}
            />
            <section className="main">
                <TaskList tasks={filteredTasks}
                onDeleteTask={this.DeleteTask}
                toggleTaskCompleted={this.toggleTaskCompleted}
                />
                <Footer onFilterChange={this.filterChange}/>
            </section>
            </>
        )}
}

root.render(<TodoApp />);
