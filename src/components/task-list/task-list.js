import React, { Component } from 'react';
import Task from "../task";

export default class TaskList extends Component {

    render() {
        const { tasks, onDeleteTask } = this.props
        const tasksHtml = tasks.map(item => {
            return (
                <Task
                    key={item.id}
                    description={item.description}
                    created={item.created}
                    className={item.className}
                    onDeleteTask={() => onDeleteTask(item.id)}
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
