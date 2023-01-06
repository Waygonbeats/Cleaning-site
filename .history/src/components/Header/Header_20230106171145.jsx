import React from "react";
import "./HeaderStyle.sass";

import AnchorLink from "react-anchor-link-smooth-scroll";
export const Header = () => {
  return (
    <>
    <nav className="headerPozition">
      <div className="imgConteiner">
        <img className="img" src="/logo.png" />
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
          <img className="messengerImg" src="/wapplogo.png" />
          <img className="messengerImg" src="/tglogo.png" />
        </div>
        <div className="numberContainer">
          <div className="number">+7 991 240 65 66</div>
          <div className="number">+7 991 240 65 66</div>
        </div>
      </div>
      </nav>
      <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <div className="imgConteiner">
            <img
              class="h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              src="/logo.png"
            />
          </div>
          <span class="font-semibold text-xl tracking-tight">cleaning</span>
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
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
   
</>
  );
};