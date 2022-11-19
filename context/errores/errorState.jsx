import React, { useReducer } from 'react';

import errorReducer from './errorReducer';
import ErrorContext from './errorContext';
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

const ErrorState = ({children}) => {
    
    const initialState = {
        mensaje: null,
        tipo: null,
        activo: false
    }

    const [state, dispatch] = useReducer(errorReducer, initialState);

    const mostrarAlertaFn = alerta => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: alerta
        });
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            });
        }, 1500);
    }
    
    return (  
        <ErrorContext.Provider
            value={{
                activo: state.activo,
                mensaje: state.mensaje,
                tipo: state.tipo,
                mostrarAlertaFn
            }}
        >{children}</ErrorContext.Provider>
    );
}
 
export default ErrorState;