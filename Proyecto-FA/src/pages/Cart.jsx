import React from 'react';
import { useCartContext } from '../context/CartProvider';

const Cart = () => {
  const { cart, removeFromCart } = useCartContext();

  return (
    <>
      <h1>Carrito de Compras</h1>
      <div>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Cart;