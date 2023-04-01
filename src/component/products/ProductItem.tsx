import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICatalog } from "../../models/ICatalog";
import { AContext, CustomContext } from "../../util/context";
import { Button } from "../Button/Button";
import "./style.scss";
import boxOpenIcon from "../../img/icons/box-open.svg";
import bottleIcon from "../../img/icons/bottle.svg";
import simpleBasketIcon from "../../img/icons/simple-basket.svg";

interface IProduct {
  product: ICatalog;
}

const ProductItem = (product: IProduct) => {
  const { name, url, brand, barcode, size_type, price, manufacturer } =
    product.product;

  const { addBasket, basket } = useContext<AContext>(CustomContext);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (basket?.find((item) => item.barcode === barcode)) {
      setButtonDisabled!(true);
    } else {
      setButtonDisabled!(false);
    }
  }, [basket]);

  return (
    <article className="product__cart">
      <div className="product__cart_img">
        <img src={url} alt="" />
      </div>
      <div className="product__cart_body">
        <p className="product__cart_body-type">
          {size_type.includes(" г") ? (
            <img src={boxOpenIcon} alt="" />
          ) : (
            <img src={bottleIcon} alt="" />
          )}
          {size_type}
        </p>
        <Link
          state={product.product}
          to={`/catalog/${barcode}`}
          className="product__cart_body-name"
        >
          <b>{brand} </b>{" "}
          {name.length >= 50 ? name.slice(0, 50) + " ..." : name}
        </Link>
        <p className="product__cart_body-text">
          Штрихкод: <b style={{ color: "#111111" }}>{barcode}</b>
        </p>
        <p>
          Производитель: <b style={{ color: "#111111" }}>{manufacturer}</b>
        </p>
        <p>
          Бренд: <b style={{ color: "#111111" }}>{brand}</b>
        </p>
        <div className="product__cart_btn">
          <p className="product__cart_btn-price">{price} &#8376;</p>
          <Button
            type="button"
            disabled={buttonDisabled}
            color={buttonDisabled ? "disabled" : "included"}
            onClick={() => addBasket!(product.product)}
            size="sm"
            img={simpleBasketIcon}
          >
            В КОРЗИНУ
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
