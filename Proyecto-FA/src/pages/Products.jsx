import React, { useEffect, useState } from 'react';
import { getAllItemsService } from '../services/itemServices'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartProvider';

const Products = () => {
    const [productos, setProductos] = useState([]);
    const [products, setProducts] = useState([])
    const { addToCart } = useCartContext();

  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await getAllItemsService()
  
          if (response.status === 200) {
            setProducts(response.data)
          }
        } catch (error) {
          console.log(error)
        }
      }
  
      fetchProducts()
    }, [])

    const handleAddToCart = (product) => {
        addToCart(product);
        console.log("Producto agregado al carrito:", product.product_name);
      };
    
    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await fetch('http://localhost:3000/items');
                const data = await response.json();
                const productosData = data.map(producto => ({
                    image: producto.image,
                    description: producto.description
                }));
                setProductos(productosData);
            } catch (error) {
                console.error('Ocurrió un error :v:', error);
            }
        };

        obtenerProductos();
    }, []);

    return (
        <>
        <h1>Productos</h1>
        <div className='d-flex flex-row flex-wrap justify-content-center'>
          {products && products.map((product) => (
            <div className='card' style={{ width: '18rem' }} key={product.id}>
              <img className='card-img-top' style={{ maxHeight: '300px' }} src={product.image} alt={product.product_name} />
              <div className='card-body'>
                <h5 className='card-title'>{product.product_name}</h5>
                <p className='card-text'>{product.description}</p>
                <Link to={`/product/${product.id}`} className='btn btn-primary'>Comprar</Link>
                <button onClick={() => handleAddToCart(product)} className='btn btn-secondary'>Agregar al Carrito</button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
export default Products;