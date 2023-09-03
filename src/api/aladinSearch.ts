import axios from 'axios';

const getAladinSearchResults = async (query: string, queryType = 'Keyword', startPage = 1) => {
  const { data } = await axios.get(
    `${
      import.meta.env.VITE_BASE_URL
    }/api/aladin/search?Query=${query}&QueryType=${queryType}&Start=${startPage}&Cover=Big&Output=JS&Version=20131101`
  );
  return data;
};

const getBookDetails = async (itemId: string) => {
  const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/aladin/detail/${itemId}`);
  return data;
};

export { getAladinSearchResults, getBookDetails };
