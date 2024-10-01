import React from 'react'
import { Link } from "react-router-dom"
import logo from '../magenes/logo.jpg'

import menu from '../magenes/menu.png'

import'./Navbar.css'
const Navbar = () => {
  return (
    <>
        <div className='navb'>
          <img src={logo} alt="imagen del logo" height='100px'/>

          <div className='link'>    
             
            {/* <Link to='./inicio'>Inicio</Link> */}
            <Link to='/NuestraVision' className='linke'>Nuestra Vision</Link>
            <Link to='/Proyectos' className='linke'>Proyectos</Link>
            <Link to='/SobreNosotros' className='linke'>Sobre Nosotros</Link>
            <Link to='/Contacto' className='linke'>Contactos</Link>
           </div>
           <img src={menu} alt="imagen de menu" className='logotipo' height='30px'/>
        </div>

    </>
    
  )
}

export default Navbar