import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR } from '../types'
import clienteAxios from '../config/axios'  
//crear nuevos productso
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch( agregarProducto() )
        try {
            //insertar en la API
            await clienteAxios.post('/productos', producto)
            //si todo sale bien, actualiza el state
            dispatch( agregarProductoExito(producto) )
        } catch (error) {
            console.log(error.response)
            //si hay un error cambiar el state error
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