import React from "react";
import { createRoot} from "react-dom/client";
import NewTaskForm from "./components/new-task-form";
import TaskList from "./components/task-list";
import Footer from "./components/footer";


const container = document.getElementById("root");
const root = createRoot(container);

const tasks = [
    {
        id: 1,
        description: 'Completed task',
        created: 'created 17 seconds ago',
        //className:'completed'

    },
    {
        id: 2,
        description: 'Editing task',
        created: 'created 5 minutes ago',
        className:'editing'

    },
    {
        id: 3,
        description: 'Active task',
        created: 'created 5 minutes ago',
    }
]

const TodoApp = () => {
    return (
        <>
        <NewTaskForm />
        <section className="main">
            <TaskList tasks={tasks} />
            <Footer/>
        </section>
        </>
)
}
root.render(<TodoApp />);
