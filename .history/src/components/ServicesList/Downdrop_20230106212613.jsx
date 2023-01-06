import React, { useState } from "react";

export const Downdrop = () => {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="dropdown w-[60px] items-center flex flex-col">
      <button
        className="text-white  bg-amber-600 hover:bg-amber-500 focus:ring-4  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        onClick={handleDropDown}
      >
        Дополнительные услуги
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className={`z-10  bg-white rounded  divide-y divide-gray-100 shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className=" z-10  bg-white rounded divide-y  divide-gray-100 shadow ">
          <li className="block py-2 px-4 text-left hover:bg-gray-100">Глажка белья 500₽ час </li>
          <li className="block py-2 px-4 text-left hover:bg-gray-100">Кухонный гарнитур внутри 1000₽</li>{" "}
          <li className="block py-2 px-4 text-left hover:bg-gray-100">Холодильник внутри 500₽</li>
          <li className="block py-2 px-4 text-left hover:bg-gray-100">Духовка 500₽</li>
          <li className="block py-2 px-4 text-left hover:bg-gray-100">СВЧ 300₽ </li>
          <li className="block py-2 px-4 text-left hover:bg-gray-100">Люстры от 300₽</li>
          <li className="block py-2 px-4 text-left hover:bg-gray-100">Не стандартные окна 250₽ м2</li>
        </ul>
      </div>
    </div>
  );
};
