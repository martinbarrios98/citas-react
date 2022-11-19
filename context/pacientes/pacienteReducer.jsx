import { CREAR_PACIENTE, EDITAR_PACINETE, ELIMINAR_PACIENTE, PACIENTE_ACTIVO, QUITAR_PACIENTE } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case CREAR_PACIENTE:
            return{
                ...state,
                lista: [
                    ...state.lista,
                    action.payload
                ]
            };
        case ELIMINAR_PACIENTE:
            return{
                ...state,
                lista: state.lista.filter((item, index) => index !== action.payload)
            };
        case PACIENTE_ACTIVO:
            return{
                ...state,
                pacienteActivo: action.payload.paciente,
                index: action.payload.index
            };
        case QUITAR_PACIENTE:
            return{
                ...state,
                pacienteActivo: {},
                index: null
            };
        case EDITAR_PACINETE: 
            return{
                ...state,
                lista: state.lista.map( (item, index) => index === state.index ? action.payload : item),
                index: null,
                pacienteActivo: {}
            }
        default:
            return state;
    }
}