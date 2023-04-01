import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../component/Button/Button";
import { AContext, CustomContext } from "../../util/context";
import "./style.scss";
import bottleIcon from "../../img/icons/bottle.svg";
import boxOpenIcon from "../../img/icons/box-open.svg";
import ciShareIcon from "../../img/icons/ci_share.svg";
import simpleBasketIcon from "../../img/icons/simple-basket.svg";
import bxBxsDownloadIcon from "../../img/icons/bx_bxs-download.svg";
import cursorProductUpIcon from "../../img/icons/cursor-product-up.svg";
import cursorProductDownIcon from "../../img/icons/cursor-product-down.svg";

const Product = () => {
  const { catalog, removeBasket, appendedBasket, basket, addBasket } =
    useContext<AContext>(CustomContext);
  const { pathname, state } = useLocation();
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [showSpecifications, setShowSpecifications] = useState<boolean>(false);
  const [countProduct, setCountProduct] = useState<number>(1);

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const { url, brand, name, size_type, price, id, barcode } = state;
  useEffect(() => {
    let t = basket?.find((item) => item.barcode === barcode);
    if (t) {
      setCountProduct(t.count!);

      setButtonDisabled!(true);
    } else {
      setButtonDisabled!(false);
    }
  }, [basket]);

  const pathNameSplit = pathname
    .split("/")
    .filter((x) => x)
    .filter((x) => x !== "catalog");

  const product = catalog?.find((item) => item.barcode === pathNameSplit[0]);

  return (
    <article className="productItem conteiner">
      <div className="productItem__img">
        <img src={url} alt="" />
      </div>
      <div className="productItem__body">
        <p className="productItem__body__inStock">В наличии</p>
        <div className="productItem__body__name">
          <b> {brand} </b>
          {name}
        </div>

        <p className="productItem__body__type">
          {size_type.includes(" г") ? (
            <img src={boxOpenIcon} alt="" />
          ) : (
            <img src={bottleIcon} alt="" />
          )}
          {size_type}
        </p>
        <div className="productItem__body__basket">
          <p className="productItem__body__basket-price">{price} &#8376;</p>
          <div className="productItem__body__basket-btns">
            <button
              onClick={() => removeBasket!(id)}
              className="basketItem__btn"
            >
              -
            </button>
            <p className="basketItem__count">{countProduct}</p>
            <button
              onClick={() => appendedBasket!(id)}
              className="basketItem__btn"
            >
              +
            </button>
          </div>
          <Button
            type="button"
            disabled={buttonDisabled}
            color={buttonDisabled ? "disabled" : "included"}
            onClick={() => addBasket!(product!)}
            size="sm"
            img={simpleBasketIcon}
          >
            В КОРЗИНУ
          </Button>
        </div>
        <div className="productItem__body__priceList">
          <div className="productItem__body__priceList_links">
            <div className="productItem__body__priceList_link">
              <img src={ciShareIcon} alt="" />
            </div>
            <div className="productItem__body__priceList_link-btnMobile">
              <Button
                type="button"
                disabled={buttonDisabled}
                color={buttonDisabled ? "disabled" : "included"}
                onClick={() => addBasket!(product!)}
                size="sm"
                img={simpleBasketIcon}
              >
                В КОРЗИНУ
              </Button>
            </div>
          </div>
          <div className="productItem__body__priceList_info">
            При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и
            области
          </div>
          <div className="productItem__body__priceList_download">
            <p>Прайс-лист</p>
            <img src={bxBxsDownloadIcon} alt="" />
          </div>
        </div>
        <div className="productItem__body__basic">
          <p>
            Производитель: <b>{product?.brand}</b> {product?.brand}
          </p>
          <p>
            Бренд: <b> {product?.brand}</b>
          </p>
          <p>
            Штрихкод: <b>{product?.barcode}</b>{" "}
          </p>
        </div>

        <div className="productItem__body__description">
          <div className="productItem__body__description-header">
            <p
              className="productItem__body__description-btn"
              onClick={() => {
                setShowDescription(!showDescription);
              }}
            >
              Описание
            </p>
            <img
              src={
                showDescription ? cursorProductUpIcon : cursorProductDownIcon
              }
              alt=""
            />
          </div>
          {showDescription ? (
            <p className="productItem__body__description-text">
              {product?.description}
            </p>
          ) : (
            ""
          )}
        </div>
        <span className="productItem__body__span" />
        <div className="productItem__body__specifications">
          <div className="productItem__body__specifications-header">
            <p
              className="productItem__body__specifications-btn"
              onClick={() => {
                setShowSpecifications(!showSpecifications);
              }}
            >
              Характеристики
            </p>
            <img
              src={
                showSpecifications ? cursorProductUpIcon : cursorProductDownIcon
              }
              alt=""
            />
          </div>
          {showSpecifications ? (
            <div className="productItem__body__specifications-text">
              <p>
                Назначение: <b>{product?.brand}</b>{" "}
              </p>
              <p>
                Тип: <b>{product?.brand}</b>{" "}
              </p>
              <p>
                Производитель: <b>{product?.manufacturer}</b>{" "}
              </p>
              <p>
                Бренд: <b>{product?.brand}</b>
              </p>
              <p>
                Артикул: <b>{product?.brand}</b>
              </p>
              <p>
                Штрихкод: <b>{product?.brand}</b>
              </p>
              <p>
                Вес: <b>{product?.size}</b>
              </p>
              <p>
                Обьем: <b>{product?.size}</b>
              </p>
              <p>
                Кол-во в коробке: <b>{product?.size}</b>
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </article>
  );
};

export default Product;
