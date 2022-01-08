const projectView = (() => {
    const body = document.getElementsByTagName('body')[0]
    const projectContainer = document.createElement('div')

    const initializeProjectView = () => {

        // --- Create the project container header --- //

        const projectContainerHeader = document.createElement('div')
        const title = document.createElement('h2')
        const addProjectBtn = document.createElement('button')

        // add classes to elements
        projectContainerHeader.classList.add('project-header-container')
        addProjectBtn.classList.add('add-project-button')
        
        // set text content
        title.textContent = 'Projects'
        addProjectBtn.textContent = 'Add Project'

        // combine elements
        projectContainerHeader.append(title)
        projectContainerHeader.append(addProjectBtn)
        projectContainer.append(projectContainerHeader)
        body.append(projectContainer)

        // --- Create the project body container --- //
        
        const projectBodyContainer = document.createElement('div')
        projectBodyContainer.classList.add("project-body-containter")
        
        projectContainer.append(projectBodyContainer)

        // --- Create Project Intro Form --- //

        const projectFormPage = document.createElement('div')
        const projectForm = document.createElement('form')

        projectFormPage.classList.add('project-form-page')
        projectFormPage.style.display = 'none'
        projectForm.name = 'ProjectForm'

        const projectNameLabel = document.createElement('label')
        projectNameLabel.setAttribute('for', 'name')
        projectNameLabel.innerHTML = 'Project Name: '
        projectForm.append(projectNameLabel)

        const projectNameInput = document.createElement('input')
        projectNameInput.setAttribute('type', 'text')
        projectNameInput.setAttribute('name', 'name')
        projectNameInput.setAttribute('id', 'name')

        const buttonContainer = document.createElement('div')
        buttonContainer.classList.add('button-container')

        const submitBtn = document.createElement('button')
        submitBtn.setAttribute('type', 'button')
        submitBtn.classList.add('project-submit-btn')
        submitBtn.innerHTML = 'Submit'

        const cancelBtn = document.createElement('button')
        cancelBtn.setAttribute('type', 'button')
        cancelBtn.classList.add('project-cancel-btn')
        cancelBtn.innerHTML = 'Cancel'

        buttonContainer.append(submitBtn)
        buttonContainer.append(cancelBtn)
        projectForm.append(buttonContainer)

        projectFormPage.append(projectForm)
        body.append(projectFormPage)

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