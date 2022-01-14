import projectController from './controllers/projectController';
import taskController from './controllers/taskController';
import './style.css';

// app module
// sets up boilerplate code and runs the app

const App = (() => {
  const createWebsite = () => {
    // This function creates the header and container of the website. It is static
    const content = document.createElement('div');
    content.classList.add('content');

    const topBar = document.createElement('div');
    topBar.classList.add('top-bar');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'The Todo List App';

    topBar.append(title);
    content.append(topBar);

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content-container');
    content.append(mainContent);
    document.querySelector('body').append(content);
  };

  const initializeApp = () => {
    createWebsite();

    projectController.initProject();
    taskController.initTask();

    projectController.createProject('Sample Project');

    // create a fake task
    document.forms.TaskForm['new-task-name'].value = 'Sample Task';
    document.forms.TaskForm['new-description'].value =
      'This is a sample task description.';
    document.forms.TaskForm['new-due-date'].value = '2012-12-31';
    document.forms.TaskForm['select-priority'].value = 'High';
    document.forms.TaskForm['new-notes'].value = 'The world might end.';
    taskController.createTask();
    document.forms.TaskForm.reset();
  };
  return { initializeApp };
})();

App.initializeApp();
