import React, { useState } from 'react'
import { Button } from "keep-react";
import { FaGithub } from "react-icons/fa";

const Card = ({title, tecnologiasIcons, link, img, construccion,linkCodigo}) => {

    const [hoverCard,setHoverCard] = useState(false)
  return (
    <div onMouseEnter={()=> setHoverCard(true)} onMouseLeave={()=> setHoverCard(false)}  className='border rounded-xl bg-[#fcf5c7] h-96 w-96 flex items-center justify-center  hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-700 hover:animate-fade-right hover:animate-duration-[1000ms] hover:animate-delay-0 hover:animate-ease-out'>
    {hoverCard ? <div className="flex flex-col items-center">
      <span className="text-3xl font-mono mt-0">{title}</span>
      <h3 className="text-xl mt-4">Tecnologias utilizadas</h3>
      <ul className={`flex items-center mt-10 w-full ${tecnologiasIcons.length > 1 ? "justify-between" : "justify-center"}`}>
        {tecnologiasIcons}
       
      </ul>
      <div className='flex items-center mt-10'>

   <a target="_blank" href={link}><Button  className="h-12 mr-10" color={construccion ? "error" : "success"} variant="outline">
  {construccion ? "SITIO EN CONSTRUCCION" : "Ver Sitio Web"}
</Button></a>
<a target='blank' href={linkCodigo}> <Button className='h-12 w-14' color='success' shape="icon"><FaGithub size={24} /></Button></a>
      </div>
      
    </div> : 
    
    <img className='w-64' src={img} alt={title} />}
  </div>
  )
}

export default Card
