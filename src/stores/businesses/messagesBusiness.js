import {deleteChatAPI, getChatsListAPI, getMessagesListAPI, sendChatAPI, editChatAPI} from '../../api/messagesAPI';
import {ChatSenderType} from '../../constants/dataEnum';
import {MyID, messageContent, messagesList} from '../../constants/dummyData';
import {getHour} from '../../libs/dateHelper';

export const getMessagesList = async () => {
  let messagesListResponse = [];

  try {
    const response = await getMessagesListAPI();

    if (response) {
      messagesListResponse = messagesList;
    }
  } catch (error) {
    console.error({error});
  }

  return messagesListResponse;
};

export const getMessageContent = async (messageId) => {
  let messagesContentResponse = [];

  try {
    const response = await getChatsListAPI(messageId);

    if (response) {
      messagesContentResponse = messageContent.find(({messageId: id}) => id === messageId);
    }
  } catch (error) {
    console.error({error});
  }

  return messagesContentResponse;
};

export const sendChat = async (data) => {
  try {
    const response = await sendChatAPI(data);

    if (response) {
      const newMessage = {
        id: MyID,
        color: '#9B51E0',
        backgroundColor: '#EEDCFF',
        chatType: ChatSenderType.SELF,
        message: data.message,
        time: getHour(new Date()),
      };

      return newMessage;
    }
  } catch (error) {
    console.error({error});
  }

  return;
};

export const editChat = async (data) => {
  try {
    const response = await editChatAPI(data);

    if (response) {
      return;
    }
  } catch (error) {
    console.error({error});
  }

  return;
};

export const deleteChat = async (id) => {
  try {
    const response = await deleteChatAPI(id);

    if (response) {
      return;
    }
  } catch (error) {
    console.error({error});
  }

  return;
};
