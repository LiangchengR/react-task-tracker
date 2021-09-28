import Task from "./Task"

//tasks component, takes in tasks (array), onDelete (fn), and onToggle (fn)
const Tasks = ({ tasks, onDelete, onToggle}) => {
    return (
        <>
            {/* creating a list of of tasks */}
            {tasks.map((task) => (
                <Task 
                    key = {task.id} 
                    task = {task} 
                    onDelete={onDelete}
                    onToggle = {onToggle}
                />
            ))}
        </>
    )
}

export default Tasks
