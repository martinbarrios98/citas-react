import React, { useState, useContext, useEffect } from 'react';
import Swal from 'sweetalert2';

import PacienteContext from '../../context/pacientes/pacienteContext';
import ErrorContext from '../../context/errores/errorContext';

const Formulario = () => {

    const { pacienteActivo, crearPacienteFn, quitarPacienteActivoFn, editarPacienteFn } = useContext(PacienteContext);
    const { mostrarAlertaFn } = useContext(ErrorContext);

    const [ paciente, setPaciente ] = useState({
        mascota: '',
        propietario: '',
        correo: '',
        alta: '',
        sintomas: ''
    });

    useEffect( () => {

        if(!Object.keys(pacienteActivo).length) return null;

        setPaciente({
            ...pacienteActivo
        });

    }, [pacienteActivo])

    const { mascota, propietario, correo, alta, sintomas } = paciente;
    
    const onSubmit = e => {
        e.preventDefault();

        let error = false;

        Object.values(paciente).forEach( item => {
            if(item === ''){
                error = true;
            }
        });

        if(error) return mostrarAlertaFn({
            tipo: 'alerta error',
            mensaje: 'No se admite campos vacios'
        });

        crearPacienteFn(paciente);

        setPaciente({
            mascota: '',
            propietario: '',
            correo: '',
            alta: '',
            sintomas: ''
        });

    }

    const onSubmitEditar = e => {
        e.preventDefault();
        let error = false;

        Object.values(paciente).forEach( item => {
            if(item === ''){
                error = true;
            }
        });

        if(error) return mostrarAlertaFn({
            tipo: 'alerta error',
            mensaje: 'No se admite campos vacios'
        });

        editarPacienteFn(paciente);

        setPaciente({
            mascota: '',
            propietario: '',
            correo: '',
            alta: '',
            sintomas: ''
        });

    }

    return (  
        <div
            className="formulario"
        >
            <h2>Seguimiento de Pacientes</h2>
            <p>Añade Pacientes y {''} <span>Administralos</span></p>
            <form
                className="sombra"
                onSubmit={ !Object.keys(pacienteActivo).length ? onSubmit : onSubmitEditar}
            >
                <div
                    className="campo"
                >
                    <label
                        htmlFor="mascota"
                    >Nombre Mascota</label>
                    <input 
                        type="text"
                        name="mascota"
                        id="mascota"
                        placeholder="Nombre de la mascota"
                        value={mascota}
                        onChange={ e => setPaciente({
                            ...paciente,
                            [e.target.name]: e.target.value
                        })}
                    />
                </div>

                <div
                    className="campo"
                >
                    <label
                        htmlFor="propietario"
                    >Nombre Propietario</label>
                    <input 
                        type="text"
                        name="propietario"
                        id="propietario"
                        placeholder="Nombre del propietario"
                        value={propietario}
                        onChange={ e => setPaciente({
                            ...paciente,
                            [e.target.name]: e.target.value
                        })}
                    />
                </div>

                <div
                    className="campo"
                >
                    <label
                        htmlFor="correo"
                    >Correo de Contacto</label>
                    <input 
                        type="text"
                        name="correo"
                        id="correo"
                        placeholder="Correo del Propietario"
                        value={correo}
                        onChange={ e => setPaciente({
                            ...paciente,
                            [e.target.name]: e.target.value
                        })}
                    />
                </div>

                <div
                    className="campo"
                >
                    <label
                        htmlFor="alta"
                    >Fecha de Alta</label>
                    <input 
                        type="date"
                        name="alta"
                        id="alta"
                        value={alta}
                        onChange={ e => setPaciente({
                            ...paciente,
                            [e.target.name]: e.target.value
                        })}
                    />
                </div>

                <div
                    className="campo"
                >
                    <label
                        htmlFor="sintomas"
                    >Sìntomas</label>
                    <textarea
                        id="sintomas"
                        name="sintomas"
                        placeholder="Ingrese los sìntomas"
                        value={sintomas}
                        onChange={ e => setPaciente({
                            ...paciente,
                            [e.target.name]: e.target.value
                        })}
                    ></textarea>
                </div>
                {
                    !Object.keys(pacienteActivo).length ? 
                        null
                    :
                        <button
                            type="button"
                            onClick={ e => {
                                quitarPacienteActivoFn();
                                setPaciente({
                                    mascota: '',
                                    propietario: '',
                                    correo: '',
                                    alta: '',
                                    sintomas: ''
                                });
                            }}
                        >Cancelar</button>
                }
                <input 
                    type="submit"
                    value={ !Object.keys(pacienteActivo).length ? 'Agregar Paciente' : 'Editar Paciente' }
                />

            </form>
        </div>
    );
}
 
export default Formulario;