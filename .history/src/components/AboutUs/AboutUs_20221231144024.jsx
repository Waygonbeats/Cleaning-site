import React from "react";
import "./AboutUsStyle.sass";
export const AboutUs = () => {
  return (
    <div className="py-16">
  <section id='aboutUs'>
     
    </section>
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="src\assets\beardman.jpg"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-white-900 font-bold md:text-4xl">
              JB
            </h2>
            <p className="mt-6 text-white-600">
              JB cleaning - чисто Качество, превыше всего. Скорость наш конёк.
              Уборка квартир, офисных помещений, аппартаментов. что вам нужно
              выбрирать вам.
            </p>
         
          </div>
        </div>
      </div>
    </div>
  );
};
