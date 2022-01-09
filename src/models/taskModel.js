const taskModel = (newName, newDescription, newDueDate, newPriority, newNotes) => {
    // represents a task object

    let taskName = newName
    let description = newDescription
    let dueDate = newDueDate
    let priority = newPriority
    let notes = newNotes

    return {
        taskName, description, dueDate, priority, notes
    }
}

export {taskModel}