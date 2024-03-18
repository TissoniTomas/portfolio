import React from 'react'
import { Divider } from 'keep-react'

import fotoPortfolio from "../../assets/foto-portfolio/foto-portfolio.jfif"

const Presentation = ({presentationRef}) => {
  return (
    <div id='presentation' ref={presentationRef} className='text-center hover:animate-fade-right hover:animate-once hover:animate-duration-2000 hover:animate-delay-0  '>
        
    <h1 className='font-serif text-6xl font-extrabold mt-32 text-white '>Front-End React Developer today...</h1>
    <div className='flex w-full px-20 items-center justify-around mt-20 animate-fade animate-once animate-duration-1000 animate-delay-500'>

    <p className='mt-10 text-white text-4xl mr-20'>
        ¡Hola!. Mi nombre es Tomás Salvador Tissoni, tengo 26 años, y en el ultimo tiempo encontre muchisima diversion e interes desarrollando interfaces de usuarios orientados a e-commerce. Te invito a que repases mi preparacion y proyectos para que sepas lo que soy capaz de hacer. Me encuentro en constante formacion, actualmente estudiando bases de datos y programacion backend por lo que jamas le cierro la puerta a ningun desafio nuevo. ¡Quien sabe lo que uno puede llegar a lograr!
    </p>
    <img className='w-[400px] h-[400px] border border-black rounded-2xl' src={fotoPortfolio} alt="" />
    </div>
    <Divider color="error" className='mt-20' />
    </div>
  )
}

export default Presentation