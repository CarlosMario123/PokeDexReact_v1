import { useEffect,useState } from "react";
import { extraerPokemon } from "../extraerPoke";

export const Card = ()=>{
    const [Poke, setPoke] = useState({});
    //obtener pokemon
    useEffect(() => {
      const ObtenerPokemon = async () => {
        try {
          const data = await extraerPokemon();
            setPoke(data);
            console.log(data)
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      ObtenerPokemon();
    }, []);
     
    return (
        <div className=" w-64 h-80 flex justify-center items-center mt-10 py-10 rounded-xl flex-col grade">
            <div className='w-48 h-48 rounded-xl bg-white overflow-hidden items-center hover:overflow-visible'>
           <img src={Poke.imagen} alt="" className="hover:scale-150"  />
        </div>
          <p className="text-white font-bold text-center text-3xl">{Poke.nombre}</p>
        </div>
        
    )
}