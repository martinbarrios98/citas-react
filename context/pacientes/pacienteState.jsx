import React, { useReducer } from 'react';

import pacienteReducer from './pacienteReducer';
import pacienteContext from './pacienteContext';
import { CREAR_PACIENTE, EDITAR_PACINETE, ELIMINAR_PACIENTE, PACIENTE_ACTIVO, QUITAR_PACIENTE } from '../../types';

const PacienteState = ({children}) => {

    const initialState = {
        lista: [],
        pacienteActivo: {},
        index: null
    }

    const [state, dispatch] = useReducer(pacienteReducer, initialState);

    const crearPacienteFn = paciente => {
        if(!localStorage.getItem('lista')){
            console.log('No existe una lista en el storage');
        }
        dispatch({
            type: CREAR_PACIENTE,
            payload: paciente
        });
    }

    const agregarPacienteActivoFn = (paciente, index) => {
        dispatch({
            type: PACIENTE_ACTIVO,
            payload: {
                paciente,
                index
            }
        });
    }

    const quitarPacienteActivoFn = () => {
        dispatch({
            type: QUITAR_PACIENTE
        });
    }

    const editarPacienteFn = paciente => {
        dispatch({
            type: EDITAR_PACINETE,
            payload: paciente
        })
    }

    const eliminarPacientFn = paciente => {
        dispatch({
            type: ELIMINAR_PACIENTE,
            payload: paciente
        });
    }
    
    return (  
        <pacienteContext.Provider
            value={{
                lista: state.lista,
                pacienteActivo: state.pacienteActivo,
                crearPacienteFn,
                eliminarPacientFn,
                agregarPacienteActivoFn, 
                quitarPacienteActivoFn,
                editarPacienteFn
            }}
        >{children}</pacienteContext.Provider>
    );
}
 
export default PacienteState;