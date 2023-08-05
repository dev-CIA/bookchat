import axios from 'axios';

const config = {
  baseURL: 'https://www.mybookchat.com/api/users',
};

const getMyLibrary = async (email: string) => await axios.get(`/${email}/library`, config);

export { getMyLibrary };
