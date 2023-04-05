import React, { FC, useContext } from "react";
import { ICatalog } from "../../models/ICatalog";
import { AContext, CustomContext } from "../../util/context";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import * as img from "../../img/imges";
import "./style.scss";

interface BasketItemProps {
  props: ICatalog;
}

const BasketItem: FC<BasketItemProps> = (props) => {
  const {
    id,
    name,
    url,
    size_type,
    price,
    description,
    count,
    barcode,
    brand,
  } = props.props;

  const { removeBasket, appendedBasket, deletBasket } =
    useContext<AContext>(CustomContext);
  return (
    <>
      <article className="basketItem" data-testid="basket-page">
        <div className="basketItem__img">
          <img src={url} alt="" />
        </div>
        <div className="basketItem__body ">
          <p className="basketItem__body-type ">
            {size_type.includes(" г") ? (
              <img src={img.boxOpenIcon} alt="" />
            ) : (
              <img src={img.bottleIcon} alt="" />
            )}
            {size_type}
          </p>

          <Link
            state={props.props}
            to={`/catalog/${barcode}`}
            className="product__cart_body-name"
          >
            <b>{brand} </b>{" "}
            {name.length >= 50 ? name.slice(0, 50) + " ..." : name}
          </Link>

          {/* <p className="basketItem__body-name">{name.slice(0, 35)} ...</p> */}

          <p className="basketItem__body-description">
            {description.slice(0, 150)} ...
          </p>
        </div>
        <span className="basketItem__span-centr" />
        <div className="basketItem__price-btn-delet">
          <div className="basketItem__btns">
            <button
              onClick={() => removeBasket!(id)}
              className="basketItem__btn"
            >
              -
            </button>
            <p className="basketItem__count">{count}</p>
            <button
              onClick={() => appendedBasket!(id)}
              className="basketItem__btn"
            >
              +
            </button>
          </div>

          <span className="basketItem__span-InBtn" />

          <div className="basketItem__price">
            <p>{price}</p>
            <p> &#8376;</p>
          </div>

          <span className="basketItem__span-InBtn" />

          <div className="basketItem__btn-delet">
            <Button
              onClick={() => deletBasket!(id)}
              size={"img"}
              img={img.deleteIcon}
            ></Button>
          </div>
        </div>
      </article>
      <span className="basketItem__span" />
    </>
  );
};

export default BasketItem;
