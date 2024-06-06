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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  const handleChangeFilterType = (e) => {
    selectType(e.target.value);
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
        <Button variant="contained" size="small">
          New Tasks
        </Button>
      </div>

      {isLoading ? (
        <LoadingContent text="Loading Task List ..." />
      ) : (
        <div className={style.taskList}>
          {tasksList.length > 0 ? (
            tasksList.map((task) => <TaskCard key={task.id} {...task} />)
          ) : (
            <div>No Task Yet</div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuickContentTasks;
