import React from "react";
import "./FeedbackStyle.sass";

const TOKEN = "";
const CHAT_ID = "";

export const Feedback = () => {
  const [firstName, setFirsName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [address, setAddress] = React.useState("");
  
  const [service, setService] = React.useState("");
  return (
    <div>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Имя
            </label>
            <input
              onChange={(e) => {
                setFirsName(e.target.value);
              }}
              value={firstName}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Имя"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Фомилия
            </label>
            <input
            onChange={(e)=>{setLastName(e.target.value)}}
              value={lastName}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Фомилия"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Адрес
            </label>
            <input
            onChange={(e)=>{setAddress(e.target.value)}}
              value={address}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="Адрес"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-32 md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Услуги
            </label>
            <div className="flex flex-initial ">
              <select value={service}
              onChange={(e) => {setService(e.target.value), console.log(service)}}
                className="block appearance-none w-100 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Уборка</option>
                <option>Быстрая уборка</option>
                <option>Очень быстрая уборка</option>
              </select>
              <div className="w-full md:w-10 px-3 mb-6 md:mb-0">
                <button
                  type="submit"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-30 h-12"
                >
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
   
  );
  
};
