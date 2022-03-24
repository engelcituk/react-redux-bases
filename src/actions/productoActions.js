import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR } from '../types'

//crear nuevos productso
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch( agregarProducto() )
        try {
            dispatch( agregarProductoExito(producto) )
        } catch (error) {
            dispatch( agregarProductoError(true) )
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})
//si el producto se guarda en la bd
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
//si hubo un error
const agregarProductoError = bool => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: bool
})