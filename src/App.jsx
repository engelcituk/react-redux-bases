import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProductsLayout from './layouts/ProductsLayout'
import Products from './pages/Products'
import NuevoProducto from './pages/NuevoProducto'
import EditarProducto from './pages/EditarProducto'


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductsLayout/>}>
            <Route index element={<Products/>} />
            <Route path='productos/nuevo' element={<NuevoProducto/>} />
            <Route path='productos/editar/:id' element={<EditarProducto/>} />

          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
