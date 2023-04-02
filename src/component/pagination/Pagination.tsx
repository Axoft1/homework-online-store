import React, { FC } from "react";
import styles from "./PaginationItem.module.scss";
import PaginationItem from "./PaginationItem";
import * as img from "../../img/imges";
import { PagitationProps } from ".";

const Pagination: FC<PagitationProps> = ({
  productPerPage,
  totalProduct,
  pagination,
  nextPage,
  prevPage,
  currentPage,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <ul className={styles.pagination}>
        <button className={styles.pagination__btn} onClick={() => prevPage()}>
          <img src={img.leftIcon} alt="" />
        </button>
        {pageNumber.map((number, i) => (
          <PaginationItem
            currentPage={currentPage}
            key={number}
            onClick={(): void => pagination(number)}
            i={i}
          >
            {number}
          </PaginationItem>
        ))}
        <button className={styles.pagination__btn} onClick={() => nextPage()}>
          <img src={img.rigthIcon} alt="" />
        </button>
      </ul>
    </>
  );
};

export default Pagination;
