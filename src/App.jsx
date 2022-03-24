import { BrowserRouter, Routes, Route } from 'react-router-dom'
//redux
import { Provider } from 'react-redux'
import store from './store'

import ProductsLayout from './layouts/ProductsLayout'
import Products from './pages/Products'
import NuevoProducto from './pages/NuevoProducto'
import EditarProducto from './pages/EditarProducto'

function App() {
  return (
    <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<ProductsLayout/>}>
              <Route index element={<Products/>} />
              <Route path='productos/nuevo' element={<NuevoProducto/>} />
              <Route path='productos/editar/:id' element={<EditarProducto/>} />
            </Route>
          </Routes>
        </Provider>
    </BrowserRouter>
  );
}

export default App

// json-server db.json --port 4000
// npm i react-redux redux redux-thunk