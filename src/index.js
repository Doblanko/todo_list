import { projectController } from "./controllers/projectController"
import { taskController } from "./controllers/taskController"
import './style.css'

// app module
// sets up boilerplate code and runs the app

const App = (() => {
    projectController.initProject()
})()