import axios from 'axios';

const config = {
  baseURL: 'https://port-0-bookchat-server-eg4e2alkjmi6t7.sel4.cloudtype.app/api/users',
};

const getMyLibrary = async (email: string) => await axios.get(`/${email}/library`, config);

export { getMyLibrary };
