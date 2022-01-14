import projectRepoModel from '../models/projectRepoModel';
import projectModel from '../models/projectModel';
import projectView from '../views/projectView';
import taskView from '../views/taskView';

// project controller module
const projectController = (() => {
  const selectProject = (event) => {
    // event listener for when projects are clicked

    // unselect any selected classes
    const lastSelectedProject = document.querySelector('.clicked');
    if (lastSelectedProject) {
      lastSelectedProject.classList.remove('clicked');
    }

    event.target.classList.add('clicked');

    // the id of list elements are project-id
    const activeProjectId = Number(event.target.id.substr(-1));
    projectRepoModel.setActiveProject(
      projectRepoModel.getProject(activeProjectId)
    );

    // render the tasks of the new project
    taskView.renderTasks(
      projectRepoModel.getProject(activeProjectId).getTasks()
    );
  };

  const openNewProjectForm = () => {
    projectView.openForm();
  };

  const closeNewProjectForm = () => {
    projectView.closeForm();
  };

  const createProject = (projectName) => {
    // create the project and add to the project repo
    const newProject = projectModel(projectName, projectRepoModel.generateId());
    projectRepoModel.addProject(newProject.getId(), newProject);

    // add the project to the view
    projectView.createProject(newProject.getName(), newProject.getId());

    // add the event listener for clicks
    const newProjectView = document.querySelector(
      `#project-${newProject.getId()}`
    );
    newProjectView.addEventListener('click', selectProject);

    // set as the active project by simulating a click event
    newProjectView.click();

    // reset the form page and close the form
    document.forms.ProjectForm.reset();
    closeNewProjectForm();
  };

  const initProject = () => {
    projectView.initializeProjectView();

    // ----- Add event listeners ----- //
    const addProjectBtn = document.querySelector('.add-project-btn');
    addProjectBtn.addEventListener('click', openNewProjectForm);

    const submitBtn = document.querySelector('#project-submit-btn');
    submitBtn.addEventListener('click', () => {
      createProject(document.forms.ProjectForm['new-project-name'].value);
    });

    const cancelBtn = document.querySelector('#project-cancel-btn');
    cancelBtn.addEventListener('click', closeNewProjectForm);
  };

  return {
    initProject,
    createProject,
  };
})();

export default projectController;
