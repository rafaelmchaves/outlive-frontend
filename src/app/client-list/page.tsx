'use client'

import "./page.css";
import React, { useState } from 'react';

const ClientList = () => {
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
            <h1>Listar clientes</h1>
            <div className="form-group">
                <label>Nome</label>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                // onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default ClientList;
