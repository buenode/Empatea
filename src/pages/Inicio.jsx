import React from 'react'
import Navbar from '../componentes/Navbar'
import '../css/Inicio.css'
import hero from '../magenes/imgHero.jpg'

const Inicio = () => {
  return (
    <>

 <Navbar />
<img src={hero} alt="imagen de portada" height="500px"/>

  

    </>
  )
}

export default Inicio