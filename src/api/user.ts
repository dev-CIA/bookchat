import axios from 'axios';

const config = {
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/users`,
};

const getMyLibrary = async (email: string) => {
  const { data } = await axios.get(`/${email}/library`, config);
  return data;
};

export { getMyLibrary };
