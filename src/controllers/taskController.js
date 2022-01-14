import projectRepoModel from '../models/projectRepoModel';
import taskModel from '../models/taskModel';
import taskView from '../views/taskView';

const taskController = (() => {
  const renderTasks = (tasks) => {
    taskView.renderTasks(tasks);
  };

  const openNewTaskForm = () => {
    // check if there is an active project
    if (projectRepoModel.getActiveProject()) {
      taskView.openForm();
    } else {
      alert('Please select a project to add the task to.');
    }
  };

  const closeNewTaskForm = () => {
    taskView.closeForm();
  };

  const createTask = () => {
    // create a new task and add to the project task array when then submit button is clicked
    const activeProject = projectRepoModel.getActiveProject();

    const newTaskName = document.forms.TaskForm['new-task-name'].value;
    const newDescription = document.forms.TaskForm['new-description'].value;
    const newDueDate = document.forms.TaskForm['new-due-date'].value;
    const newPriority = document.forms.TaskForm['select-priority'].value;
    const newNotes = document.forms.TaskForm['new-notes'].value;
    const newId = activeProject.generateTaskId();

    const newTask = taskModel(
      newTaskName,
      newId,
      newDescription,
      newDueDate,
      newPriority,
      newNotes
    );
    activeProject.addTask(newTask);

    renderTasks(activeProject.getTasks());
    closeNewTaskForm();
  };

  const initTask = () => {
    taskView.initializeTaskView();

    // ----- Add event listeners ----- //
    const addTaskBtn = document.querySelector('.add-task-btn');
    addTaskBtn.addEventListener('click', openNewTaskForm);

    const submitBtn = document.querySelector('#task-submit-btn');
    submitBtn.addEventListener('click', createTask);

    const cancelBtn = document.querySelector('#task-cancel-btn');
    cancelBtn.addEventListener('click', closeNewTaskForm);
  };

  return {
    initTask,
    createTask,
  };
})();

export default taskController;
