import { Routes, Route } from 'react-router-dom' //investiga acerca en router y switch//
import Home from '../pages/Home'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import AccountLogin from '../pages/AccountLogin'
import AccountSignup from '../pages/AccountSignup'

const RoutesIndex = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Products' element={<Products />} />
    <Route path='/AccountLogin' element={<AccountLogin />} />
    <Route path='/AccountSignup' element={<AccountSignup />} />
    <Route path='/Cart' element={<Cart />} />
    </Routes>
  )
}

export default RoutesIndex