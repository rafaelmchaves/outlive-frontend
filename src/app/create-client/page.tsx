'use client'

import "./page.css";
import React, { useState } from 'react';

const CreateClient = () => {
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
            <h1>Order a product</h1>
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
                <label>CEP:</label>
                <textarea
                    name="description"
                    value={product.description}
                // onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Endereço:</label>
                <textarea
                    name="description"
                    value={product.description}
                // onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Cidade:</label>
                <textarea
                    name="description"
                    value={product.description}
                // onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Telefone:</label>
                <textarea
                    name="description"
                    value={product.description}
                // onChange={handleChange}
                />
            </div>
            <div className="form-buttons">
                <button>Cancelar</button>
                <button>Confirmar</button>
            </div>
        </div>
    );
};

export default CreateClient;