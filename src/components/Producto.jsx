import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
//redux
import { useDispatch } from 'react-redux' 
import { borrarProductoAction } from '../actions/productoActions'

const Producto = ({producto}) => {
    const navigate = useNavigate()
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
                //pasarlo al action
                dispatch( borrarProductoAction(id) ) // mandar llamar el action de productoActions
            }
        })
    }
    //función que redirige de forma programada
    const redireccionarEdicion = producto => {
      navigate(`productos/editar/${id}`)
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
            <button
                type='button'
                className="btn btn-primary mr-2"
                onClick={ () => redireccionarEdicion(producto)}
            >Editar</button>
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