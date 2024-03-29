
import Card from "../Card/Card";

import sixdays from "../../assets/logos/six-days-supps.png";
import restaurante from "../../assets/logos/restaurante.png";
import futbolizados from "../../assets/logos/futbolizados.png";
import laststore from "../../assets/logos/last-store.png";

// Icons

import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiVite } from "react-icons/si";



const Proyects = ({proyectsRef}) => {
  return (
    <div id="proyects" ref={proyectsRef} className="text-center flex flex-col items-center">
      <h2 className=" text-4xl px-2 lg:text-5xl montserrat-title hover:decoration-double hover:underline hover:decoration-error-800 my-10 text-center text-white mt-36 animate-fade animate-once animate-duration-1000 animate-delay-500"> PROYECTOS A LA FECHA</h2>
      <div className="grid grid-cols-1 gap-y-20 place-items-center  lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-64 lg:gap-y-10 ">
        <Card
          title="Six Days Supps"
          tecnologiasIcons={[
            <IoLogoHtml5 size={40} />,
            <IoLogoCss3 size={40} />,
            <FaSass size={40} />,
          ]}
          link="https://pf-tissoni.vercel.app/"
          img={sixdays}
          linkCodigo="https://github.com/TissoniTomas/PF-Tissoni"
        />
        <Card title="Restaurante JS"  tecnologiasIcons={<SiJavascript size={40} />} link="https://restaurante-js.vercel.app/index.html" img={restaurante} linkCodigo="https://github.com/TissoniTomas/Restaurante-JS"/>
        <Card title  ="The Last Store" tecnologiasIcons={[<FaReact size={40} />,<SiTailwindcss size={40} />, <SiVite size={40} />   ] } link="https://ecommerce-react-six-lyart.vercel.app/" img={laststore} linkCodigo="https://github.com/TissoniTomas/Ecommerce-React"/>
        <Card title  ="Futbolizados" tecnologiasIcons={[<FaReact size={40} />,<SiTailwindcss size={40} />, <SiVite size={40} />   ] }  img={futbolizados} construccion={true} linkCodigo="https://github.com/TissoniTomas/futbolizados-react"/>
       
      </div>
    </div>
  );
};

export default Proyects;
