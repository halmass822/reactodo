import Task from "../Task/Task"
import "./TasksDisplay.css"

export default function TasksDisplay(props) {
    return <div className= "TasksDisplayContainer">
        <table className="tasksTable">
            <thead>
                <tr>
                    <th className="tasksDisplayHeader1">Task</th>
                    <th className="tasksDisplayHeader2" colspan="2">Description</th>
                </tr>
            </thead>
            <tbody>
                {props.tasks.map((task, index) => {
                    return <Task key={index} taskInfo={task} removeTask={props.removeTask} />
                })}
            </tbody>
        </table>
    </div> 
}