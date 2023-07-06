export async function  extraerPokemon(){
    let info;
    let minimo = 1;
let maximo = 200;
let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  //hacemos la peticion http
   await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`)
  .then(response => response.json())
  .then(data => {
    info = data;
  })
  .catch(error => {
    // Manejo de errores
    console.error('Error:', error);
  });
console.log(info)
 const pokemon  = {
     imagen: info.sprites.other.dream_world.front_default,
     nombre :info.species.name
 }
  return pokemon ;
}