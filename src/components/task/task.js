import React from 'react';

const Task = (props) => {
  const { description, created, className } = props;

  return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" />
            <label>
              <span className="description">{description}</span>
              <span className="created">{created}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
          {className === 'editing' ? <input type="text" className="edit" value="Editing task" /> : null}
      </li>
  );
};



export default Task;
