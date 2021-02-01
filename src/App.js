import React, { useState, useEffect } from 'react';

function App() {

  const [heroes, setHeroes] = useState([]);

  const consultarAPI = async () => {

    const busqueda = 'characters';
    const limit = '100';
    const publicKey = 'f9661b672497c854c70e9c932a8c9d23';
    const hash = '84f0b99511bd68b7258e68d7fdd05dec';

    const api = await fetch(`http://gateway.marvel.com/v1/public/${busqueda}?limit=${limit}&ts=1000&apikey=${publicKey}&hash=${hash}`);
    const datos = await api.json();

    datos.data.results.map(item =>{
      addHeroe(item);
    });
  }

  const addHeroe = heroe => {
    setHeroes([
      ...heroes,
      {
        id: heroe.id,
        name: heroe.name,
        url: `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`
      }
    ])
  }

  console.log(heroes);

  return (
    <div>
      <h1> Héroes de MARVEL</h1>

      <button
        onClick = { consultarAPI }
      > 
          Consultar
      </button>
    </div>
  );
}

export default App;
