import { Timeline, Button, Divider } from "keep-react";

import { ArrowRight, CalendarBlank } from "phosphor-react";
import { DiReact } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNestjs } from "react-icons/si";

import { ModalCertificados } from "../Modal/Modal";
import desarrolloWeb from "../../assets/certificados/desarrollo-web.png";
import javascript from "../../assets/certificados/javascript.png";
import reactJS from "../../assets/certificados/reactjs.png";
import frontend from "../../assets/certificados/frontend-carrera.png"

const TimelineEstudios = () => {
  return (
    <>
    <h1  className="text-4xl font-serif my-10 text-center text-white mt-36 animate-fade animate-once animate-duration-1000 animate-delay-500">Cursos y Formacion Academica</h1>
    <div className="flex flex-col justify-center items-center ">

    <Timeline timelineBarType="solid" className="mt-20 mx-10  animate-fade animate-once animate-duration-1000 animate-delay-500">
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank size={16} />} />
        <Timeline.Content>
          <Timeline.Time>Abril 2023 - Junio 2023</Timeline.Time>
          <Timeline.Title className="text-yellow-400">Curso Desarrollo Web</Timeline.Title>
          <Timeline.Body>
            Creacion de mi primer sitio web de manera estatica donde aprendi
            sobre sintaxis, estrucuturas, estilos y librerias como Bootstrap y
            SASS, la importancia del SEO en el desarrollo y utilizacion de
            servidores gratuitos.
          </Timeline.Body>
          <Timeline.Body>
            Tecnologias utilizadas:
            <ul className="grid grid-rows-2 grid-cols-3 gap-y-32 mb-40 mt-20 justify-items-center h-20">
              <li>
                <DiHtml5 size={64} color="orange" />
              </li>
              <li>
                <DiCss3 size={64} color="lightblue" />
              </li>
              <li>
                <DiSass size={64} color="pink" />
              </li>
              <li>
                <DiBootstrap size={64} color="blue" />
              </li>
              <li>
                <DiGit size={64} color="red" />
              </li>
              <li>
                <DiGithubBadge size={64} color="white" />
              </li>
            </ul>
          </Timeline.Body>
          <div className="flex items-center justify-center  mt-6">
            <ModalCertificados certificado={desarrolloWeb} carrera={false} />
          </div>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank size={16} />} />
        <Timeline.Content>
          <Timeline.Time>Septiembre 2023 - Diciembre 2023</Timeline.Time>
          <Timeline.Title className="text-yellow-400">Curso Javascript</Timeline.Title>
          <Timeline.Body>
            Fundamentos del lenguaje orientado a Front-End. Control de Flujos.
            Ciclos e iteraciones. Objetos e Arrays. Librerias. Asincronia y
            promesas.
          </Timeline.Body>
          <Timeline.Body>
            Tecnologias utilizadas:
            <ul className="flex items-center justify-center mb-32 mt-20">
              <li className="bg-black w-10">
                <DiJsBadge size={64} color="yellow" />
              </li>
            </ul>
          </Timeline.Body>
          <div className="flex items-center justify-center mt-6">
            <ModalCertificados certificado={javascript} carrera={false} />
          </div>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank size={16} />} />
        <Timeline.Content>
          <Timeline.Time>Noviembre 2023 - Enero 2024</Timeline.Time>
          <Timeline.Title className="text-yellow-400">Curso React JS</Timeline.Title>
          <Timeline.Body>
            Programacion mediante componentes. Manipulacion del Virtual DOM.
            JSX. Distinto uso de librerias via NPM. Renderizado condicional.
            Firebase como base de datos.
          </Timeline.Body>
          <Timeline.Body>
            Tecnologias utilizadas:
            <ul className="grid grid-cols-3 grid-rows-2 justify-items-center mb-40 mt-20 gap-y-32 ">
              <li>
                <DiReact size={64} color="skyblue" />
              </li>
              <li>
                <SiTailwindcss size={64} color="skyblue" />
              </li>
              <li>
                <SiMui size={64} color="blue" />
              </li>
              <li>
                <SiVite size={64} color="purple" />
              </li>
              <li>
                <FaNpm size={64} color="red" />
              </li>
            </ul>
          </Timeline.Body>
          <div className="flex items-center justify-center mt-6">
            <ModalCertificados certificado={reactJS} carrera={false} />
          </div>
          <div className="flex items-center justify-center mt-6">
            <ModalCertificados certificado={frontend} carrera={true} />
          </div>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank size={16} />} />
        <Timeline.Content>
          <Timeline.Time>Enero 2024 - Julio 2024</Timeline.Time>
          <Timeline.Title className="text-yellow-400">Programacion Back-end</Timeline.Title>
          <Timeline.Body>
            Desarrollo de aplicaciones modernas del lado del servidor con Node
            JS, Express JS y Mongo DB. Manejo de procesos distribuidos, control
            de grandes volumenes de datos y despliegue a distintas plataformas
            web.
          </Timeline.Body>
          <Timeline.Body>
            Tecnologias utilizadas:
            <ul className="grid grid-cols-3 grid-rows-2 justify-items-center ">
              <li>
                <SiExpress size={64} color="white" />
              </li>
              <li>
                <SiMongodb size={64} color="green" />
              </li>
              <li>
                <SiNestjs size={64} color="red" />
              </li>
            </ul>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank size={16} />} />
        <Timeline.Content>
          <Timeline.Time>Junio 2023 - Actualidad</Timeline.Time>
          <Timeline.Title className="text-[#A4243B]">Licenciatura en Ciencias de la Computacion</Timeline.Title>
          <Timeline.Body>
           Carrera de Grado de la Universidad de Buenos Aires, actualmente cursando la ultima parte del CBC

          </Timeline.Body>
         
          <Timeline.Body>
           <a target="_blank" href="https://computacion.dc.uba.ar/plan-de-estudios-2023/">   <Button color="primary" variant="outline">
       VER PLAN DE ESTUDIOS
      </Button></a>

          </Timeline.Body>
         


  
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    </div>
    <Divider color="error" className="mt-20" />
    </>
  );
};

export default TimelineEstudios;
