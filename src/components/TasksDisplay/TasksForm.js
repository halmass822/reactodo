import Task from "../Task/Task"

export default function TasksDisplay(props) {
    return <table className="tasksTable">
        <thead>
            <tr>
                <th>Task</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {props.tasks.map((task, index) => {
                return <Task key={index} taskInfo={task} removeTask={props.removeTask} />
            })}
        </tbody>
    </table>
}