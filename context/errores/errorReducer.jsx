import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return{
                ...state,
                mensaje: action.payload.mensaje,
                tipo: action.payload.tipo,
                activo: true
            };
        case OCULTAR_ALERTA:
            return{
                ...state,
                mensaje: null,
                tipo: null,
                activo: false
            }
        default:
            return state;
    }    
}