import axios from 'axios';

const config = {
  baseURL: 'http://localhost:3000/api/users',
};

const getMyLibrary = async (email: string) => await axios.get(`/${email}/library`, config);

export { getMyLibrary };
