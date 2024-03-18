// NavBar.js
import {useState} from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const NavBar = ({
  presentationRef,
  tecnologiasRef,
  proyectosRef,
  contactoRef,
  footerRef
}) => {

  const [menu, setMenu] = useState(false)
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <div className="flex justify-center items-center relative w-screen">
      <div onClick={()=> setMenu(!menu)} className="absolute right-6 top-6 lg:hidden">
        {menu ? <RxCross2 size={30} color="white" /> : <FaBars size={30} color="white" />  }
      </div>
      <div className="lg:w-[100%] lg:relative  ">
        <ul className="mt-10 px-10 lg:w-full lg:flex lg:justify-between lg:fixed lg:z-999 ">
          <li
            className={`text-white text-2xl font-serif cursor-pointer lg:block hover:border hover:border-blue-500 transition duration-500 ease-in-out transform hover:scale-105  ${menu ? "block" : "hidden"}`}
            onClick={() => scrollToRef(presentationRef)}
          >
            Presentacion 
          </li>
          <li
            className={`text-white text-2xl font-serif cursor-pointer lg:block hover:border hover:border-blue-500 transition duration-500 ease-in-out transform hover:scale-105 ${menu ? "block" : "hidden"}`}
            onClick={() => scrollToRef(tecnologiasRef)}
          >
            Tecnologias
          </li>
          <li
            className={`text-white text-2xl font-serif cursor-pointer lg:block hover:border hover:border-blue-500 transition duration-500 ease-in-out transform hover:scale-105 ${menu ? "block" : "hidden"}`}
            onClick={() => scrollToRef(proyectosRef)}
          >
            Proyectos
          </li>
          <li
            className={`text-white text-2xl font-serif cursor-pointer lg:block hover:border hover:border-blue-500 transition duration-500 ease-in-out transform hover:scale-105 ${menu ? "block" : "hidden"}`}
            onClick={() => scrollToRef(contactoRef)}
          >
            Contacto
          </li>
          <li
            className={`text-white text-2xl font-serif cursor-pointer lg:block hover:border hover:border-blue-500 transition duration-500 ease-in-out transform hover:scale-105 ${menu ? "block" : "hidden"}`}
            onClick={() => scrollToRef(footerRef)}
          >
           Redes sociales
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
