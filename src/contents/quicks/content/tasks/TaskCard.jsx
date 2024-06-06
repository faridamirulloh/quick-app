import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Chip,
  IconButton,
  ListItem,
  Menu,
  MenuItem,
  Paper,
  TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import ReactDatePicker from 'react-datepicker';

import style from './TaskCard.module.scss';
import {
  IconBookmark,
  IconBookmarkBlack,
  IconCalendar,
  IconEdit,
  IconEditBlack,
  IconOption,
  IconSchedule,
  IconScheduleBlack,
} from '../../../../components/icons';
import TextArea from '../../../../components/textArea/TextArea';
import {Stickers} from '../../../../constants/dataEnum';
import {dateFromNow, getDate} from '../../../../libs/dateHelper';

const editKey = {
  TITLE: 'title',
  DESCRIPTION: 'description',
};

function TaskCard({id, checked, title, date, stickers = [], description, onChange, onDelete}) {
  const [optionAnchorEl, setOptionAnchorEl] = useState(null);
  const [stickerAnchorEl, setStickerAnchorEl] = useState(null);
  const [expanded, setExpand] = useState(!title);
  const [edit, setEdit] = useState();

  const isNew = !title && expanded;

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
        placeHolder="Type Description"
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
    onChange({id, key: 'checked', value: _checked});
  };

  const handleChangeDate = (_date) => {
    onChange({id, key: 'date', value: _date});
  };

  const handleClickOption = (e) => {
    setOptionAnchorEl(e.currentTarget);
  };

  const handleClickDelete = () => {
    setOptionAnchorEl();
    onDelete(id);
  };

  const handleClickSticker = (stickerId) => {
    const newStickers = [...stickers];
    const index = newStickers.findIndex((_id) => _id === stickerId);

    if (index >= 0) {
      newStickers.splice(index, 1);
    } else {
      newStickers.push(stickerId);
    }

    onChange({id, key: 'stickers', value: newStickers});
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
            <div className={style.descriptionSection}>
              {isNew ? <IconBookmarkBlack /> : <IconBookmark />}

              <Paper
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  listStyle: 'none',
                  p: 0.5,
                  m: 0,
                  width: '100%',
                }}
                component="ul"
                onClick={(e) => setStickerAnchorEl(e.currentTarget)}
              >
                {stickers.map((_id) => {
                  const {id, name, color} = Stickers.find(({id}) => _id === id);

                  return (
                    <ListItem key={id} sx={{width: 'unset', padding: '2px 4px'}}>
                      <Chip label={name} sx={{borderRadius: '6px', backgroundColor: color}} />
                    </ListItem>
                  );
                })}
              </Paper>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <div className={style.separator} />

      <Menu
        id="sticker-menu"
        anchorEl={stickerAnchorEl}
        open={Boolean(stickerAnchorEl)}
        onClose={() => setStickerAnchorEl()}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {Stickers.map(({id, name, color}) => (
          <MenuItem onClick={() => handleClickSticker(id)} key={id}>
            <Chip
              label={name}
              sx={{
                width: 200,
                borderRadius: '6px',
                backgroundColor: color,
                border: stickers.includes(id) ? '1px solid grey' : '',
              }}
            />
          </MenuItem>
        ))}
      </Menu>

      <Menu
        id="option-menu"
        anchorEl={optionAnchorEl}
        open={Boolean(optionAnchorEl)}
        onClose={() => setOptionAnchorEl()}
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
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  checked: PropTypes.bool,
  title: PropTypes.string,
  date: PropTypes.object,
  description: PropTypes.string,
  stickers: PropTypes.array,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TaskCard;
