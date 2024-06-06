import {Button, MenuItem, Select} from '@mui/material';
import React, {useEffect, useState} from 'react';

import style from './QuickContentTasks.module.scss';
import TaskCard from './TaskCard';
import LoadingContent from '../../../../components/loading/LoadingContent';
import {TaskTypeList} from '../../../../constants/dataEnum';
import {tasksList} from '../../../../constants/dummyData';

function QuickContentTasks() {
  const [selectedType, selectType] = useState(TaskTypeList[0].id);
  const [isLoading, setLoading] = useState(true);
  const [tasksListState, setTasksList] = useState(tasksList);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  const handleChangeFilterType = (e) => {
    selectType(e.target.value);
  };

  const handleClickNewTasks = () => {
    const newList = [...tasksListState];

    newList.push({
      id: Math.random(),
      title: null,
      checked: false,
      date: null,
      description: null,
    });

    setTasksList(newList);
  };

  const handleChange = ({id, key, value}) => {
    const newList = [...tasksListState];
    const index = newList.findIndex(({id: _id}) => _id === id);
    newList[index][key] = value;

    setTasksList(newList);
  };

  const handleDelete = (id) => {
    const newList = [...tasksListState];
    const index = newList.findIndex(({id: _id}) => _id === id);
    newList.splice(index, 1);

    setTasksList(newList);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Select
          className={style.taskTypeDropdown}
          value={selectedType}
          size="small"
          displayEmpty
          onChange={handleChangeFilterType}
        >
          {TaskTypeList.map((type) => (
            <MenuItem key={type.id} value={type.id}>
              {type.label}
            </MenuItem>
          ))}
        </Select>
        <Button variant="contained" size="small" onClick={handleClickNewTasks}>
          New Tasks
        </Button>
      </div>

      {isLoading ? (
        <LoadingContent text="Loading Task List ..." />
      ) : (
        <div className={style.taskList}>
          {tasksListState.length > 0 ? (
            tasksListState.map((task) => (
              <TaskCard key={task.id} {...task} onChange={handleChange} onDelete={handleDelete} />
            ))
          ) : (
            <div>No Task Yet</div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuickContentTasks;
