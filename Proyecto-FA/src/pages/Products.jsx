import React, { useEffect, useState } from 'react';

const Products = () => {
    const [productos, setProductos] = useState([]);

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
        <div className="container">
            <h2 className='text-center'>Productos</h2>
            <div className="row">
                {productos.map((product, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt="Producto" />
                            <div className="card-body">
                                <p className="card-text">{product.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Products;