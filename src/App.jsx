import { Routes, Route } from 'react-router-dom'

import './App.css'


import Inicio from './pages/Inicio'
import NuestraVision from './pages/NuestraVision'
import Proyectos from './pages/Proyectos'
import SobreNosotros from './pages/SobreNosotros'
import Contacto from './pages/Contacto'

function App() {
 

  return (
    <>
    
    <div className='nav'>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/NuestraVision' element={<NuestraVision/>} />
        <Route path='/Proyectos' element={<Proyectos/>} />
        <Route path='/SobreNosotros' element={<SobreNosotros/>} />
        <Route path='/Contacto' element={<Contacto/>} />
      </Routes>

    </div>
     
    </>
  )
}

export default App
