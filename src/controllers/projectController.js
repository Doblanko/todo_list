import { projectFactory } from "../models/projectModel"

const projectControllerFactory = () => {

    const createProject = (projectName) => {
        projectFactory(projectName)
    }

    const deleteProject= (projectName) => {

    }

    return {
        createProject, deleteProject
    }
}

export { projectControllerFactory }