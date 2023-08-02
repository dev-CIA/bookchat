import axios from 'axios';
import { URL } from '../constants';

interface Message {
  id: number;
  content: string;
  sender: string;
}

const config = {
  baseURL: 'http://localhost:3000/api/ai',
};

const updateChat = async (message: Message) =>
  axios.post(
    `${URL.CHAT}`,
    {
      id: message.id,
      content: message.content.replace(/\n/g, ' '),
      sender: message.sender,
    },
    config
  );

export { updateChat };
