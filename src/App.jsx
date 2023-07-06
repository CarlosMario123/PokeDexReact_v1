import { Card } from './Componentes/Card'
import './App.css'
import { useState } from 'react';

function App() {
  
   const [estado, setestado] = useState(false);
   const cambiar = () =>{
    if(estado){
      setestado(false);
    }else{
      setestado(true)
    }
     
   }
  return (
      <div className=" fondo h-screen flex flex-col items-center">
           <h1 className='font-black text-white text-center text-5xl  py-5 w-1/2 rounded-lg'>Tus Pokemones</h1>
           {
             estado ? <Contenedor /> :<div><Contenedor /> </div>
           }
         
           <button onClick={cambiar} className='grade2 text-white text-3xl py-3 px-3 rounded-xl mt-10'>Buscar pokemon</button>
      </div>
      
  )
}

function Contenedor(){
 return <div className='flex items-center gap-x-10 justify-center'>
      
         <Card/>
        <Card/>
        <Card/>
  </div>


}

export default App
