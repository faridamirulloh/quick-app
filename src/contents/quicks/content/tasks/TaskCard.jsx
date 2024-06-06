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
import {IconCalendar, IconEdit, IconOption, IconSchedule} from '../../../../components/icons';
import TextArea from '../../../../components/textArea/TextArea';
import {dateFromNow, getDate} from '../../../../libs/dateHelper';

const editKey = {
  TITLE: 'title',
  DESCRIPTION: 'description',
};
function TaskCard({checked, title, date, description}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [expanded, setExpand] = useState([]);
  const [checkedState, setChecked] = useState(checked);
  const [dateState, setDate] = useState(date);
  const [titleState, setTitle] = useState(title);
  const [descriptionState, setDescription] = useState(description);
  const [edit, setEdit] = useState();

  const displayTitle =
    edit === editKey.TITLE ? (
      <TextField
        autoFocus
        size="small"
        value={titleState}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        onBlur={() => setEdit()}
      />
    ) : (
      <div
        role="button"
        onClick={() => setEdit(editKey.TITLE)}
        onKeyDown={null}
        tabIndex={-1}
        className={[style.title, checkedState ? style.checked : ''].join(' ')}
      >
        {titleState}
      </div>
    );

  const displayDescription =
    edit === editKey.DESCRIPTION ? (
      <TextArea
        autoFocus
        defaultValue={descriptionState}
        fullWidth
        onBlur={(e) => {
          setEdit();
          setDescription(e.target.value);
        }}
      />
    ) : (
      <div role="button" onClick={() => setEdit(editKey.DESCRIPTION)} onKeyDown={null} tabIndex={-1}>
        {descriptionState || 'No Description'}
      </div>
    );

  const handleExpand = (id) => {
    const idIndex = expanded.findIndex((_id) => _id === id);
    const newExpanded = [...expanded];

    if (idIndex >= 0) {
      newExpanded.splice(idIndex, 1);
    } else {
      newExpanded.push(id);
    }

    setExpand(newExpanded);
  };

  const handleCheck = (e, _checked) => setChecked(_checked);

  const handleClickOption = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl();
  };

  return (
    <div className={style.container}>
      <Accordion expanded={expanded.includes(1)}>
        <AccordionSummary>
          <div className={style.summary}>
            <div className={style.alignLeft}>
              <Checkbox checked={checkedState} onChange={handleCheck} />
              {displayTitle}
            </div>
            <div className={style.alignRight}>
              {!checkedState ? <span className={style.textRed}>{dateFromNow(date)}</span> : null}
              <span>{getDate(date)}</span>
              <IconButton onClick={() => handleExpand(1)}>
                {expanded.includes(1) ? <ExpandMoreIcon /> : <ExpandLessIcon />}
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
              <IconSchedule />
              <ReactDatePicker
                showIcon
                icon={<IconCalendar sx={{fontSize: 12, right: 0}} />}
                selected={dateState}
                onChange={(date) => setDate(date)}
              />
            </div>
            <div className={style.descriptionSection}>
              <IconEdit fontSize="small" />
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
        onClose={handleClose}
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
        <MenuItem onClick={handleClose} sx={{color: '#EB5757', width: 126}}>
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
}

TaskCard.propTypes = {
  checked: PropTypes.bool,
  title: PropTypes.string,
  date: PropTypes.object,
  description: PropTypes.string,
};

export default TaskCard;
