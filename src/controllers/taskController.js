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
        // check if there is an active project
        if (projectRepoModel.getActiveProject()) {
            taskView.openForm()
        } else {
            alert('Please select a project to add the task to.')
        }      
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
        let newId = activeProject.generateTaskId()

        const newTask = taskModel(newTaskName, newId, newDescription, newDueDate, newPriority, newNotes)
        activeProject.addTask(newTask)

        _renderTasks(activeProject.getTasks())
        _closeNewTaskForm()
    }

    const _renderTasks = (tasks) => {
        taskView.renderTasks(tasks)
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