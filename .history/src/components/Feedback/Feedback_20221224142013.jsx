import { Listbox } from "@headlessui/react";
import React, { useState } from "react";
import "./FeedbackStyle.sass";

const servicesList = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];
export const Feedback = () => {
  const [selectedService, setSelectedService] = useState(servicesList[0]);
  return (
    <div>
      <form
        className="obratnuj-zvonok"
        autoComplete="off"
        action="email.php"
        method="post"
      >
        <div className="form-zvonok">
          <div>
            <label>
              Имя <span>*</span>
            </label>
            <input type="text" name="username" required />
          </div>
          <div>
            <label>
              Номер телефона <span>*</span>
            </label>
            <input type="text" name="usernumber" required />
          </div>
          <div>
            <div>
              <Listbox className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black" value={selectedService} onChange={setSelectedService}>
                <Listbox.Button>{selectedService.name}</Listbox.Button>
                <Listbox.Options>
                  {servicesList.map((service) => (
                    <Listbox.Option
                      key={service.id}
                      value={service}
                      disabled={service.unavailable}
                    >
                      {service.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
          </div>
          <input
            className="bot-send-mail"
            type="submit"
            value="Послать заявку"
          />
        </div>
      </form>
    </div>
  );
};
