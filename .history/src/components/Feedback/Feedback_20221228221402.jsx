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

  const [service2, setService2] = React.useState([
    { checked: false, value: "Услуга 1", id: 1 },
    { checked: false, value: "Услуга 2", id: 2 },
    { checked: false, value: "Услуга 3", id: 3 },
    { checked: false, value: "Услуга 4", id: 4 },
    { checked: false, value: "Услуга 5", id: 5 },
    { checked: false, value: "Услуга 6", id: 6 },
  ]);
  const [service3, setService3] = React.useState({});
  const [comment, setСomment] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [serviceId, setServiceId] = React.useState([]);
  const [serviceName, setServiceName] = React.useState([]);
  const service1 = [
    { checked: false, value: "Услуга 1", id: 1 },
    { checked: false, value: "Услуга 2", id: 2 },
    { checked: false, value: "Услуга 3", id: 3 },
    { checked: false, value: "Услуга 4", id: 4 },
    { checked: false, value: "Услуга 5", id: 5 },
    { checked: false, value: "Услуга 6", id: 6 },
  ];

  const handleChecked = (id) => {
    setService2((prevState) =>
      prevState.map((el) =>
        el.id === id ? { ...el, checked: !el.checked } : el
      )
    );
    console.log(service2);
  };

  const sendData = (
    firstName,
    lastName,
    address,
    comment,
    phoneNumber
  ) => {
    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Отправитель:</b>${firstName + lastName}\n`;
    message += `<b>Комментарий:</b>${phoneNumber}\n`;
    message += `<b>Номер телефона:</b>${comment}\n`;
    message += `<b>Адрес:</b>${address}`;
    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    });
    setPhoneNumber("");
    setFirsName("");
    setLastName("");
    setAddress("");
    setService("");
    setСomment("");
  };
  return (
    <div className="w-full max-w-lg m-14">
      <section id="makeOrder"></section>
      <div className="flex flex-wrap -mx-3 mb-1 ">
        <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          ></label>
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
          ></label>
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
          ></label>
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
          ></label>
          <input
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            value={phoneNumber}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="Номер телефона"
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          ></label>
          <textarea
            onChange={(e) => {
              setСomment(e.target.value);
            }}
            value={comment}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="Ваши пожелания к заказу клининг услуг"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-32 md:w-1/3 px-3 mb-6 md:mb-0">
          {/*   <div className="flex flex-initial ">
              <select
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                }}
                className="block appearance-none w-100 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>{"Уборка"}

                </option>
                <option>{"Быстрая уборка"}</option>
                <option>{"Очень быстрая уборка"}</option>
              </select>

 */}

          <div className="focus:outline-none text-white bg-amber-600 hover:bg-amber-500 focus:ring-4 focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
            <button
              onClick={(event) => {
                sendData(firstName, lastName, address, comment, phoneNumber);
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
  );
};
