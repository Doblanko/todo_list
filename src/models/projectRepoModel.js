// simulating a database
const projectRepoModel = (() => {
    let id = 0
    let activeProject = null
    let projects = {}

    const generateId = () => {
        // return the ID for the project being created and get ready for the next one
        id += 1
        return id - 1
    }
    
    const setActiveProject = (project) => {
        activeProject = project
    }

    const addProject = (projectId, project) => {
        projects[projectId] = project
    }

    const getProject = (projectId) => { return projects[projectId] }

    const getActiveProject = () => { return activeProject }

    return { generateId, addProject, getProject, setActiveProject, getActiveProject }
})()

export { projectRepoModel }