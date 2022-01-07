const projectView = (() => {
    const body = document.getElementsByTagName('body')[0]
    const projectContainer = document.createElement('div')

    const createProjectContainerHeader = () => {
        // create the elements
        const projectContainerHeader = document.createElement('div')
        const title = document.createElement('h2')
        const addProjectBtn = document.createElement('button')

        // add classes to elements
        projectContainerHeader.classList.add('intro-project-container')
        addProjectBtn.classList.add('add-project-button')
        
        // set text content
        title.textContent = 'Projects'
        addProjectBtn.textContent = 'Add Project'

        // combine elements
        projectContainerHeader.append(title)
        projectContainerHeader.append(addProjectBtn)
        projectContainer.append(projectContainerHeader)
        body.append(projectContainer)
    }

    const render = () => {

    }

    return { createProjectContainerHeader }
})()

export { projectView }