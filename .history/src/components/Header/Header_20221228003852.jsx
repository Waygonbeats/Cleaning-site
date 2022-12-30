import React from "react";
import "./HeaderStyle.sass";

import { HashLink as Link } from "react-router-hash-link";
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
        О нас
        </div>
        <div className="novigationHeader">Материалы</div>
        <div className="novigationHeader" href="#services">
          Услуги
        </div>
        <div className="novigationHeader" href="#form">
          Сделать заказ
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
