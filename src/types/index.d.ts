export interface MovieLineItemsResults {
  original_name: string;
  original_title: string;
  poster_path: string;
}

export interface MovieLineItems {
  page: number;
  results: MovieLineItemsResults[];
  total_page: number;
  total_results: number;
}

export interface MovieLineProps {
  title: string;
  items: MovieLineItems;
}

export interface movieListProps extends MovieLineProps {
  slug: string
}