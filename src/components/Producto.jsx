import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
//redux
import { useDispatch } from 'react-redux' 
import { borrarProductoAction } from '../actions/productoActions'

const Producto = ({producto}) => {
    //utilizar useDispatch y te crea una función
    const dispatch = useDispatch()

    const { nombre, precio, id } = producto

    const confirmarEliminarProducto = id => {
        //preguntar al usuario
        Swal.fire({
            title: 'Está seguro de borrar el produccto?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borrarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch( borrarProductoAction(id) ) // mandar llamar el action de productoActions
            }
          })
        //pasarlo al action

    }

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
            <Link
                to={`productos/editar/${id}`}
                className="btn btn-primary mr-2"
            >Editar</Link>
            <button
                type='button'
                className='btn btn-danger'
                onClick={ ()=> confirmarEliminarProducto(id) }
            >
                Eliminar
            </button>
            </td>
        </tr>
    )
}

export default Producto