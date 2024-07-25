'use client'

import React, { useState } from 'react';

const OrderProduct = () => {
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
            <h1>Realizar um pedido</h1>
            <div className="form-group">
                <label>Produto:</label>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                // onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Cliente:</label>
                <textarea
                    name="description"
                    value={product.description}
                // onChange={handleChange}
                />
            </div>
            <div className="form-buttons">
                <button className="cancel-button">Cancelar</button>
                <button type="submit">Confirme</button>
            </div>
        </div>
    );
};

export default OrderProduct;
