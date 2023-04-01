import React, { FC } from "react";
import { PagitationProps } from ".";
import PaginationItem from "./PaginationItem";
import styles from "./PaginationItem.module.scss";
import leftIcon from "../../img/icons/left.svg";
import rigthIcon from "../../img/icons/rigth.svg";

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
          <img src={leftIcon} alt="" />
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
          <img src={rigthIcon} alt="" />
        </button>
      </ul>
    </>
  );
};

export default Pagination;
