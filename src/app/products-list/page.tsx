'use client'

import "./page.css";

import React, { useState } from 'react';

const products = [
    { id: 1, name: 'Marmita de frango com vegetais ao vapor', description: 'This is the description for product 1', price: '$10', image: 'https://static.itdg.com.br/images/auto-auto/5ffded59699ca5b00e18b140fece40e5/marmita-fitness.jpg' },
    { id: 2, name: 'Patinho com purê de abóbora e legumes ao vapor', description: '100g de patinho, 70g gramas de abóbora, 160g de legumes', price: '$20', image: 'https://static.itdg.com.br/images/auto-auto/5ffded59699ca5b00e18b140fece40e5/marmita-fitness.jpg' },
    { id: 3, name: 'Product 3', description: 'This is the description for product 3', price: '$30', image: 'https://static.itdg.com.br/images/auto-auto/5ffded59699ca5b00e18b140fece40e5/marmita-fitness.jpg' },
    { id: 4, name: 'Product 4', description: 'This is the description for product 4', price: '$30', image: 'https://static.itdg.com.br/images/auto-auto/5ffded59699ca5b00e18b140fece40e5/marmita-fitness.jpg' },
    { id: 5, name: 'Product 5', description: 'This is the description for product 5', price: '$30', image: 'https://static.itdg.com.br/images/auto-auto/5ffded59699ca5b00e18b140fece40e5/marmita-fitness.jpg' },
    { id: 6, name: 'Product 6', description: 'This is the description for product 6', price: '$30', image: 'https://static.itdg.com.br/images/auto-auto/5ffded59699ca5b00e18b140fece40e5/marmita-fitness.jpg' },
    { id: 7, name: 'Patinho com purê de abóbora e legumes ao vapor', description: '100g de patinho, 70g gramas de abóbora, 160g de legumes', price: '$20', image: 'https://static.itdg.com.br/images/auto-auto/5ffded59699ca5b00e18b140fece40e5/marmita-fitness.jpg' },
    { id: 8, name: 'Patinho com purê de abóbora e legumes ao vapor', description: '100g de patinho, 70g gramas de abóbora, 160g de legumes', price: '$20', image: 'https://static.itdg.com.br/images/auto-auto/5ffded59699ca5b00e18b140fece40e5/marmita-fitness.jpg' },
    { id: 9, name: 'Patinho com purê de abóbora e legumes ao vapor', description: '100g de patinho, 70g gramas de abóbora, 160g de legumes', price: '$20', image: 'https://static.itdg.com.br/images/auto-auto/5ffded59699ca5b00e18b140fece40e5/marmita-fitness.jpg' },
    { id: 10, name: 'Patinho com purê de abóbora e legumes ao vapor', description: '100g de patinho, 70g gramas de abóbora, 160g de legumes', price: '$20', image: 'https://static.itdg.com.br/images/auto-auto/5ffded59699ca5b00e18b140fece40e5/marmita-fitness.jpg' },
];

function ProductList() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="App">
            <header className="App-header">
                <h1>Lista de produtos</h1>
                <input
                    type="text"
                    placeholder="Digite o que você busca..."
                    value={searchTerm}
                    className="search-box"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="product-list">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default ProductList;
