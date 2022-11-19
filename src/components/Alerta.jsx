import React, { useContext } from 'react';

import errorContext from '../../context/errores/errorContext';

const Alerta = () => {

    const { tipo, mensaje } = useContext(errorContext);

    return (  
        <div
            className={`${tipo} sombra`}
        >
            <p>{mensaje}</p>
        </div>
    );
}
 
export default Alerta;