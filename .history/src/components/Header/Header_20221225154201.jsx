import React from "react";
import "./HeaderStyle.sass";
export const Header = () => {
  return (
    <nav className="headerPozition">
      <img
        className="img"
        src="src\assets\Picsart_22-12-24_18-09-10-302.png"
      />
      <div className="headerPozition">
        <div className="novigationHeader">О нас</div>
        <div className="novigationHeader">Материалы</div>
        <div className="novigationHeader">Услуги</div>
        <div className="novigationHeader">Сделать заказ</div>
      </div>
    </nav>
  );
};
