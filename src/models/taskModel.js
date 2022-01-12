const taskModel = (newName, newId, newDescription, newDueDate, newPriority, newNotes) => {
    // represents a task object

    let name = newName
    let id = newId
    let description = newDescription
    let dueDate = newDueDate
    let priority = newPriority
    let notes = newNotes

    return {
        name, id, description, dueDate, priority, notes
    }
}

export {taskModel}