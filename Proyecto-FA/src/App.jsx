import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'
import Header from './components/Header/header'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartProvider'

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider> 
          <BrowserRouter>
            <Header/>
            <RoutesIndex/>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
