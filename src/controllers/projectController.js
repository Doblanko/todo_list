import { projectRepoModel } from "../models/projectRepoModel"
import { projectModel } from "../models/projectModel"
import { projectView } from "../views/projectView"

// project controller module
const projectController = (() => {

    const initProject = () => {
        
        projectView.initializeProjectView()

        // add a test project
        createProject('Sample')
        

        // ----- Add event listeners ----- //
        const addProjectBtn = document.querySelector('.add-project-btn')
        addProjectBtn.addEventListener('click', _openNewProjectForm)
        
        let submitBtn = document.querySelector('#project-submit-btn')
        submitBtn.addEventListener('click', createProject)

        let cancelBtn = document.querySelector('#project-cancel-btn')
        cancelBtn.addEventListener('click', _closeNewProjectForm)

    }
    
    const createProject = (projectName) => {
        const newProject = projectModel(projectName, projectRepoModel.generateId())
        projectRepoModel.addProject(newProject.getId(), newProject)
        projectView.createProject(newProject.getName(), newProject.getId())

        const addedProject = document.querySelector(`#project-${newProject.getId()}`)
        addedProject.addEventListener('click', selectProject)
    }

    const selectProject = (event) => {
        // unselect any selected classes
        const lastSelectedProject = document.querySelector('.clicked')
        if (lastSelectedProject) { lastSelectedProject.classList.remove('clicked') }

        event.target.classList.add('clicked')
        
        // the id of list elements are project-id
        const activeProjectId = Number(event.target.id.substr(-1))
        projectRepoModel.setActiveProject(projectRepoModel.getProject(activeProjectId))
    }

    const _openNewProjectForm = () => {
        projectView.openForm()
    }

    const _closeNewProjectForm = () => {
        projectView.closeForm()
    }

    const deleteProject= (projectName) => {

    }

    return {
        initProject, createProject, deleteProject
    }
})()

export { projectController }