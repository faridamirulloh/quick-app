export const QuicksItem = {
  INBOX: 'Inbox',
  TASKS: 'Tasks',
};

export const InboxViewMode = {
  MESSAGES_LIST: 'MESSAGES_LIST',
  MESSAGE_CONTENT: 'MESSAGE_CONTENT',
};

export const MessageType = {
  DIRECT: 'Direct',
  GROUP: 'Group',
  SUPPORT: 'Support',
};

export const ChatSenderType = {
  SELF: 'Self',
  ELSE: 'Else',
};

export const ChatReadType = {
  READ: 'Read',
  UNREAD: 'Unread',
};

export const TaskType = {
  MY_TASKS: 'My Tasks',
  PERSONAL: 'Personal Errands',
  URGENT: 'Urgent To-Do',
};

export const TaskTypeList = Object.values(TaskType).map((label, id) => ({id, label}));

export const Stickers = [
  {
    id: 1,
    name: 'Important ASAP',
    color: '#E5F1FF',
  },
  {
    id: 2,
    name: 'Offline Meeting',
    color: '#FDCFA4',
  },
  {
    id: 3,
    name: 'Virtual Meeting',
    color: '#F9E9C3',
  },
  {
    id: 4,
    name: 'ASAP',
    color: '#AFEBDB',
  },
  {
    id: 5,
    name: 'Client Related',
    color: '#CBF1C2',
  },
  {
    id: 6,
    name: 'Self Task',
    color: '#CFCEF9',
  },
  {
    id: 7,
    name: 'Appointments',
    color: '#F9E0FD',
  },
  {
    id: 8,
    name: 'Court Related',
    color: '#9DD0ED',
  },
];
