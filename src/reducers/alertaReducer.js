import { MONSTRAR_ALERTA, OCULTAR_ALERTA } from '../types'

//cada reducer tiene su propio state
const initialState = {
    alerta: null,
}

export default function ( state = initialState, action) {
    switch ( action.type ) {
        case MONSTRAR_ALERTA:
            return {
                ...state,
                alerta: action.payload,
            }
        case OCULTAR_ALERTA:
            return {
                ...state,
                alerta: action.payload,
            }
        default:
            return state;
    }
}