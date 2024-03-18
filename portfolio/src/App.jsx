// App.js
import React, { useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import Presentation from "./components/Presentation/Presentation";
import Tecnologias from "./components/Tecnologias/Tecnologias";
import Proyects from "./components/Proyects/Proyects";
import Contacto from "./components/Contacto/Contacto"; // Importa el componente de contacto
import Footer from "./components/Footer/Footer"

function App() {
  const presentationRef = useRef(null);
  const tecnologiasRef = useRef(null);
  const proyectosRef = useRef(null);
  const contactoRef = useRef(null);
  const footerRef = useRef(null)

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 w-screen ">
      <NavBar presentationRef={presentationRef} tecnologiasRef={tecnologiasRef} proyectosRef={proyectosRef} contactoRef={contactoRef} footerRef={footerRef} />
      <Presentation presentationRef={presentationRef}  />
      <Tecnologias tecnologiasRef={tecnologiasRef} />
      <Proyects proyectsRef={proyectosRef} />
      <Contacto contactoRef={contactoRef} />
      <Footer footerRef={footerRef}/>
    </div>
  );
}

export default App;
