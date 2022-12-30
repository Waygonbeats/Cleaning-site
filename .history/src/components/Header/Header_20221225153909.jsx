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
      <div className="novigationHeader">
        <div >О нас</div>
        <div >Материалы</div>
        <div className="">Услуги</div>
        <div className="">Сделать заказ</div>
        </div>
      </div>
    </nav>
  );
};
