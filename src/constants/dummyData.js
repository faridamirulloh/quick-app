import {ChatSenderType, MessageType} from './dataEnum';

export const messagesList = [
  {
    id: 1,
    title: '109220-Naturalization',
    date: new Date(2021, 1, 1, 19, 10, 25),
    type: MessageType.GROUP,
    participants: 3,
    lastMessage: {
      name: 'Cameron Phillips',
      firstLine: 'Please check this out!',
    },
    unread: true,
  },
  {
    id: 2,
    title: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
    date: new Date(2022, 2, 6, 10, 45, 25),
    type: MessageType.GROUP,
    participants: 3,
    lastMessage: {
      name: 'Ellen',
      firstLine: 'Hey, please read.',
    },
    unread: false,
  },
  {
    id: 3,
    title: '8405-Diana SALAZAR MUNGUIA',
    date: new Date(2021, 1, 6, 12, 19, 0),
    type: MessageType.GROUP,
    participants: 3,
    lastMessage: {
      name: 'Cameron Phillips',
      firstLine: `I understand your initial concerns, and that's very valid, Elizabeth. But you can rest assured that we have thoroughly addressed these issues and implemented solutions to ensure everything runs smoothly.`,
    },
    unread: false,
  },
  {
    id: 4,
    title: 'FastVisa Support',
    date: new Date(2021, 1, 6, 12, 19, 0),
    type: MessageType.SUPPORT,
    participants: 2,
    lastMessage: {
      name: '',
      firstLine: 'Hey there! Welcome to your inbox.',
    },
    unread: false,
  },
];

const getGroupMessageContentUnread = (message) => ({
  messageId: message.id,
  title: message.title,
  type: message.type,
  participants: message.participants,
  unread: message.unread,
  chatsGroupByRead: [
    {
      read: true,
      chatsGroupByDate: [
        {
          date: 'Yesterday June 10, 2021',
          chats: [
            {
              id: 'Mary Hilda',
              color: '#E5A443',
              backgroundColor: '#FCEED3',
              chatType: ChatSenderType.ELSE,
              message: 'Just Fill me in for his updates yea?',
              time: '19:32',
            },
            {
              id: 'You',
              color: '#9B51E0',
              backgroundColor: '#EEDCFF',
              chatType: ChatSenderType.SELF,
              message: 'No worries. It will be completed ASAP. I’ve asked him yesterday.',
              time: '19:32',
            },
          ],
        },
        {
          date: 'Today June 09, 2021',
          chats: [
            {
              id: 'Mary Hilda',
              color: '#E5A443',
              backgroundColor: '#FCEED3',
              chatType: ChatSenderType.ELSE,
              message:
                'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
              time: '07:32',
            },
            {
              id: 'You',
              color: '#9B51E0',
              backgroundColor: '#EEDCFF',
              chatType: ChatSenderType.SELF,
              message:
                'Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.',
              time: '07:33',
            },
            {
              id: 'Mary Hilda',
              color: '#E5A443',
              backgroundColor: '#FCEED3',
              chatType: ChatSenderType.ELSE,
              message: 'Sure thing, Claren',
              time: '07:34',
            },
          ],
        },
      ],
    },
    {
      read: false,
      chatsGroupByDate: [
        {
          date: null,
          chats: [
            {
              id: 'Obaidullah Amarkhil',
              color: '#43B78D',
              backgroundColor: '#D2F2EA',
              chatType: ChatSenderType.ELSE,
              message: 'Morning. I’ll try to do them. Thanks',
              time: '07:35',
            },
          ],
        },
      ],
    },
  ],
});

const getGroupMessageContent = (message) => ({
  messageId: message.id,
  title: message.title,
  type: message.type,
  participants: message.participants,
  unread: message.unread,
  chatsGroupByRead: [
    {
      read: true,
      chatsGroupByDate: [
        {
          date: 'Yesterday June 10, 2021',
          chats: [
            {
              id: 'Mary Hilda',
              color: '#E5A443',
              backgroundColor: '#FCEED3',
              chatType: ChatSenderType.ELSE,
              message: 'Just Fill me in for his updates yea?',
              time: '19:32',
            },
            {
              id: 'You',
              color: '#9B51E0',
              backgroundColor: '#EEDCFF',
              chatType: ChatSenderType.SELF,
              message: 'No worries. It will be completed ASAP. I’ve asked him yesterday.',
              time: '19:32',
            },
          ],
        },
        {
          date: 'Today June 09, 2021',
          chats: [
            {
              id: 'Mary Hilda',
              color: '#E5A443',
              backgroundColor: '#FCEED3',
              chatType: ChatSenderType.ELSE,
              message:
                'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
              time: '07:32',
            },
            {
              id: 'You',
              color: '#9B51E0',
              backgroundColor: '#EEDCFF',
              chatType: ChatSenderType.SELF,
              message:
                'Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.',
              time: '07:33',
            },
            {
              id: 'Mary Hilda',
              color: '#E5A443',
              backgroundColor: '#FCEED3',
              chatType: ChatSenderType.ELSE,
              message: 'Sure thing, Claren',
              time: '07:34',
            },
            {
              id: 'Obaidullah Amarkhil',
              color: '#43B78D',
              backgroundColor: '#D2F2EA',
              chatType: ChatSenderType.ELSE,
              message: 'Morning. I’ll try to do them. Thanks',
              time: '07:35',
            },
          ],
        },
      ],
    },
  ],
});

const getSupportMessageContent = (message) => ({
  messageId: message.id,
  title: message.title,
  type: message.type,
  participants: message.participants,
  unread: message.unread,
  waitingToConnect: true,
  chatsGroupByRead: [
    {
      read: true,
      chatsGroupByDate: [
        {
          date: 'Today June 09, 2021',
          chats: [
            {
              id: 'FastVisa Support',
              color: '#2F80ED',
              backgroundColor: '#F8F8F8',
              chatType: ChatSenderType.ELSE,
              message:
                'Hey there. Welcome to your inbox! Contact us for more information and help about anything! We’ll send you a response as soon as possible.',
              time: '19:32',
            },
            {
              id: 'You',
              color: '#9B51E0',
              backgroundColor: '#EEDCFF',
              chatType: ChatSenderType.SELF,
              message: 'Hi, I need help with something can you help me ?',
              time: '19:33',
            },
          ],
        },
      ],
    },
  ],
});

export const messageContent = messagesList.map((message) => {
  if (message.type === MessageType.GROUP) {
    if (message.unread) return getGroupMessageContentUnread(message);
    else return getGroupMessageContent(message);
  }

  return getSupportMessageContent(message);
});

export const tasksList = [
  {
    id: 1,
    title: 'Close off Case #012920- RODRIGUES, Amiguel',
    checked: false,
    date: new Date(2024, 5, 9),
    description:
      'Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!',
  },
  {
    id: 2,
    title: 'Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203',
    checked: false,
    date: new Date(2024, 5, 11),
    description:
      'All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.',
  },
  {
    id: 3,
    title: 'Set up appointment with Dr Blake',
    checked: false,
    date: new Date(2024, 5, 19),
    description: null,
  },
  {
    id: 4,
    title: 'Contact Mr Caleb - video conference?',
    checked: true,
    date: new Date(2024, 5, 3),
    description: null,
  },
  {
    id: 5,
    title: 'Assign 3 homework to Client A',
    checked: true,
    date: new Date(2024, 5, 2),
    description: null,
  },
];
