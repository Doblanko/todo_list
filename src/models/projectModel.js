const projectModel = (newName, newID) => {
  // Represents a project. Contains the name of the project and tasks.

  const name = newName;
  const id = newID;
  const tasks = [];
  let taskId = 0;

  const getName = () => name;

  const getId = () => id;

  const addTask = (task) => {
    // task is [id, task]
    tasks.push(task);
  };

  const generateTaskId = () => {
    // return the ID for the task being created and get ready for the next one
    taskId += 1;
    return taskId - 1;
  };

  const getTasks = () => tasks;

  return {
    getName, getId, addTask, getTasks, generateTaskId,
  };
};

export default projectModel;
