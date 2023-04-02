import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Search } from "../Search/Search";
import "./style.scss";
import arrowRightWhiteIcon from "../../img/icons/arrow-right-white.svg";
import sultanWhiteIcon from "../../img/icons/sultan_white.svg";
import telegramIcon from "../../img/icons/telegram.png";
import priceIcon from "../../img/icons/price_icon.svg";
import watsapIcon from "../../img/icons/watsap.png";
import masterIcon from "../../img/icons/Master.png";
import visaIcon from "../../img/icons/Visa.png";

const Footer: FC = () => {
  const [valueSearch, setValueSearch] = useState("");

  const setSearch = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("Search");
  };
  return (
    <div className="footer ">
      <div className="footer__body conteiner">
        <div className="footer__mailink">
          <div className="footer__logo">
            <div className="footer__logo-priceList">
              <Link to="/catalog">
                <img src={sultanWhiteIcon} alt="" />
              </Link>
              <div className="footer__logo-priceList-btn">
                <Button size="b" img={priceIcon}>
                  Прайс лист
                </Button>
              </div>
            </div>
            <p>
              Компания «Султан» — снабжаем розничные магазины товарами "под
              ключ" в Кокчетаве и Акмолинской области
            </p>
          </div>
          <div className="footer__search">
            <p>Подпишись на скидки и акции</p>
            <Search
              img={arrowRightWhiteIcon}
              formSubmit={setSearch}
              value={valueSearch}
              setValue={setValueSearch}
              placeholder="Введите ваш E-mail"
            />
          </div>
        </div>
        <div className="footer__navList">
          <nav className="footer__nav">
            <h3>Меню сайта:</h3>
            <ul>
              <li>О компании</li>
              <li>Доставка и оплата</li>
              <li>Возврат</li>
              <li>Контакты</li>
            </ul>
          </nav>
          <nav className="footer__nav">
            <h3>Категории:</h3>
            <ul>
              <li>Бытовая химия</li>
              <li>Косметика и гигена</li>
              <li>Товары для дома</li>
              <li>Товары для детей и мам</li>
              <li>Посуда</li>
            </ul>
          </nav>
        </div>
        <div className="footer__priceList-contacts">
          <div className="footer__priceList">
            <div className="footer__priceList-btn">
              <h3>Скачать прайс-лист:</h3>
              <Button size="b" img={priceIcon}>
                Прайс лист
              </Button>
              <p>Связь в мессенджерах:</p>
            </div>
            <div className="footer__priceList-social">
              <img src={watsapIcon} alt="" />
              <img src={telegramIcon} alt="" />
            </div>
          </div>
          <div className="footer__contacts">
            <h3>Контакты:</h3>
            <div className="footer__contacts-call">
              <h3>+7 (777) 490 00 01</h3>
              <p>время работы 9:00 20:00</p>
              <a href="#*">Заказать звонок</a>
            </div>
            <div>
              <h3>opt.sultan@mail.ru</h3>
              <p>на связи в любое время</p>
            </div>
            <div className="footer__payCards">
              <img src={visaIcon} alt="" />
              <img src={masterIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
