import React, { Component } from 'react';

export default class NewTaskForm extends Component
{
    state = {
        newTaskValue: '',
    }

    onLabelChange = (e) => {
        this.setState({ newTaskValue: e.target.value });
    }

    onLabelSubmit = (e) => {
        e.preventDefault();
        this.props.addNewTask(this.state.newTaskValue);
        this.setState({ newTaskValue: '' });
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo"
                       onChange={this.onLabelChange}
                       value={this.state.newTaskValue}
                       onKeyDown={(e) => {
                           if (e.key === 'Enter') {
                               this.onLabelSubmit(e);
                           }
                       }}
                       placeholder="What needs to be done?" autoFocus />
            </header>
        );
    };
}
