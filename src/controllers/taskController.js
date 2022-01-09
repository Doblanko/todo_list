import { taskFactory } from "../models/taskModel"
import { taskView } from "../views/taskView"

const taskController = (() => {

    const initTask = () => {
        
        taskView.initializeTaskView()

        // ----- Add event listeners ----- //
        const addTaskBtn = document.querySelector('.add-task-btn')
        addTaskBtn.addEventListener('click', _openNewTaskForm)
        
        let submitBtn = document.querySelector('#task-submit-btn')
        submitBtn.addEventListener('click', createTask)

        let cancelBtn = document.querySelector('#task-cancel-btn')
        cancelBtn.addEventListener('click', _closeNewTaskForm)

    }

    const _openNewTaskForm = () => {
        taskView.openForm()
    }

    const _closeNewTaskForm = () => {
        taskView.closeForm()
    }
    
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
        initTask, createTask, deleteTask, updateTask
    }
})()

export { taskController }