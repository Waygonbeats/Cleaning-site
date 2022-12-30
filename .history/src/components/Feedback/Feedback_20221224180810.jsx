import axios from "axios";
import React from "react";
import "./FeedbackStyle.sass";

const TOKEN = "5944534763:AAG7u7VZ84OfCa-OP_LRESZl_IK85wqVV40";
const CHAT_ID = "-1001810084478";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
export const Feedback = () => {
  const [firstName, setFirsName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [service, setService] = React.useState("");
  const [comment, setСomment] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const sendData = (firstName, lastName, address, service,comment,phoneNumber) => {
    service != "" ? service : setService("Уборка");
    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Отправитель:</b>${firstName + lastName}\n`;
    message += `<b>Услуга:</b>${service}\n`;
    message += `<b>Комментарий:</b>${comment}\n`;
    message += `<b>Номер телефона:</b>${phoneNumber}\n`;
    message += `<b>Адрес:</b>${address}`;
    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    });
    setFirsName("");
    setLastName("");
    setAddress("");
    setService("");
    setComment("");
    setPhoneNumber("");
  };
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
              className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Имя"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Фомилия
            </label>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
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
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              value={address}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="Адрес"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Ваши пожелания к заказу клининг услуг
            </label>
            <textarea 
              onChange={(e) => {
                setСomment(e.target.value);
              }}
              value={comment}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="Адрес"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Номер телефона
            </label>
            <input
              onChange={(e) => {
                setСomment(e.target.value);
              }}
              value={phoneNumber}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
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
              <select
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                }}
                className="block appearance-none w-100 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>{"Уборка"}</option>
                <option>{"Быстрая уборка"}</option>
                <option>{"Очень быстрая уборка"}</option>
              </select>

              <div className="w-full md:w-10 px-3 mb-6 md:mb-0">
                <button
                  onClick={(event) => {
                    sendData(firstName, lastName, address, service,comment,phoneNumber),
                      event.preventDefault();
                  }}
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
