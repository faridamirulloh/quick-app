import {createTaskAPI, deleteTaskAPI, getTasksListAPI, updateTaskAPI} from '../../api/tasksAPI';
import {tasksList} from '../../constants/dummyData';

export const getTaskList = async () => {
  try {
    const response = await getTasksListAPI();

    if (response) return tasksList;
  } catch (error) {
    console.error(error.response);
  }

  return [];
};

export const createTask = async (task) => {
  try {
    const response = await createTaskAPI(task);

    console.log(response);
  } catch (error) {
    console.error(error.response);
  }
};

export const updateTask = async (task) => {
  try {
    const response = await updateTaskAPI(task);

    console.log(response);
  } catch (error) {
    console.error(error.response);
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await deleteTaskAPI(id);

    console.log(response);
  } catch (error) {
    console.error(error.response);
  }
};
