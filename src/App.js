import { useState } from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskform/NewTaskForm';
import TasksDisplay from './components/TasksDisplay/TasksDisplay';

function App() {

  const [idCounter, setIdCounter] = useState(6);

  const [tasks, setTasks] = useState([
    {
      taskId: 1,
      taskName: "test1",
      taskDetails: "test1details"
    },
    {
      taskId: 2,
      taskName: "test2",
      taskDetails: "test2details"
    },
    {
      taskId: 3,
      taskName: "test3",
      taskDetails: "test3details"
    },
    {
      taskId: 4,
      taskName: "test4",
      taskDetails: "test4details"
    },
    {
      taskId: 5,
      taskName: "test5",
      taskDetails: "test5details"
    },
  ]);
  
  function addTask(taskName, taskDetails) {
    setTasks((prev) => [
      ...prev, 
      {
        taskId: idCounter,
        taskName: taskName, 
        taskDetails: taskDetails
      }
    ]);
    setIdCounter((prev) => prev + 1);
  }

  function removeTask(taskId) {
    console.log("removetask run for " + taskId)
    setTasks((prev) => {
      return prev.filter((task) => {
        return task.taskId !== taskId
      });
    });
  }

  return (
    <div className="App">
      <NewTaskForm addTask={addTask}/>
      <TasksDisplay tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;