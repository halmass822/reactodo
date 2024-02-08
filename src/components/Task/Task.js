export default function Task(props) {
    return <tr className="taskRow">
    <td className="taskName">{props.taskInfo.taskName}</td>
    <td>{props.taskInfo.taskDetails}</td>
    <td className="removeTaskButtonTd">
        <button onClick={() => props.removeTask(props.taskInfo.taskId)}>x</button>
    </td>
</tr>
}