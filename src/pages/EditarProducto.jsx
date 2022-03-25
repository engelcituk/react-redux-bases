import { useDispatch, useSelector } from 'react-redux'

const EditarProducto = () => {

  const producto = useSelector( state => state.productos.productoEditar )
  if(!producto) return null
  const { nombre, precio, id } = producto

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Editar producto</h2>
            <form>
              <div className="form-group">
                <label htmlFor="nombre-producto">Nombre producto</label>
                <input
                  id="nombre-producto"
                  type="text"
                  className="form-control"
                  placeholder="Nombre producto"
                  name="nombre"
                  value={nombre}
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