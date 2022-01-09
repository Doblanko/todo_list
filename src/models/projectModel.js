const projectModel = (newName, newID) => {
    // Represents a project. Contains the name of the project and tasks.

    let name = newName
    let id = newID
    let tasks = []

    const getName = () => {
        return name
    }

    const getId = () => {
        return id
    }

    const addTask = (task) => {
        tasks.push(task)
    }

    const getTasks = () => { return tasks }

    return {
        getName, getId, addTask, getTasks
    }
}

export { projectModel }