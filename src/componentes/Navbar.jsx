import React from 'react'
import { Link } from "react-router-dom"
import logo from '../magenes/logo.jpg'
import { useState } from 'react'

import menu from '../magenes/menu.png'

import'./Navbar.css'
const Navbar = () => {

    const [manu, setManu] = useState(false)

    const abrir = () => {
      setManu(!manu)
    }

    // const abrir = () => {
    //   setMenu(!menu)
    // }

false
    return (                                       
    <>
        <div className='navb'>  
                                       
            <img src={logo} alt="imagen del logo"  className="logo" />  
            

             
              
          <div className={`link ${ manu ? 'isActive' : ''}`}> 
            {/* <Link to='./inicio'>Inicio</Link> */}
            <Link to='/NuestraVision' className='linke'>Nuestra Vision</Link>
            <Link to='/Proyectos' className='linke'>Proyectos</Link>
            <Link to='/SobreNosotros' className='linke'>Sobre Nosotros</Link>
            <Link to='/Contacto' className='linke'>Contactos</Link>
            
           </div>

          

           <button onClick={abrir}>   
           <img src={menu} alt="imagen de menu" className='logotipo'/>
           </button>

           <Link to='/'inicio className='linke'>regresar</Link>
           
        </div>

           
     
        

    </> 
    
  )
}

export default Navbar