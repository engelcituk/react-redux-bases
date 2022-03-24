import { useEffect, useState } from 'react'
import Producto from '../components/Producto'

//Actions de redux
import { obtenerProductosAction } from '../actions/productoActions'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
  //utilizar useDispatch y te crea una función
  const dispatch = useDispatch()
  //acceder al state del store
  const productos = useSelector( state => state.productos.productos )
  const cargando = useSelector( state => state.productos.loading )
  const error = useSelector( state => state.productos.error )
  
  useEffect(() => {
    //consultar la api
    const cargarProductos = () => dispatch( obtenerProductosAction() )
    cargarProductos()
  }, [])
  return (
    <>
      <h2 className="text-center my-5"> Listado de productos</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.length === 0 ?
            (
              <tr>
                <td colSpan='3'>No hay productos</td>
              </tr>
            )
            : (
              productos.map(producto => (
                <Producto key={producto.id} producto={producto} />
              ))
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default Products