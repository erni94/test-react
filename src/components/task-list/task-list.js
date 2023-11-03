import React, { Component } from 'react';
import Task from "../task";

export default class TaskList extends Component {

    render() {
        const { tasks, onDeleteTask, toggleTaskCompleted } = this.props
        const tasksHtml = tasks.map(item => {
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

        return (
            <ul className="todo-list">
                {tasksHtml}
            </ul>
        )
    }
}
