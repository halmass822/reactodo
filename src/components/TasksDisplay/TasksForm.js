export default function TasksDisplay(props) {
    return <table className="tasksTable">
        <tr>
            <th>Task</th>
            <th>Description</th>
        </tr>
        {props.tasks.map((task, index) => {
            return <tr key={index}>
                <td>{task.taskName}</td>
                <td>{task.taskDetails}</td>
                <button onClick={props.removeTask(task.taskId)}>x</button>
            </tr>
        })}
    </table>
}