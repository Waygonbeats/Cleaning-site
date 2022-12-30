import React from "react";
import "./HeaderStyle.sass";
export const Header = () => {
  return (
    <nav className="headerPozition">
      <img className="img" src="src\assets\Picsart_22-12-24_18-09-10-302.png" />

      <div className="navPozition">
        <div className="novigationHeader">О нас</div>
        <div className="novigationHeader">Материалы</div>
        <div className="novigationHeader">Услуги</div>
        <div className="novigationHeader">Сделать заказ</div>
      </div>
      <div className="comm-ontainer">
        <img className="messengerImg" src="src\assets\whatsapp-121.png" />
        <img className="messengerImg" src="src\assets\pngwing.com.png" />
        <div className="number">+7 999 999 99 99</div>
      </div>
    </nav>
  );
};
