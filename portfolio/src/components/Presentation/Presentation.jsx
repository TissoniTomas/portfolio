import React from "react";
import { Divider } from "keep-react";


import fotoPortfolio from "../../assets/foto-portfolio/foto-portfolio.jfif";

const Presentation = ({ presentationRef }) => {
  
  return (
    <div
      id="presentation"
      ref={presentationRef}
      className="text-center flex flex-col items-center  "
    >
      <h1 className="font-serif lg:xw-[1200px] hover:decoration-double hover:underline hover:decoration-error-800 px-4 text-5xl lg:text-6xl font-extrabold mt-10 lg:mt-40 text-white ">
        Front-End React Developer today...
      </h1>
      <div  className="flex flex-col lg:flex-row w-full items-center justify-around mt-10 lg:mt-20 animate-fade animate-once animate-duration-1000 animate-delay-500 px-4">
        <p className="mt-10 px-2 text-white text-2xl lg:text-4xl">
          ¡Hola!. Mi nombre es Tomás Salvador Tissoni, tengo 26 años, y en el
          ultimo tiempo encontre muchisima diversion e interes desarrollando
          interfaces de usuarios orientados a e-commerce. Te invito a que
          repases mi preparacion y proyectos para que sepas lo que soy capaz de
          hacer. Me encuentro en constante formacion, actualmente estudiando
          bases de datos y programacion backend por lo que jamas le cierro la
          puerta a ningun desafio nuevo. ¡Quien sabe lo que uno puede llegar a
          lograr!
        </p>
        <img
          className="mt-10 w-64 h-64 lg:w-[400px] lg:h-[400px] border border-black rounded-2xl"
          src={fotoPortfolio}
          alt="foto-portfolio"
        />
      </div>
      <Divider color="error" className="mt-20" />
    </div>
  );
};

export default Presentation;
