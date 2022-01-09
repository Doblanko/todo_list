import { taskModel } from "../models/taskModel"
import { taskView } from "../views/taskView"
import { projectModel } from "../models/projectModel"
import { projectRepoModel } from "../models/projectRepoModel"

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
    

    const createTask = () => {
        // create a new task and add to the project task array when then submit button is clicked
        let activeProject = projectRepoModel.getActiveProject()

        let newTaskName = document.forms['TaskForm']['new-task-name'].value
        let newDescription = document.forms['TaskForm']['new-description'].value
        let newDueDate = document.forms['TaskForm']['new-due-date'].value
        let newPriority = document.forms['TaskForm']['select-priority'].value
        let newNotes = document.forms['TaskForm']['new-notes'].value

        const task = taskModel(newTaskName, newDescription, newDueDate, newPriority, newNotes)
        activeProject.addTask(task)
        _closeNewTaskForm()
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