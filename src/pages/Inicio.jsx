import React from 'react'
import Navbar from '../componentes/Navbar'
import '../css/Inicio.css'
import hero from '../magenes/imgHero.jpg'

// import carrusel1 from '../magenes/caarrusel1.jpg'
// import carrusel2 from '../magenes/carrusel2.jpg'
// import corazonColor from '../magenes/corazonColor.jpg'


const Inicio = () => {


  
  return (
    <>

 <Navbar />
 <div className='fototo'>  
   
 <p className='parrafo'>EMPATEA</p>
<img src={hero} alt="imagen de portada" className='hero'/>
</div>
 













    </>
  )
}

export default Inicio