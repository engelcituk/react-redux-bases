import {
    AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS, DESCARGA_PRODUCTOS_EXITO, DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR, PRODUCTO_ELIMINADO_EXITO, PRODUCTO_ELIMINADO_ERROR

} from '../types'

//cada reducer tiene su propio state
const initialState = {
    productos:[],
    error: null,    
    loading: false,
    productoEliminar: null,
}

export default function ( state = initialState, action) {
    switch ( action.type ) {
        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload,
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false, //loader regresa a false
                error: null,
                productos: [ ...state.productos, action.payload ]//mutamos el state de productos
            }
        case AGREGAR_PRODUCTO_ERROR:
        case DESCARGA_PRODUCTOS_ERROR:
            return {
                ...state,
                loading: false, //loader regresa a false
                error: action.payload
            }
        //para descarga de productos
        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false, //loader regresa a false
                error: null,
                productos: action.payload //mutamos el state de productos
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoEliminar: action.payload //mutamos el state de productoEliminar
            }
        default:
            return state;
    }
}