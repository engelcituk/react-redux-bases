import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { editarProductoAction } from '../actions/productoActions'

const EditarProducto = () => {
  const navigate = useNavigate()
  //nuevo state de producto
  const [ producto, setProducto ] = useState({
    nombre: '',
    precio: 0,
  })
 
  //utilizar useDispatch y te crea una función
  const dispatch = useDispatch()
  //producto editar
  const productoEditar = useSelector( state => state.productos.productoEditar )
  const error = useSelector( state => state.productos.error )

  //llenar el state automaticamente con 
  useEffect(() => {
    setProducto(productoEditar)
  }, [productoEditar])
  //leer los datos del formulario
  const onChangeFormulario = e => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  const { nombre, precio } = producto

  const submitEditarProducto = e => {
    e.preventDefault()
    //Validar formulario
    if( nombre.trim() === '' || precio <= 0 ){
      return 
    }
    dispatch( editarProductoAction(producto) ) // mandar llamar el action de productoActions
    //sino hubo error redirijo al home
    if(!error){
      //redireccionar
      navigate('/')
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Editar producto</h2>
            <form
              onSubmit={submitEditarProducto}
            >
              <div className="form-group">
                <label htmlFor="nombre-producto">Nombre producto</label>
                <input
                  id="nombre-producto"
                  type="text"
                  className="form-control"
                  placeholder="Nombre producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeFormulario}
                />
              </div>
              <div className="form-group">
                <label htmlFor="precio-producto">Precio del producto</label>
                <input
                  id="precio-producto"
                  type="number"
                  className="form-control"
                  placeholder="Precio producto"
                  name="precio"
                  value={precio}
                  onChange={onChangeFormulario}
                />
              </div>
              <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                Guardar cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditarProducto