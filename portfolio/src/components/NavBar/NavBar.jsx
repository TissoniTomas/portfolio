// NavBar.js
import React from "react";
import { FaBars } from "react-icons/fa";

const NavBar = ({
  presentationRef,
  tecnologiasRef,
  proyectosRef,
  contactoRef,
}) => {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-end relative">
      <div className="absolute right-6 top-6 lg:hidden">
        <FaBars size={30} color="white" />
      </div>
      <div className="relative h-40">
        <ul className="absolute right-36 top-20 z-999 lg:flex lg:justify-evenly ml-64 lg:w-screen lg:fixed ">
          <li
            className="text-white text-3xl font-serif cursor-pointer"
            onClick={() => scrollToRef(presentationRef)}
          >
            Presentacion 
          </li>
          <li
            className="text-white text-3xl font-serif cursor-pointer"
            onClick={() => scrollToRef(tecnologiasRef)}
          >
            Tecnologias
          </li>
          <li
            className="text-white text-3xl font-serif cursor-pointer"
            onClick={() => scrollToRef(proyectosRef)}
          >
            Proyectos
          </li>
          <li
            className="text-white text-3xl font-serif cursor-pointer"
            onClick={() => scrollToRef(contactoRef)}
          >
            Contacto
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
