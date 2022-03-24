import { useEffect, useState } from 'react'

//Actions de redux
import { obtenerProductosAction } from '../actions/productoActions'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
  //utilizar useDispatch y te crea una función
  const dispatch = useDispatch()
  
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
          
        </tbody>
      </table>
    </>
  )
}

export default Products