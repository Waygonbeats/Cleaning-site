import React from "react";
import "./HeaderStyle.sass";
export const Header = () => {
  return (
    <div className="headerPozition">
      <img
        className="img"
        src="src\assets\Picsart_22-12-24_15-16-51-341.png"
      />
      <div className="headerPozition">
        <div className="novigationHeader">О нас</div>
        <div className="novigationHeader">Материалы</div>
        <div className="novigationHeader">Услуги</div>
        <div className="novigationHeader">Сделать заказ</div>
      </div>
    </div>
  );
};
