'use client'

import "./page.css";
import React, { useState } from 'react';

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        type: '',
        price: '',
        fraction: ''
    });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setProduct({ ...product, [name]: value });
    // };

    // const handleCancel = () => {
    //     setProduct({
    //         name: '',
    //         description: '',
    //         type: '',
    //         price: '',
    //         fraction: ''
    //     });
    // };

    // const handleConfirm = () => {
    //     // Handle the form submission logic here, e.g., sending the product data to a server
    //     console.log('Product created:', product);
    //     handleCancel(); // Reset form after submission
    // };

    return (
        <div className="product-form">
            <h1>Cadastrar novo produto</h1>
            <div className="form-group">
                <label>Nome:</label>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                // onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Descrição:</label>
                <textarea
                    name="description"
                    value={product.description}
                // onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Tipo:</label>
                <input
                    type="text"
                    name="type"
                    value={product.type}
                // onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Preço:</label>
                <input
                    type="text"
                    name="price"
                    value={product.price}
                // onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Peso:</label>
                <input
                    type="text"
                    name="fraction"
                    value={product.fraction}
                // onChange={handleChange}
                />
            </div>
            <div className="form-buttons">
                <button className=".cancel-button ">Cancelar</button>
                <button type="submit">Cadastrar</button>
            </div>
        </div>
    );
};

export default ProductForm;
