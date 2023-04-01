import React, { FC } from "react";
import { Button } from "../Button/Button";
import "./style.scss";
import doubleCheckIcon from "../../img/icons/double-check.svg";
import closeOutlineIcon from "../../img/icons/close-outline.svg";

interface BasketEmptyProps {
  show?: boolean;
  setShow(arg: boolean): void;
}

const OrderNotification: FC<BasketEmptyProps> = ({ show, setShow }) => {
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
        <div onClick={() => setShow(false)}>
          <Button size="img" img={doubleCheckIcon}></Button>
        </div>
        <img src="double-check" alt="" />
        <h3 className="basketEmpty__title">Спасибо за заказ</h3>
        <p>Наш менеджер свяжется с вами в ближайшее время</p>
        <span className="basketEmpty__close" onClick={() => setShow(false)}>
          <img src={closeOutlineIcon} alt="" />
        </span>
      </div>
    </div>
  );
};

export default OrderNotification;
