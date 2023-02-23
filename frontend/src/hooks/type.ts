interface UsePaginationProps {
  contentPerPage: number;
  count: number;
}
interface UsePaginationReturn {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}
type UsePagination = (UsePaginationProps: any) => UsePaginationReturn;
