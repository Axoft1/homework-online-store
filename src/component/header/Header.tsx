import React, { FC, useContext, useEffect, useState } from "react";
import SimpleBreadcrumbs from "../../router/BreadCrumbs/BreadCrumbs";
import { AContext, CustomContext } from "../../util/context";
import { Link, useNavigate } from "react-router-dom";
import BasketEmpty from "../BasketEmpty/BasketEmpty";
import AdminPanel from "../AdminPanel/AdminPanel";
import { Button } from "../Button/Button";
import { Search } from "../Search/Search";
import HeaderMobile from "./HeaderMobile";
import "./style.scss";
import iconSearchMobile from "../../img/icons/icon_search-mobile.svg";
import menuAlt from "../../img/icons/dashicons_menu-alt.svg";
import catalogIcon2 from "../../img/icons/catalog_icon2.svg";
import catalogIcon from "../../img/icons/catalog_icon.svg";
import menuX from "../../img/icons/dashicons_menu-x.svg";
import cursorLeft from "../../img/icons/cursor-left.svg";
import operatorIcon from "../../img/icons/operator.png";
import priceIcon from "../../img/icons/price_icon.svg";
import basketIcon from "../../img/icons/basket.svg";
import sultan from "../../img/icons/sultan.png";
import mail from "../../img/icons/mail.svg";
import pin from "../../img/icons/pin.svg";

const Header: FC = () => {
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState<string>("");
  const [showBasket, setShowBasket] = useState<boolean>(false);
  const [showAdminPanel, setShowAdminPanel] = useState<boolean>(false);
  const { basket, sumProducts } = useContext<AContext>(CustomContext);

  const [burgerButton, setBurgerButton] = useState<boolean>(false);
  const [buttonMobileFilter, setButtonMobileFilter] = useState<boolean>(false);

  const [hide, setHide] = useState<boolean>(false);

  let lastScrol = 0;
  const defaultOffset = 100;

  const handleScroll = () => {
    if (window.scrollY > lastScrol && !hide && window.scrollY > defaultOffset) {
      setHide(true);
    } else if (window.scrollY < lastScrol) {
      setHide(false);
    }
    lastScrol = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setSearchManufacturer = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("Search");
  };

  return (
    <div className={hide ? "header__body hide" : "header__body"}>
      <div className="header conteiner">
        <div
          className="header__burger"
          onClick={() => setBurgerButton(!burgerButton)}
        >
          <Button size="img" img={burgerButton ? menuX : menuAlt} />
        </div>
        <div className="header__contacts">
          <div className="header__contacts_item">
            <img src={pin} alt="pin" />
            <a href="#*">
              <h3>г.Кокчетав, ул.Ж. Ташенова 129Б</h3>
              <p>(Рынок восточный)</p>
            </a>
          </div>
          <div className="header__contacts_item">
            <img src={mail} alt="mail" />
            <a href="#*">
              <h3>opt.sultan@mail.ru </h3>
              <p>На связи в любое время</p>
            </a>
          </div>
        </div>
        <nav className="header__nav">
          <ul className="header__nav_ul">
            <li onClick={() => setShowAdminPanel(true)}>
              <a href="#*">Админ панель</a>
            </li>
            <li>
              <a href="#*">О компании</a>
            </li>
            <li>
              <a href="#*">Доставка и оплата</a>
            </li>
            <li>
              <a href="#*">Возврат</a>
            </li>
            <li>
              <a href="#*">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className="header__logo-mobile">
          <Link to="/catalog">
            <img src={sultan} alt="" />
          </Link>
        </div>
        <div className="header__basket-mobile">
          <div
            className="header__basket_icon"
            onClick={() => {
              basket?.length ? navigate("/basket") : setShowBasket(true);
            }}
          >
            <img src={basketIcon} alt="" />
            <p className="header__basket_quantity">{basket?.length}</p>
          </div>
          <div className="header__basket_price">
            <p>Корзина</p>
            <p>{sumProducts} &#8376;</p>
          </div>
        </div>
      </div>
      <span className="border" />
      <div className="header conteiner">
        <div className="header__logo">
          <Link to="/catalog">
            <img src={sultan} alt="" />
          </Link>
        </div>
        <div className="header__btnCatalog-mobile">
          <Link to="/catalog">
            <Button size="b" img={catalogIcon2}>
              Каталог
            </Button>
          </Link>
        </div>
        <div className="header__btnCatalog">
          <Link to="/catalog">
            <Button size="b" img={catalogIcon}>
              Каталог
            </Button>
          </Link>
        </div>
        <div className="header__btnSearch">
          <Search
            placeholder="Поиск..."
            value={valueSearch}
            formSubmit={setSearchManufacturer}
            setValue={setValueSearch}
          />
        </div>
        <span className="border-mobile" />
        <div className="header__btnSearch-mobile">
          <div
            className="header__btnCatalog-mobile"
            onClick={() => setButtonMobileFilter!(!buttonMobileFilter)}
          >
            <Link to="/catalog">
              <Button size="b" img={iconSearchMobile}>
                Поиск
              </Button>
            </Link>
          </div>
          {/* <Search
            img={"http://localhost:3000/img/icons/icon_search-mobile.svg"}
            placeholder="Поиск"
            value={valueSearch}
            formSubmit={setSearchManufacturer}
            setValue={setValueSearch}
          /> */}
        </div>

        <div className="header__contact">
          <div className="header__contact_info">
            <a className="header__contact_info-tel" href="tel:+77774900091">
              +7(777)490-00-91
            </a>
            <p className="header__contact_info-text">
              Время работы: 9:00-20:00
            </p>
            <a href="#*" className="header__contact_info-call">
              <u>Заказать звонок</u>
            </a>
          </div>
          <img src={operatorIcon} alt="operator" />
        </div>
        <div className="header__btnPriceList">
          <Button size="b" img={priceIcon}>
            Прайс-лист
          </Button>
        </div>
        <div className="header__basket">
          <div
            className="header__basket_icon"
            onClick={() => {
              basket?.length ? navigate("/basket") : setShowBasket(true);
            }}
          >
            <img src={basketIcon} alt="" />
            <p className="header__basket_quantity">{basket?.length}</p>
          </div>
          <div className="header__basket_price">
            <p>Корзина</p>
            <p>{sumProducts} &#8376;</p>
          </div>
        </div>
      </div>
      <span className="border" />
      {burgerButton ? (
        <HeaderMobile setShowAdminPanel={setShowAdminPanel} />
      ) : (
        ""
      )}
      <div className="header__simpleBreadcrumbs conteiner">
        <SimpleBreadcrumbs />
      </div>
      <div className="header__navigateButton conteiner">
        <Button
          onClick={() => navigate(-1)}
          size="img"
          img={cursorLeft}
        ></Button>
        НАЗАД
      </div>
      <BasketEmpty show={showBasket} setShow={setShowBasket} />
      <AdminPanel show={showAdminPanel} setShow={setShowAdminPanel} />
    </div>
  );
};

export default Header;
