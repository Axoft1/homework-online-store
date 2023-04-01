import React, { FC, useContext, useState } from "react";
import OrderNotification from "../../component/BasketEmpty copy/OrderNotification";
import BasketItem from "../../component/BasketItem/BasketItem";
import { Button } from "../../component/Button/Button";
import { ICatalog } from "../../models/ICatalog";
import { AContext, CustomContext } from "../../util/context";
import "./style.scss";

const Basket: FC = () => {
  const { basket, setBasket, sumProducts } =
    useContext<AContext>(CustomContext);
  const [show, setShow] = useState<boolean>(false);

  const del = () => {
    setShow(true);
    setBasket!([]);
  };

  return (
    <div className="conteiner">
      <h2>КОРЗИНА</h2>
      <div className="basketList">
        <span className="basketItem__span" />
        {basket!.length
          ? basket!.map((item: ICatalog) => (
              <BasketItem props={item} key={item.id} />
            ))
          : "нет товаров"}
        {basket!.length ? (
          <div className="basketList__order">
            <Button onClick={() => del()} size="b">
              Оформить заказ
            </Button>
            <div className="basketList__price">{sumProducts} &#8376;</div>
          </div>
        ) : (
          ""
        )}
      </div>
      <OrderNotification show={show} setShow={setShow} />
    </div>
  );
};

export default Basket;
