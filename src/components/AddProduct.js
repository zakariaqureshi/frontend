import React, { useState } from 'react';
import API from '../axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');

  const addProduct = () => {
    const newProduct = { name, price, description, stock };

    API.post('/', newProduct)
      .then(response => {
        alert('Product added');
        setName('');
        setPrice('');
        setDescription('');
        setStock('');
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <button onClick={addProduct}>Add</button>
    </div>
  );
};

export default AddProduct;
