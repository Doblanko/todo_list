import { taskFactory } from "../models/taskModel"

const taskControllerFactory = () => {

    const getProject = () => {
        // get the active project on the page
    }

    const createTask = (newTaskName, newDescription, newDueDate, newPriority, newNotes) => {
        // create a new task and add to the project task array

        let project = getProject()
        let task = taskFactory(newTaskName, newDescription, newDueDate, newPriority, newNotes)
        project.tasks.push(task)

    }

    const updateTask = () => {

    }

    const deleteTask = () => {

    }

    return {
        createTask, deleteTask, updateTask
    }
}

export { taskControllerFactory }