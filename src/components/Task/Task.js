export default function Task(props) {
    return <tr>
    <td>{props.taskInfo.taskName}</td>
    <td>{props.taskInfo.taskDetails}</td>
    <td>
        <button onClick={() => props.removeTask(props.taskInfo.taskId)}>x</button>
    </td>
</tr>
}