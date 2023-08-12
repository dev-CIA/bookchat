import axios from 'axios';

const getAladinSearchResults = async (Query: string, QueryType = 'Keyword', Start = '1') =>
  await axios.get(
    `${
      import.meta.env.VITE_BASE_URL
    }/api/aladin/search?Query=${Query}&QueryType=${QueryType}&Start=${Start}&Cover=Big&Output=JS&Version=20131101`
  );

export { getAladinSearchResults };
