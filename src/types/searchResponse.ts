import { AxiosResponse } from 'axios';
import { BookApiData } from './bookData';

interface SearchResponse extends AxiosResponse {
  data: {
    version: string;
    logo: string;
    title: string;
    link: string;
    pubDate: string;
    totalResults: number;
    startIndex: number;
    itemsPerPage: number;
    query: string;
    searchCategoryId: number;
    searchCategoryName: string;
    item: BookApiData[];
  };
}

export type { SearchResponse };
