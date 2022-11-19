import React, { useContext } from 'react';

import PacienteContext from '../../context/pacientes/pacienteContext';

import Paciente from './Paciente';

const ListadoPacientes = () => {

    const { lista } = useContext(PacienteContext);

    return (  
        <div
            className="listado-pacientes"
        >

            <h2>Listado de pacientes</h2>
            <p>Administra tus <span>Pacientes y Citas</span> </p>

            <div>
                {
                    lista.length ? 
                        lista.map( (item, index) => {
                            return(
                                <Paciente 
                                    item={item}
                                    index={index}
                                    key={index}
                                />
                            )
                        })
                    :
                        <p>No hay registros</p>
                }
            </div>

        </div>
    );
}
 
export default ListadoPacientes;