import React, { Fragment, useState, useEffect } from 'react';

export const Formulario = ({seccion, setSeccion, consultarAPI}) => {

    const [carga, setCarga] = useState(false);

    const obtenerInformacion = e => {
        e.preventDefault();

        setSeccion(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        setCarga(true);
        consultarAPI();
    }

    return (
        <Fragment>
            <form onSubmit = { handleSubmit }>
                <select
                    name = 'seccion'
                    value = { seccion }
                    onChange = { obtenerInformacion }
                >
                    <option value="">-- Selecciona seccion --</option>
                    <option value="characters">Personajes</option>
                    <option value="comics">Comics</option>
                    <option value="creators">Creadores</option>
                    <option value="events">Eventos</option>
                    <option value="series">Series</option>
                    <option value="stories">Historias</option>
                </select>

                <button
                    type = 'submit'
                    value = ''
                    >Consultar
                </button>
            </form>
        </Fragment>
    )
}

export default Formulario;
