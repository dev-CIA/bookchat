import axios from 'axios';
import type { BookApiData } from '../types';

const config = {
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/users`,
};

const getMyLibrary = async (email: string) => {
  const { data } = await axios.get(`/${email}/library`, config);
  return data;
};

const addBook = async ({ email, newBook }: { email: string; newBook: BookApiData }) =>
  axios.post(`/${email}/library`, { email, newBook }, config);

export { getMyLibrary, addBook };
