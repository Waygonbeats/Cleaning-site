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
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg
              class="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
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
          </div>
          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
            >
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
        </div>
      </nav>
    </>
  );
};
