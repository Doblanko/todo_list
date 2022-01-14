const taskModel = (
  newName,
  newId,
  newDescription,
  newDueDate,
  newPriority,
  newNotes
) => {
  // represents a task object

  const name = newName;
  const id = newId;
  const description = newDescription;
  const dueDate = newDueDate;
  const priority = newPriority;
  const notes = newNotes;

  return {
    name,
    id,
    description,
    dueDate,
    priority,
    notes,
  };
};

export default taskModel;
