import axios from 'axios';

const config = {
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/users`,
};

const getMyLibrary = async (email: string) => await axios.get(`/${email}/library`, config);

export { getMyLibrary };
