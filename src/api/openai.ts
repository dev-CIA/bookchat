import axios from 'axios';
import { URL } from '../constants';
import { z } from 'zod';
import { partialConditionForm } from '../schema';

interface Message {
  id: number;
  content: string;
  sender: string;
}

type FormData = z.infer<typeof partialConditionForm>;

const config = {
  baseURL: 'https://port-0-bookchat-server-eg4e2alkjmi6t7.sel4.cloudtype.app/api/ai',
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

const sendCondition = async (condition: FormData) => axios.post(`${URL.RECOMMEND}`, { ...condition }, config);

export { updateChat, sendCondition };
