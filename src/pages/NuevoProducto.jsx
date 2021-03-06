import { useState } from 'react'
import { useNavigate } from "react-router-dom"
//Actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions'
import { mostrarAlertaAction, ocultarAlertaAction } from '../actions/alertaActions' //actions de alertas
import { useDispatch, useSelector } from 'react-redux'

const NuevoProducto = ({history}) => {
  const navigate = useNavigate()
  //state del componente
  const [ nombre, setNombre ] = useState('')
  const [ precio, setPrecio ] = useState(0)

  //utilizar useDispatch y te crea una función
  const dispatch = useDispatch()
  //acceder al state del store
  const cargando = useSelector( state => state.productos.loading )
  const error = useSelector( state => state.productos.error )
  const alerta = useSelector( state => state.alerta.alerta )


  //mandar llamar el action de productoActions
  // const agregarProduct = ( producto ) => dispatch( crearNuevoProductoAction(producto) )

  const handleSubmit = e => {
    e.preventDefault()
    //Validar formulario
    if( nombre.trim() === '' || precio <= 0 ){
      const alerta = {
        msg: 'Ambos campos son obligatorios',
        classes: 'alert alert-danger text-center text-uppercase p3'
      }
      dispatch( mostrarAlertaAction( alerta ) ) // mandar llamar el action de alertaActions
      return 
    }
    //sino hay errores
    //crear nuevo producto
    dispatch( crearNuevoProductoAction({nombre, precio}) ) // mandar llamar el action de productoActions

    if(!error){
      dispatch( ocultarAlertaAction( alerta ) ) // mandar llamar el action de alertaActions, para limpiar alerta
      //redireccionar
      navigate('/')
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Agregar nuevo producto</h2>
            {
              alerta && (
                <p className={alerta.classes}>{alerta.msg}</p>
              )
            }
            <form
              onSubmit={handleSubmit}
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
                  onChange={ e => setNombre( e.target.value )}
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
                  onChange={ e => setPrecio(Number(e.target.value ))}
                />
              </div>
              <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                Agregar
              </button>
            </form>
            {
              cargando ? <p>Cargando</p> : null
            }
            {
              error ? <p className='alert alert-danger p-2 mt-4 text-center '>Hubo un error</p> : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default NuevoProducto