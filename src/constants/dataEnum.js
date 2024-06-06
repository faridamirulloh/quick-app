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
