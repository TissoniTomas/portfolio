import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div
        className="flex justify-end relative "
        onClick={() => setMenu(!menu)}
      >
        <div className="absolute right-6 top-6 lg:hidden">
          {menu ? (
            <FaXmark size={30} color="white" />
          ) : (
            <FaBars size={30} color="white" />
          )}
        </div>
        <div className="relative h-40">
          <ul className="absolute right-36 top-20 z-999 lg:flex lg:justify-evenly ml-64 lg:w-screen ">
          
              <li className={`text-white text-3xl font-serif  ${menu ? "block" : "hidden"}lg:block`}>Sobre mi</li>
              <li className={`text-white text-3xl font-serif  ${menu ? "block" : "hidden"}lg:block`}>Tecnologias</li>
              <li className={`text-white text-3xl font-serif  ${menu ? "block" : "hidden"}lg:block`}>Proyectos </li>
              <li className={`text-white text-3xl font-serif  ${menu ? "block" : "hidden"}lg:block`}>Contacto</li>
             
              </ul>
        </div>
      </div>
    </> 
  );
};

export default NavBar;
