import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
const NavBar = () => {

    const [menu, setMenu] = useState(false);

  return (
    <>

    <div className='flex justify-end relative lg:hidden' onClick={()=>setMenu(!menu)}>
        {menu ? <FaXmark size={30} color='red'/> : <FaBars size={30} color='red' />}
        {menu &&
        <div className='relative h-40'>
            <ul className='absolute right-36 top-20 z-999 '>
                <li>Sobre mi</li>
                <li>Tecnologias</li>
                <li>Proyectos </li>
                <li>Contacto</li>
            </ul>
            </div>}
    

    
    </div>
    </>
  )
}

export default NavBar