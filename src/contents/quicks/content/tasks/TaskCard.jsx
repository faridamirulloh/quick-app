import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import ReactDatePicker from 'react-datepicker';

import style from './TaskCard.module.scss';
import {
  IconCalendar,
  IconEdit,
  IconEditBlack,
  IconOption,
  IconSchedule,
  IconScheduleBlack,
} from '../../../../components/icons';
import TextArea from '../../../../components/textArea/TextArea';
import {dateFromNow, getDate} from '../../../../libs/dateHelper';

const editKey = {
  TITLE: 'title',
  DESCRIPTION: 'description',
};

function TaskCard({id, checked, title, date, description, onChange, onDelete}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [expanded, setExpand] = useState(!title);
  const [edit, setEdit] = useState();

  const isNew = !title;

  const displayTitle =
    edit === editKey.TITLE || isNew ? (
      <TextField
        autoFocus
        size="small"
        placeholder="Type Task Title"
        defaultValue={title}
        fullWidth
        onBlur={(e) => {
          setEdit();
          onChange({id, key: 'title', value: e.target.value});
        }}
      />
    ) : (
      <div
        role="button"
        onClick={() => setEdit(editKey.TITLE)}
        onKeyDown={null}
        tabIndex={-1}
        className={[style.title, checked ? style.checked : ''].join(' ')}
      >
        {title}
      </div>
    );

  const displayDescription =
    edit === editKey.DESCRIPTION ? (
      <TextArea
        autoFocus
        defaultValue={description}
        fullWidth
        onBlur={(e) => {
          setEdit();
          onChange({id, key: 'description', value: e.target.value});
        }}
      />
    ) : (
      <div role="button" onClick={() => setEdit(editKey.DESCRIPTION)} onKeyDown={null} tabIndex={-1}>
        {description || 'No Description'}
      </div>
    );

  const handleExpand = () => {
    setExpand(!expanded);
  };

  const handleCheck = (e, _checked) => {
    onChange({id, key: 'checked', vallue: _checked});
  };

  const handleChangeDate = (_date) => {
    onChange({id, key: 'date', value: _date});
  };

  const handleClickOption = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClickDelete = () => {
    setAnchorEl();
    onDelete(id);
  };

  return (
    <div className={style.container}>
      <Accordion expanded={expanded}>
        <AccordionSummary>
          <div className={style.summary}>
            <div className={style.alignLeft}>
              <Checkbox checked={checked} onChange={handleCheck} />
              {displayTitle}
            </div>
            <div className={style.alignRight}>
              {date && (
                <>
                  {!checked ? <span className={style.textRed}>{dateFromNow(date)}</span> : null}
                  <span>{getDate(date)}</span>
                </>
              )}
              <IconButton onClick={() => handleExpand(1)}>
                {expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </IconButton>
              <IconButton onClick={handleClickOption}>
                <IconOption />
              </IconButton>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={style.description}>
            <div className={style.descriptionSection}>
              {isNew ? <IconScheduleBlack /> : <IconSchedule />}
              <ReactDatePicker
                showIcon
                placeholderText="Set Date"
                icon={<IconCalendar sx={{fontSize: 12, right: 0}} />}
                selected={date}
                onChange={handleChangeDate}
              />
            </div>
            <div className={style.descriptionSection}>
              {isNew ? <IconEditBlack fontSize="small" /> : <IconEdit fontSize="small" />}
              {displayDescription}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <div className={style.separator} />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl()}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClickDelete} sx={{color: '#EB5757', width: 126}}>
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
}

TaskCard.propTypes = {
  id: PropTypes.number,
  checked: PropTypes.bool,
  title: PropTypes.string,
  date: PropTypes.object,
  description: PropTypes.string,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TaskCard;
