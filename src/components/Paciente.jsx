import React, { useContext } from 'react';

import PacienteContext from '../../context/pacientes/pacienteContext';

const Paciente = ({item, index}) => {
    
    const { eliminarPacientFn, agregarPacienteActivoFn } = useContext(PacienteContext);

    const { mascota, propietario, correo, alta, sintomas } = item;

    const editar = () => {
        agregarPacienteActivoFn(item, index);
    }

    const eliminar = () => {
        eliminarPacientFn(index);
    }

    return (  
        <ul
            className="paciente sombra"
        >
            <li>
                <p>Nombre Mascota: <span>{mascota}</span> </p>
            </li> 
            <li>
                <p>Propietario: <span>{propietario}</span> </p>
            </li> 
            <li>
                <p>Correo Contacto: <span>{correo}</span> </p>
            </li> 
            <li>
                <p>Alta: <span>{alta}</span> </p>
            </li> 
            <li>
                <p>Sìntomas: <span>{sintomas}</span> </p>
            </li> 
            <li>
                <button
                    type="button"
                    onClick={ e => eliminar()}
                >Eliminar</button>
                <button
                    type="button"
                    onClick={e => editar()}
                >Editar</button>
            </li>
        </ul>
    );
}
 
export default Paciente;