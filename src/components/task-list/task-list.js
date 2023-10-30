import React from 'react';
import Task from "../task";

const TaskList = ({ tasks }) => {

    const tasksHtml = tasks.map(item => {
        return (
            <Task
                description={item.description}
                created={item.created}
                className={item.className}
            />
        )
    })

    return (
        <ul className="todo-list">
            {tasksHtml}
        </ul>
    )
}

export default TaskList