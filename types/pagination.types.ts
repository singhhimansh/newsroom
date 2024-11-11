// import { PaginationProps } from "./pagination.types";

// export interface PaginationProps<T> {
//   data: T[];
//   pageSize: number;
// }

export interface PaginationPropsType<T> {
  currentPage: number;
  totalPages: number;
  goToSpecificPage: (page: number) => void;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  pageSize: number;
  data: T[];
}

export interface PaginationCompPropsType<T> extends PaginationPropsType<T> {
  children?: React.ReactNode;
}

export interface UsePaginationReturnType<T> {
  paginatedData: T[];
  paginationProps: PaginationPropsType<T>;
}
