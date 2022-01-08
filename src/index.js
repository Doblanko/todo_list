import { projectController } from "./controllers/projectController"
import { taskController } from "./controllers/taskController"
import './style.css'

// app module
// sets up boilerplate code and runs the app

const App = (() => {
    const _createWebsite = () => {
        // This function creates the header and container of the website. It is static
        const content = document.createElement('div')
        content.classList.add('content')
        
        const topBar = document.createElement('div')
        topBar.classList.add('top-bar')

        const title = document.createElement('h1')
        title.classList.add('title')
        title.textContent = 'The Todo List App'

        topBar.append(title)
        content.append(topBar)

        console.log(document.querySelector('body'))
        document.querySelector('body').append(content)
    }

    const initializeApp = () => {
        _createWebsite()
        projectController.initProject()
    }
    return { initializeApp }
})()

App.initializeApp()
    