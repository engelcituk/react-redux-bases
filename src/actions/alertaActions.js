import { MONSTRAR_ALERTA, OCULTAR_ALERTA } from '../types'

//mostrar alerta
export function mostrarAlertaAction(alerta) {
    return (dispatch) => {
        dispatch( crearAlerta(alerta) )
    }
}

const crearAlerta = (alerta) => ({
    type: MONSTRAR_ALERTA,
    payload: alerta
})

//ocultar alerta
export function ocultarAlertaAction() {
    return async (dispatch) => {
        dispatch( ocultarAlertaError() )
       
    }
}

const ocultarAlertaError = () => ({
    type: OCULTAR_ALERTA,
    payload: null
})

