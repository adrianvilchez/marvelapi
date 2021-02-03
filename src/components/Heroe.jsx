import React from 'react';

const Heroe = ({id, name, thumbnail}) => {

    return (
        <div>
            <p>nombre: {name}</p>
            <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="" />
        </div>
    )
}

export default Heroe;
