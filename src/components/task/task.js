import React, { Component } from 'react';

export default class Task extends Component {

    state = {
        completed: false
    }

    toggleTaskCompleted = () => {
        this.setState(prevState => ({
            completed: !prevState.completed
        }));
    }

    render() {
        const { description, created, className, onDeleteTask } = this.props;
        const { completed } = this.state;

        let classList =  className;

        if (completed) {
            classList += ' completed';
        }

        return (
            <li className={classList}>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>
            <span
                className="description"
                onClick={this.toggleTaskCompleted}
            >{description}</span>
                        <span className="created">{created}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"
                        onClick={onDeleteTask}
                    ></button>
                </div>
                {className === 'editing' ? <input type="text" className="edit" value="Editing task" /> : null}
            </li>
        );
    }
}