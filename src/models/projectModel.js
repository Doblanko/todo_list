const projectModel = (newName, newID) => {
    // Represents a project. Contains the name of the project and tasks.

    let name = newName
    let id = newID
    let tasks = []
    let taskId = 0

    const getName = () => {
        return name
    }

    const getId = () => {
        return id
    }

    const addTask = (task) => {
        // task is [id, task]
        tasks.push(task)
    }

    const generateTaskId = () => {
        // return the ID for the task being created and get ready for the next one
        taskId += 1
        return taskId - 1
    } 

    const getTasks = () => { return tasks }

    return {
        getName, getId, addTask, getTasks, generateTaskId 
    }
}

export { projectModel }