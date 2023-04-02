import React, { FC } from "react";
import * as img from "../../img/imges";
import "./style.scss";
interface BasketEmptyProps {
  show?: boolean;
  setShow(arg: boolean): void;
}

const BasketEmpty: FC<BasketEmptyProps> = ({ show, setShow }) => {
  const exitBasket = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).classList.contains("basketEmpty")) {
      setShow(false);
    }
  };
  return (
    <div
      onClick={(e) => exitBasket(e)}
      style={{ display: show ? "flex" : "none" }}
      className="basketEmpty"
    >
      <div className="basketEmpty__block">
        <h3 className="basketEmpty__title">Корзина пустая</h3>
        <span className="basketEmpty__close" onClick={() => setShow(false)}>
          <img src={img.closeOutlineIcon} alt="" />
        </span>
      </div>
    </div>
  );
};

export default BasketEmpty;
