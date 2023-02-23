export type UsePaginationProps = {
  contentPerPage: number;
  count: number;
};

export type UsePaginationReturn = {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
};
export type UsePagination = (UsePaginationProps: any) => UsePaginationReturn;
