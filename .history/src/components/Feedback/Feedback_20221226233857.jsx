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
  const service1 = [];

  const handleChecked = (id, e) => {
    setService2(
      service2.map((el) =>
        el.id === id ? { ...el, checked: !el.checked } : el
      )
    );

    setServiceName([...serviceName, service2.filter((el) => el.checked)]);
      console.log(serviceName);
  };


  const sendData = (
    firstName,
    lastName,
    address,
    service,
    comment,
    phoneNumber
  ) => {
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
    setPhoneNumber("");
    setFirsName("");
    setLastName("");
    setAddress("");
    setService("");
    setСomment("");
  };
  return (
    <div className="w-full max-w-lg m-14">
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
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            Выбор услуги
          </label>
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

          <div className="group inline-block">
            <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
              <span className="pr-1 text-black font-semibold flex-1">
                Dropdown
              </span>
              <span>
                <svg
                  className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul
              className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
            >
              <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">Langauges</span>
                  <span className="mr-auto">
                    <svg
                      className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                >
                  {service2.map((item) => {
                    return (
                      <li key={item.id} className="flex items-center mb-4 w-10">
                        <input
                          checked={item.checked}
                          id="default-checkbox"
                          type="checkbox"
                          onChange={(e) => handleChecked(item.id, e)}
                          value={item.value}
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-checkbox"
                          className="ml-2 text-sm font-medium text-black dark:text-gray-300"
                        >
                          {item.value}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">Langauges</span>
                  <span className="mr-auto">
                    <svg
                      className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                >
                  <li className="px-3 py-1 text-black hover:bg-gray-100">
                    Javascript
                  </li>
                </ul>
              </li>
              <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">Langauges</span>
                  <span className="mr-auto">
                    <svg
                      className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                >
                  <li className="px-3 py-1 text-black hover:bg-gray-100">
                    Javascript
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-10 px-3 mb-6 md:mb-0">
            <button
              onClick={(event) => {
                sendData(
                  firstName,
                  lastName,
                  address,
                  service,
                  comment,
                  phoneNumber
                );
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
