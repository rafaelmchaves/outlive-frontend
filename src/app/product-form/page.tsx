'use client'

import "./page.css";
import React, { useState } from 'react';
import { saveProduct } from '../../api/productService';

interface Product {
    name: string;
    type: string;
    description: string;
    price: string;
    fraction: string;
    sellerId: string;
}

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        type: '',
        price: '',
        fraction: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduct((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleCancel = () => {
        setProduct({
            name: '',
            description: '',
            type: '',
            price: '',
            fraction: '',
        });
    };

    const handleConfirm = () => {
        // Handle the form submission logic here, e.g., sending the product data to a server
        console.log('Product created:', product);
        const newProduct: Product = {
            name: product.name,
            description: product.description,
            type: 'MARMITA_CONGELADA',
            price: product.price,
            fraction: product.fraction,
            sellerId: 'de497f7e-8e6c-4b61-bf25-c547f4b652f1'
        };

        saveProduct(newProduct);
        setSuccessMessage("Produto criado com sucesso");
        handleCancel(); // Reset form after submission
    };

    return (
        <div className="product-form">
            <h1>Cadastrar novo produto</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <div className="form-group">
                <label>Nome:</label>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Descrição:</label>
                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Tipo:</label>
                <input
                    type="text"
                    name="type"
                    value='MARMITA_CONGELADA'
                />
            </div>
            <div className="form-group">
                <label>Preço:</label>
                <input
                    type="text"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Peso:</label>
                <input
                    type="text"
                    name="fraction"
                    value={product.fraction}
                    onChange={handleChange}
                />
            </div>
            <div className="form-buttons">
                <button className=".cancel-button " onClick={handleCancel}>Cancelar</button>
                <button type="submit" onClick={handleConfirm}>Cadastrar</button>
            </div>
        </div>
    );
};

export default ProductForm;
