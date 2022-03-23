import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const ProductsLayout = () => {
  return (
    <>
      <Header/>
      <main className='container mt-5'>
          <Outlet/>
      </main>
    </>
  )
}

export default ProductsLayout