import React from "react";
import "./HeaderStyle.sass";

import AnchorLink from "react-anchor-link-smooth-scroll";
export const Header = () => {
  return (
    <nav className="headerPozition">
      <div className="imgConteiner">
        <img
          className="img"
          src="src\assets\Picsart_22-12-24_18-09-10-302.png"
        />
      </div>
      <div className="navPozition">
        <div className="novigationHeader" href="#aboutUs">
          <AnchorLink href="#aboutUs">О нас</AnchorLink>
        </div>

        <div className="novigationHeader">
          <AnchorLink href="#services">Услуги</AnchorLink>
        </div>
        <div className="novigationHeader" href="#form">
          <AnchorLink href="#makeOrder">Сделать заказ</AnchorLink>
        </div>
      </div>
      <div className="commContainer">
        <div className="messengerImgContainer">
          <img className="messengerImg" src="src\assets\whatsapp-121.png" />
          <img className="messengerImg" src="src\assets\pngwing.com.png" />
        </div>
        <div className="numberContainer">
          <div className="number">+7 999 999 99 99</div>
          <div className="number">+7 999 999 99 99</div>
        </div>
      </div>
    </nav>
  );
};
