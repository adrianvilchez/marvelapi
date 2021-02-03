import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Heroe from './components/Heroe';



function App() {

  
  const [ heroes, setHeroes ] = useState([]);
  const [ seccion, setSeccion ] = useState('');

  const consultarAPI = async () => {

    const busqueda = 'characters';
    const limit = '100';
    const publicKey = 'f9661b672497c854c70e9c932a8c9d23';
    const hash = '84f0b99511bd68b7258e68d7fdd05dec';

    const api = await fetch(`http://gateway.marvel.com/v1/public/${seccion}?ts=1000&apikey=${publicKey}&hash=${hash}`);
    const datos = await api.json();

    setHeroes(
        ...heroes,
        datos.data.results.map(item => {
            return item
        })
    );
  }

  return (
    <div>
      <h1> Héroes de MARVEL</h1>

      <Formulario
        seccion = {seccion}
        setSeccion = {setSeccion}
        consultarAPI = {consultarAPI}
      />

      { heroes ?
        heroes.map(heroe => (
          <Heroe
              key = {heroe.id}
              name = {heroe.name}
              thumbnail = {heroe.thumbnail}
          />
        ))
        : null
      }

    </div>
  );
}

export default App;
