import React from 'react'
import Navbar from '../componentes/Navbar'
import '../css/Inicio.css'
import hero from '../magenes/imgHero.jpg'

const Inicio = () => {
  return (
    <>

 <Navbar />
<img src={hero} alt="imagen de portada" className='hero'/>

  <div>
    
  </div>

    </>
  )
}

export default Inicio