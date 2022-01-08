import { projectRepoModel } from "../models/projectRepoModel"
import { projectFactory } from "../models/projectModel"
import { projectView } from "../views/projectView"

// project controller module
const projectController = (() => {

    const initProject = () => {
        
        projectView.initializeProjectView()
    }
    
    const createProject = (projectName) => {
        projectFactory(projectName)
    }

    const deleteProject= (projectName) => {

    }

    return {
        initProject, createProject, deleteProject
    }
})()

export { projectController }