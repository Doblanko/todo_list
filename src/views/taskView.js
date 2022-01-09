const taskView = (() => {
    const initializeTaskView = () => {
        const mainContent = document.querySelector('.main-content-container')
        const taskContainer = document.createElement('div')
        taskContainer.classList.add('tasks-container')

        // --- Create the task container header --- //

        const taskContainerHeader = document.createElement('div')
        const title = document.createElement('h2')
        const addTaskBtn = document.createElement('button')

        // add classes to elements
        taskContainerHeader.classList.add('tasks-header-container')
        addTaskBtn.classList.add('add-task-btn')
        
        // set text content
        title.textContent = 'Tasks'
        addTaskBtn.textContent = 'Add Task'

        // combine elements
        taskContainerHeader.append(title)
        taskContainerHeader.append(addTaskBtn)
        taskContainer.append(taskContainerHeader)
        mainContent.append(taskContainer)

        // --- Create the task body container --- //
        
        const taskBodyContainer = document.createElement('div')
        taskBodyContainer.classList.add("task-body-container")
        
        taskContainer.append(taskBodyContainer)

        // --- Create Task Intro Form --- //

        const taskFormPage = document.createElement('div')
        const taskForm = document.createElement('form')

        taskFormPage.classList.add('task-form-page')
        taskFormPage.style.display = 'none'
        taskForm.name = 'TaskForm'

        const taskNameLabel = document.createElement('label')
        taskNameLabel.setAttribute('for', 'new-task-name')
        taskNameLabel.innerHTML = 'Task Name:'
        taskForm.append(taskNameLabel)

        const taskNameInput = document.createElement('input')
        taskNameInput.setAttribute('type', 'text')
        taskNameInput.setAttribute('name', 'new-task-name')
        taskNameInput.setAttribute('id', 'new-task-name')
        taskForm.append(taskNameInput)

        const descriptionLabel = document.createElement('label')
        descriptionLabel.innerHTML = 'Description: '
        descriptionLabel.setAttribute('for', 'new-description')
        taskForm.append(descriptionLabel)

        const descriptionInputArea = document.createElement('textarea')
        descriptionInputArea.setAttribute("rows", "10");
        descriptionInputArea.setAttribute("cols", "40");
        descriptionInputArea.setAttribute("name", "new-description")
        descriptionInputArea.setAttribute("id", "new-description")
        taskForm.append(descriptionInputArea);

        const dueDateLabel = document.createElement('label')
        dueDateLabel.innerHTML = 'Select Due Date:'
        dueDateLabel.setAttribute('for', 'new-due-date')
        taskForm.append(dueDateLabel)

        const dueDateInput = document.createElement('input')
        dueDateInput.setAttribute('type', 'date')
        dueDateInput.setAttribute('name', 'new-due-date')
        dueDateInput.setAttribute('id', 'new-due-date')
        dueDateInput.setAttribute('value', 'yyyy-dd-mm')
        taskForm.append(dueDateInput)

        const priorityLabel = document.createElement('label')
        priorityLabel.innerHTML = 'Select Priority:'
        priorityLabel.setAttribute('for', 'select-priority')
        taskForm.append(priorityLabel)

        const selectPriority = document.createElement('select')
        const low = document.createElement('option')
        const normal = document.createElement('option')
        const high = document.createElement('option')
        selectPriority.setAttribute('name', 'select-priority')
        selectPriority.setAttribute('id', 'select-priority')
        selectPriority.classList.add('select-priority')

        low.innerHTML = 'Low'
        normal.innerHTML = 'Normal'
        high.innerHTML = 'High'

        selectPriority.append(low)
        selectPriority.append(normal)
        selectPriority.append(high)
        taskForm.append(selectPriority)

        const notesLabel = document.createElement('label')
        notesLabel.innerHTML = 'Notes:'
        notesLabel.setAttribute('for', 'new-notes')
        taskForm.append(notesLabel)
        
        const notesInputArea = document.createElement('textarea')
        notesInputArea.setAttribute('rows', '10')
        notesInputArea.setAttribute('cols', '40')
        notesInputArea.setAttribute('name', 'new-notes')
        notesInputArea.setAttribute('id', 'new-notes')
        taskForm.append(notesInputArea)


        const buttonContainer = document.createElement('div')
        buttonContainer.classList.add('button-container')

        const submitBtn = document.createElement('button')
        submitBtn.setAttribute('type', 'button')
        submitBtn.setAttribute('id', 'task-submit-btn')
        submitBtn.classList.add('form-btn')
        submitBtn.innerHTML = 'Submit'

        const cancelBtn = document.createElement('button')
        cancelBtn.setAttribute('type', 'button')
        cancelBtn.setAttribute('id', 'task-cancel-btn')
        cancelBtn.classList.add('form-btn')
        cancelBtn.innerHTML = 'Cancel'

        buttonContainer.append(submitBtn)
        buttonContainer.append(cancelBtn)
        taskForm.append(buttonContainer)

        taskFormPage.append(taskForm)
        mainContent.append(taskFormPage)

    }

    const openForm = () => {
        // This function makes the task form visible
        const taskFormPage = document.querySelector('.task-form-page')
        taskFormPage.style.display = 'block'
    }

    const closeForm = () => {
        const taskFormPage = document.querySelector('.task-form-page')
        taskFormPage.style.display = 'none'
    }
    const render = () => {

    }

    return { initializeTaskView, openForm, closeForm }
})()

export { taskView }