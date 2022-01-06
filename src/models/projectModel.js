const projectFactory = (newName) => {
    // Represents a project. Contains the name of the project and tasks.

    let name = newName
    let tasks = []

    return {
        name, tasks
    }
}

export { projectFactory }