const projectView = (() => {
    
    const initializeProjectView = () => {
        const mainContent = document.querySelector('.main-content-container')
        const projectContainer = document.createElement('div')
        projectContainer.classList.add('projects-container')

        // --- Create the project container header --- //

        const projectContainerHeader = document.createElement('div')
        const title = document.createElement('h2')
        const addProjectBtn = document.createElement('button')

        // add classes to elements
        projectContainerHeader.classList.add('projects-header-container')
        addProjectBtn.classList.add('add-project-btn')
        
        // set text content
        title.textContent = 'Projects'
        addProjectBtn.textContent = 'Add Project'

        // combine elements
        projectContainerHeader.append(title)
        projectContainerHeader.append(addProjectBtn)
        projectContainer.append(projectContainerHeader)
        mainContent.append(projectContainer)

        // --- Create the project body container --- //
        
        const projectBodyContainer = document.createElement('div')
        projectBodyContainer.classList.add("project-body-container")
        
        projectContainer.append(projectBodyContainer)

        // --- Create Project Intro Form --- //

        const projectFormPage = document.createElement('div')
        const projectForm = document.createElement('form')

        projectFormPage.classList.add('project-form-page')
        projectFormPage.style.display = 'none'
        projectForm.name = 'ProjectForm'

        const projectNameLabel = document.createElement('label')
        projectNameLabel.setAttribute('for', 'new-project-name')
        projectNameLabel.innerHTML = 'Project Name:'
        projectForm.append(projectNameLabel)

        const projectNameInput = document.createElement('input')
        projectNameInput.setAttribute('type', 'text')
        projectNameInput.setAttribute('name', 'new-project-name')
        projectNameInput.setAttribute('id', 'new-project-name')
        projectForm.append(projectNameInput)

        const buttonContainer = document.createElement('div')
        buttonContainer.classList.add('button-container')

        const submitBtn = document.createElement('button')
        submitBtn.setAttribute('type', 'button')
        submitBtn.setAttribute('id', 'project-submit-btn')
        submitBtn.classList.add('form-btn')
        submitBtn.innerHTML = 'Submit'

        const cancelBtn = document.createElement('button')
        cancelBtn.setAttribute('type', 'button')
        cancelBtn.setAttribute('id', 'project-cancel-btn')
        cancelBtn.classList.add('form-btn')
        cancelBtn.innerHTML = 'Cancel'

        buttonContainer.append(submitBtn)
        buttonContainer.append(cancelBtn)
        projectForm.append(buttonContainer)

        projectFormPage.append(projectForm)
        mainContent.append(projectFormPage)

    }

    const openForm = () => {
        // This function makes the project form visible
        const projectFormPage = document.querySelector('.project-form-page')
        projectFormPage.style.display = 'block'
    }

    const closeForm = () => {
        const projectFormPage = document.querySelector('.project-form-page')
        projectFormPage.style.display = 'none'
    }

    const clearFormFields = () => {

    }

    const render = () => {

    }

    return { initializeProjectView, openForm, closeForm }
})()

export { projectView }