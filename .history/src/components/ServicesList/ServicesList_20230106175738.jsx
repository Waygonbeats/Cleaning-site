import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Downdrop } from "./Downdrop";

export const ServicesList = () => {
  return (
    <div className="flex flex-col">
      <section id="services"></section>
      <div className="flex lg:justify-center flex-col items-center">
        <div className="rounded-lg shadow-lg bg-white w-56 m-2">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="/handcleaning.jpg"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Поддерживающая <br /> от 1500₽
            </h5>
            <AnchorLink href="#makeOrder">
              <button
                type="button"
                className=" inline-block px-6 py-2.5 mt-11 bg-amber-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
              >
                Заказать
              </button>
            </AnchorLink>
          </div>
        </div>
        <div className="rounded-lg shadow-lg  bg-white w-56 m-2 ">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="/cleaninggirl.jpg"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Генеральная <br /> от 2600₽
            </h5>
            <AnchorLink href="#makeOrder">
              <button
                type="button"
                className=" inline-block px-6 mt-8 py-2.5 bg-amber-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
              >
                Заказать
              </button>
            </AnchorLink>
          </div>
        </div>
        <div className="rounded-lg shadow-lg bg-white w-56 m-2">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="/cleaningbeforebuild.jpg"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              После ремонта <br />
              от 3600₽
            </h5>
            <AnchorLink href="#makeOrder">
              <button
                type="button"
                className=" inline-block px-6 mt-8 py-2.5 bg-amber-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
              >
                Заказать
              </button>
            </AnchorLink>
          </div>
        </div>
        <div className="rounded-lg shadow-lg bg-white w-56 m-2">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="/cleaningman.jpeg"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Уборка перед приездом из род дома от 3990₽ <br />
            </h5>
            <AnchorLink href="#makeOrder">
              <button
                type="button"
                className=" inline-block px-6 mt-1 py-2.5 bg-amber-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
              >
                Заказать
              </button>
            </AnchorLink>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-10">
        <Downdrop />
      </div>
    </div>
  );
};
