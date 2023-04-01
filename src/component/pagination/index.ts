export interface PagitationProps {
  productPerPage: number;
  totalProduct: number;
  currentPage: number;
  pagination(number: number): void;
  nextPage(): void;
  prevPage(): void;
}

export interface PaginationItemProps {
  currentPage: number;
  children: number;
  onClick: () => void;
  i: number;
}