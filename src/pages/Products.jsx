import { useEffect, useState } from 'react'

//Actions de redux
import { obtenerProductosAction } from '../actions/productoActions'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
  //utilizar useDispatch y te crea una función
  const dispatch = useDispatch()
  //acceder al state del store
  const productos = useSelector( state => state.productos.productos )
  
  useEffect(() => {
    //consultar la api
    const cargarProductos = () => dispatch( obtenerProductosAction() )
    cargarProductos()
  }, [])
  console.log(productos)
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
          
        </tbody>
      </table>
    </>
  )
}

export default Products