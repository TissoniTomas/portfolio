
import NavBar from "./components/NavBar/NavBar";
import Presentation from "./components/Presentation/Presentation";
import Tecnologias from "./components/Tecnologias/Tecnologias";
import Proyects from "./components/Proyects/Proyects";


function App() {
  return (
    <>

    <div class="bg-gradient-to-b from-black to-[#938581] w-screen ">
        <NavBar />
        <Presentation />
        <Tecnologias />
        <Proyects />
    </div>
      
    </>
  );
}

export default App;
