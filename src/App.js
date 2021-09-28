import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";

const App = () => { //functional component
  //declares and initalizes state for adding tasks
  //    [stateName, functionToSetState] = initalized as
  //by default, false as in add task form does not show
  const [showAddTask, setShowAddTask] = useState (false)
   
  //declares and initalizes state for list of tasks
  //    [stateName, functionToSetState] = initalized as
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Sample Task',
        day: 'Date at Time',
        reminder: true,
    },

    // {
    //     id: 2,
    //     text: 'Meeting at School',
    //     day: 'Feb 6th at 1:30pm',
    //     reminder: true,
    // },

    // {
    //     id: 3,
    //     text: 'Food Shopping',
    //     day: 'Feb 5th at 2:30pm',
    //     reminder: false,
    // }
])

//Add Task Function, takes prop 'task'
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1 //gives random id
  const newTask = { id, ...task} // adds id to task object
  setTasks([...tasks, newTask]) //adds new task to end of array of existing tasks
}

//Delete Task Function, takes 'prop' id
const deleteTask = (id) =>{ 
  //update Tasks by filtering through array of tasks and as long as the task is NOT equal to the id of the one we want to delete, return in array
  setTasks(tasks.filter((task) => task.id !== id)) 
}

//Toggle Reminder Function, takes 'prop' id
const toggleReminder = (id) => {
  //updates reminder on Tasks by looking at the id, if the id 
  setTasks(
    tasks.map((task) => 
      task.id === id ? 
      {...task, reminder: !task.reminder} :
      task
    )
  )
}


  return (
    <div className='container'>
      {/* Header component  */}
      <Header onAdd = { () => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {/*if showAddTask is true, show the AddTask form component */}
      {showAddTask && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? //if length of task array is > 0
      (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>) 
      //pass in property of tasks, 
      : ('No Tasks To Show') //else show message
      }
    </div>
  )
}





export default App
