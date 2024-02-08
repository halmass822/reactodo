import { useState } from "react";

export default function NewTaskForm(props) {

    const [newTaskName, setNewTaskName] = useState("");
    const [newTaskDetails, setNewTaskDetails] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(newTaskName, newTaskDetails);
        setNewTaskName("");
        setNewTaskDetails("");
    };

    return <form className="newTaskForm" onSubmit={handleSubmit}>
        <label className="newTaskName">Name: 
            <input type="text" onChange={(e) => setNewTaskName(e.target.value)} 
            value={newTaskName}
            className="nameInput"
            required
            ></input> 
        </label>
        <label className="newTaskDetails">Details: 
            <textarea type="text" onChange={(e) => setNewTaskDetails(e.target.value)} 
            value={newTaskDetails}
            className="nameInput"
            ></textarea> 
        </label>
        <button className="newTaskSubmitBtn" type="submit">Create</button>
    </form>
}