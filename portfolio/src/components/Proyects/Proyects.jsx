
import sixdays from "../../assets/logos/six-days-supps.png";
import restaurante from "../../assets/logos/restaurante.png";
import futbolizados from "../../assets/logos/futbolizados.png";
import laststore from "../../assets/logos/last-store.png"
import { useState } from "react";

const Proyects = () => {

  const [hoverCard, setHoverCard] = useState(false)
  return (
    <div className='text-center flex flex-col items-center'>
      <h1 className='text-4xl font-serif my-10'> Proyectos a la fecha</h1>
      <div className='grid grid-cols-1 place-items-center lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-64 lg:gap-y-10 '>
        <div  className='border rounded-xl h-96 w-96 flex items-center justify-center  hover:bg-gradient-to-r hover:from-[#1B998B] hover:to-yellow-500 hover:animate-fade-right hover:animate-duration-[3000ms] hover:animate-delay-0 hover:animate-ease-out'></div>
        <div className='border rounded-xl h-96 w-96 flex items-center justify-center  hover:bg-gradient-to-b hover:from-pink-500 hover:to-yellow-500 hover:animate-fade-right hover:animate-duration-[3000ms] hover:animate-delay-0 hover:animate-ease-out'><a target='_blank' href="https://restaurante-js.vercel.app/index.html"><img className='w-64' src={restaurante} alt="restaurante" /></a></div>
        <div className='border rounded-xl h-96 w-96 flex items-center justify-center  hover:bg-gradient-to-b hover:from-pink-500 hover:to-yellow-500 hover:animate-fade-right hover:animate-duration-[3000ms] hover:animate-delay-0 hover:animate-ease-out'><a target='_blank' href="https://ecommerce-react-six-lyart.vercel.app/"><img className='w-64' src={laststore} alt="laststore" /></a></div>
        <div className='border rounded-xl h-96 w-96 flex items-center justify-center  hover:bg-gradient-to-b hover:from-pink-500 hover:to-yellow-500 hover:animate-fade-right hover:animate-duration-[3000ms] hover:animate-delay-0 hover:animate-ease-out'><img className='w-64' src={futbolizados} alt="futbolizados" /></div>
        
      </div>

    </div> 
  )
}

export default Proyects