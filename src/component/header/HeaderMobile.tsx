import React, { FC } from "react";
import { Button } from "../Button/Button";
import * as img from "../../img/imges";
interface HeaderMobileProps {
  setShowAdminPanel: (t: boolean) => void;
}

const HeaderMobile: FC<HeaderMobileProps> = ({ setShowAdminPanel }) => {
  return (
    <div className="headerMobile">
      <div className="headerMobile__body">
        <div className="header__contacts_item">
          <img src={img.pinIcon} alt="pin" />
          <a href="#*">
            <h3>г.Кокчетав, ул.Ж. Ташенова 129Б</h3>
            <p>(Рынок восточный)</p>
          </a>
        </div>
        <div className="header__contacts_item">
          <img src={img.mailIcon} alt="mail" />
          <a href="#*">
            <h3>opt.sultan@mail.ru </h3>
            <p>На связи в любое время</p>
          </a>
        </div>
        <div className="header__contacts_item">
          <img src={img.phoneBlackIcon} alt="mail" />
          <a href="#*">
            <h3>Отдел продаж</h3>
            <p>+7 (777) 490-00-91</p>
            <p>время работы: 9:00-20:00</p>
          </a>
        </div>
        <div className="headerMobile__contacts_call">
          <Button size="img" img={img.phoneWhiteIcon} />
          <a href="#">Заказать звонок</a>
        </div>
        <span className="headerMobile__border" />
        <nav className="headerMobile__nav">
          <h3 className="headerMobile__nav_h3">Меню сайта:</h3>
          <ul className="headerMobile__nav_ul">
            <li onClick={() => setShowAdminPanel(true)}>
              <a href="#">Админ панель</a>
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
        <div className="footer__priceList-btn">
          <Button size="b" img={img.priceIcon}>
            Прайс лист
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
