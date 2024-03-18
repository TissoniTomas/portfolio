// App.js
import React, { useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import Presentation from "./components/Presentation/Presentation";
import Tecnologias from "./components/Tecnologias/Tecnologias";
import Proyects from "./components/Proyects/Proyects";
import Contacto from "./components/Contacto/Contacto"; // Importa el componente de contacto

function App() {
  const presentationRef = useRef(null);
  const tecnologiasRef = useRef(null);
  const proyectosRef = useRef(null);
  const contactoRef = useRef(null);

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 w-screen ">
      <NavBar presentationRef={presentationRef} tecnologiasRef={tecnologiasRef} proyectosRef={proyectosRef} contactoRef={contactoRef} />
      <Presentation presentationRef={presentationRef}  />
      <Tecnologias tecnologiasRef={tecnologiasRef} />
      <Proyects proyectsRef={proyectosRef} />
      <Contacto contactoRef={contactoRef} />
    </div>
  );
}

export default App;
