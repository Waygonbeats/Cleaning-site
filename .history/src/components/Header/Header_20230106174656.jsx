import React from "react";
import "./HeaderStyle.sass";

import AnchorLink from "react-anchor-link-smooth-scroll";
export const Header = () => {
  return (
    <>
      <nav class="flex items-center text-black justify-between w-full bg-white flex-wrap  p-6">
        <div class="flex items-center flex-no-shrink text-black mr-6">
          <span class="font-inset-22 text-xl tracking-tight">JB cleaning</span>
        </div>

        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-amber-600 mr-4"
            >
              <AnchorLink href="#aboutUs">О нас</AnchorLink>
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-amber-600 mr-4"
            >
              <AnchorLink href="#services">Услуги</AnchorLink>
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-amber-600"
            >
              <AnchorLink href="#makeOrder">Сделать заказ</AnchorLink>
            </a>
            <a class="flex items-center px-3 py-2 text-teal-lighter border-teal-light hover:text-white ">
              <div className="commContainer">
                <div className="messengerImgContainer">
                  <img className="messengerImg" src="/wapplogo.png" />
                  <img className="messengerImg" src="/tglogo.png" />
                </div>
                <div className="numberContainer">
                  <div className="number">+7 991 240 65 66</div>
                  <div className="number">+7 991 240 65 66</div>
                </div>
              </div>
            </a>
          </div>
          <div class="block lg:flex lg:items-center ">
      
          </div>
        </div>
      </nav>
    </>
  );
};
