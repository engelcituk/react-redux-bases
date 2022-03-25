import {
    AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS, DESCARGA_PRODUCTOS_EXITO, DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR, PRODUCTO_ELIMINADO_EXITO, PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR, COMENZAR_EDICION_PRODUCTO, PRODUCTO_EDITADO_EXITO, PRODUCTO_EDITADO_ERROR,
} from '../types'

import clienteAxios from '../config/axios'  
import Swal from 'sweetalert2'

//crear nuevos productso
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch( agregarProducto() )
        try {
            //insertar en la API
            await clienteAxios.post('/productos', producto)
            //si todo sale bien, actualiza el state
            dispatch( agregarProductoExito(producto) )
            //Alert success
            Swal.fire(
                'Correcto',
                'El producto se ha agregado correctamente',
                'success'
            )
        } catch (error) {
            console.log(error.response)
            //si hay un error cambiar el state error
            dispatch( agregarProductoError(true) )
            //Alert error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
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

//Función que obtiene los productos desde la API
export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch( descargarProductos() )
        try {
            //obtenemos en la API
            const respuesta = await clienteAxios('/productos')

            //si todo sale bien, actualiza el state
            dispatch( descargarProductosExito(respuesta.data) )
            //Alert success
            
        } catch (error) {
            console.log(error.response)
            //si hay un error cambiar el state error
            dispatch( descargarProductosError(true) )
           
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})
//si la petición fue exitosa
const descargarProductosExito = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})
//si hubo un error
const descargarProductosError = bool => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: bool
})

//selecciona y elimina el producto
export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch( obtenerProductoEliminar(id) )
        try {
            //eliminamos en la API
           await clienteAxios.delete(`/productos/${id}`)
            //si todo sale bien, actualiza el state
            dispatch( borrarProductoExito() )
            //Alert success
            Swal.fire(
                'Borrado!',
                'Producto borrado.',
                'success'
              )
        } catch (error) {
            console.log(error.response)
            //si hay un error cambiar el state error
            dispatch( borrarProductoError(true) )
        }
    }   
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})
//si la petición fue exitosa
const borrarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO,
})
//si hubo un error
const borrarProductoError = bool => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: bool
})

//Colocar producto en edición
export function obtenerProductoEditarAction(producto) {
    return (dispatch) => {
        dispatch( obtenerProductoAction(producto) )
    }
}

const obtenerProductoAction = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

//Edita un registro en la api
export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch( editarProducto(producto) )
        try {
            //actualizamos en la API
           await clienteAxios.put(`/productos/${producto.id}`, producto)
            //si todo sale bien, actualiza el state
            dispatch( editarProductoExito(producto) )
            //Alert success
            Swal.fire(
                'Actualizado!',
                'Producto actualizado.',
                'success'
              )
        } catch (error) {
            console.log(error)
            //si hay un error cambiar el state error
            dispatch( editarProductoError(true) )
        }
    }   
}

const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO,  
})
//si la petición fue exitosa
const editarProductoExito = producto => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})
//si hubo un error
const editarProductoError = bool => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: bool
})