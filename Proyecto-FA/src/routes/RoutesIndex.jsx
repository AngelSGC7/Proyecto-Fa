import { Routes, Route } from 'react-router-dom' //investiga acerca en router y switch//
import { Home, Products, Cart, AccountLogin, AccountSignup, ProductDetail, Error404 } from '../pages'

const RoutesIndex = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Products' element={<Products />} />
    <Route path='/product/:pid' element={<ProductDetail />} />
    <Route path='/AccountLogin' element={<AccountLogin />} />
    <Route path='/AccountSignup' element={<AccountSignup />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default RoutesIndex