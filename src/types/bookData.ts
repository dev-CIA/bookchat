interface BookApiData {
  title: string;
  link?: string;
  author: string;
  pubDate?: string;
  description?: string;
  isbn?: string;
  isbn13?: string;
  itemId: number;
  priceSales?: number;
  priceStandard?: number;
  mallType?: string;
  stockStatus?: string;
  mileage?: number;
  cover?: string;
  categoryId?: number;
  categoryName?: string;
  publisher?: string;
  salesPoint?: number;
  adult?: boolean;
  fixedPrice?: boolean;
  customerReviewRank?: number;
  seriesInfo?: {
    seriesId?: number;
    seriesLink?: string;
    seriesName?: string;
  };
  subInfo?: {};
  rate?: number;
}

export type { BookApiData };
