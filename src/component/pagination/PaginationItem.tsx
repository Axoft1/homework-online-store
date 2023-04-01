import React, { FC } from "react";
import cn from "classnames";
import styles from "./PaginationItem.module.scss";
import { PaginationItemProps } from ".";

const PaginationItem: FC<PaginationItemProps> = ({
  currentPage,
  children,
  onClick,
  i,
}) => {
  return (
    <li
      onClick={onClick}
      className={cn(styles.paginationItem, {
        [styles.PaginationItemActive]: currentPage === i + 1,
      })}
    >
      {children}
    </li>
  );
};

export default PaginationItem;
