import React from 'react'

const Cart = () => {
  return (
    <div>Cart</div>
  )
}

export default Cart

/*

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, id) => (
            <li key={id}>
              <strong>{item.name}</strong> - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};*/

