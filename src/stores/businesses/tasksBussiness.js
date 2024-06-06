import {createTaskAPI, deleteTaskAPI, getTasksListAPI, updateTaskAPI} from '../../api/tasksAPI';
import {tasksList} from '../../constants/dummyData';

export const getTaskList = async () => {
  let tasksListResponse = [];

  try {
    const response = await getTasksListAPI();

    if (response) {
      tasksListResponse = tasksList;
    }
  } catch (error) {
    console.error(error.response);
  }

  return tasksListResponse;
};

export const createTask = async (task) => {
  try {
    const response = await createTaskAPI(task);

    if (response) {
      return;
    }
  } catch (error) {
    console.error(error.response);
  }

  return;
};

export const updateTask = async (task) => {
  try {
    const response = await updateTaskAPI(task);

    if (response) {
      return;
    }
  } catch (error) {
    console.error(error.response);
  }

  return;
};

export const deleteTask = async (id) => {
  try {
    const response = await deleteTaskAPI(id);

    if (response) {
      return;
    }
  } catch (error) {
    console.error(error.response);
  }

  return;
};
