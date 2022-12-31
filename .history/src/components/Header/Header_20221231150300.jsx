import React from "react";
import "./HeaderStyle.sass";

import AnchorLink from "react-anchor-link-smooth-scroll";
export const Header = () => {
  return (
    <nav className="headerPozition">
      <div className="imgConteiner">
        <img className="img" src="public\logo.png"
/>      </div>
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
          <img className="messengerImg" src="public\wapplogo.png" />
          <img className="messengerImg" src="public\tglogo.png" />
        </div>
        <div className="numberContainer">
          <div className="number">+7 991 240 65 66</div>
          <div className="number">+7 991 240 65 66</div>
        </div>
      </div>
    </nav>
  );
};
