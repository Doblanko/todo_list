import { projectRepoModel } from "../models/projectRepoModel"
import { projectFactory } from "../models/projectModel"
import { projectView } from "../views/projectView"

// project controller module
const projectController = (() => {

    const initProject = () => {
        
        projectView.initializeProjectView()

        // ----- Add event listeners ----- //
        const addProjectBtn = document.querySelector('.add-project-button')
        addProjectBtn.addEventListener('click', openNewProjectForm)
        
        let submitBtn = document.querySelector('#project-submit-btn')
        submitBtn.addEventListener('click', createProject)

        let cancelBtn = document.querySelector('#project-cancel-btn')
        cancelBtn.addEventListener('click', closeNewProjectForm)

    }
    
    const createProject = (projectName) => {
        
    }

    const openNewProjectForm = () => {
        projectView.openForm()
    }

    const closeNewProjectForm = () => {
        projectView.closeForm()
    }

    const deleteProject= (projectName) => {

    }

    return {
        initProject, createProject, deleteProject
    }
})()

export { projectController }