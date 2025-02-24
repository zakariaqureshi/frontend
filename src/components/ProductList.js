import React, { useState, useEffect } from 'react';
import API from '../axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  const deleteProduct = (id) => {
    API.delete(`/${id}`)
      .then(() => {
        setProducts(products.filter(product => product._id !== id));
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price}
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
